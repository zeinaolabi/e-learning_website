<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Course;
use App\Models\EnrolledIn;
use App\Models\UserHasAssignment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class StudentController extends Controller
{
    function getStudentsAssignments($courseID){
        $userID = Auth::id();
        $courseExist = Course::find($courseID);

        if(!$courseExist){
            return response()->json([
                'message' => 'Unable to Retrieve Data',
            ], 400);
        }

        $courses = EnrolledIn::where("user_id", $userID)->pluck('course_id');

        $assignments = Assignment::whereIn("course_id", $courses)->get();

        foreach ($assignments as $assignment) {
            $assignment->user;
        }

        return response()->json($assignments, 200);
    }

    function getStudentsCourses(){
        $userID = Auth::id();

        $enrolledCourses = EnrolledIn::where("user_id", $userID)->pluck('course_id');

        $courses = Course::whereIn("_id", $enrolledCourses)->get();

        foreach ($courses as $course) {
            $course->user;
        }

        return response()->json($courses, 200);
    }

    function getCourseAnnouncements($courseID){
        $courseExist = Course::find($courseID);

        if(!$courseExist){
            return response()->json([
                'message' => 'Unable to Retrieve Data',
            ], 400);
        }

        $announcements = Announcement::where("course_id", $courseID)->
        orderBy("created_at", "desc")->get();

        foreach ($announcements as $announcement) {
            $announcement->user;
        }

        return response()->json($announcements, 200);
    }

    function submitAssignment(Request $request){
        $userID = Auth::id();

        //Validate all input
        $validator = Validator::make($request->all(), [
            'assignment_id' => 'required|string|unique:courses',
            'solution' => 'required|string'
        ]);

        //If validation failed, display an error
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 200);
        }

        $assignment = Assignment::find($request->assignment_id);

        if(!$assignment){
            return response()->json([
                'message' => "Unable to Submit Assignment",
                'error' => '400'
            ], 400);
        }

        $isSubmitted = UserHasAssignment::where("user_id", $userID)->
        where("assignment_id", $request->assignment_id)->first();

        if($isSubmitted){
            return response()->json([
                "error" => "400",
                "message" => 'Assignment Already Submitted'], 400);
        }

        UserHasAssignment::create($validator->validated());

        return response()->json([
            'message' => 'Assignment Successfully Submitted',
        ], 201);
    }
}
