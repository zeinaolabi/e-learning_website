<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Course;
use App\Models\EnrolledIn;
use App\Models\User;
use App\Models\UserHasAssignment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class InstructorController extends Controller
{
    function enrollStudent(Request $request){
        $validator = Validator::make($request->all(), [
            'course_id' => 'required|string',
            'user_id' => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJSON(), 200);
        }

        $isEnrolled = EnrolledIn::where("user_id", $request->user_id)->
        where("course_id", $request->course_id)->first();

        if($isEnrolled){
            return response()->json([
                "error" => "400",
                "message" => 'Student Already Enrolled'], 400);
        }

        EnrolledIn::create($validator->validated());

        return response()->json(["message" => 'Student Successfully Enrolled'], 201);
    }

    function createAssignment(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'course_id' => 'required|string',
            'user_id' => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJSON(), 200);
        }

        if(!$this->validateExistence($request->user_id, $request->course_id)){
            return response()->json([
                "error" => "400",
                "message" => "Unable to Create Assignment"], 400);
        }

        Assignment::create($validator->validated());

        return response()->json(["message" => 'Assignment Successfully Created'], 201);
    }

    function editAssignment(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|string',
            'name' => 'string',
            'description' => 'string',
            'due_date' => 'date',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJSON(), 200);
        }

        $assignment = Assignment::find($request->id);
        if(!$assignment){
            return response()->json([
                "error" => "400",
                "message" => "Unable to Make Changes"], 400);
        }

        $assignment->name = $request->name != null ? $request->name : $assignment->name;
        $assignment->description = $request->description != null ? $request->description : $assignment->description;
        $assignment->due_date = $request->due_date != null ? $request->due_date : $assignment->due_date;

        //If the new data wasn't saved, send back an error
        if(!$assignment->save()){
            return response()->json([
                'message' => 'Unsuccessful Editing',
            ], 400);
        }

        return response()->json([
            'message' => 'Assignment Successfully Edited',
            'course' => $assignment
        ], 201);
    }

    function createAnnouncement(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'course_id' => 'required|string',
            'user_id' => 'required|string'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJSON(), 200);
        }

        if($this->validateExistence($request->user_id, $request->course_id)){
            return response()->json([
                "error" => "400",
                "message" => "Unable to Create Announcement"], 400);
        }

        Announcement::create($validator->validated());

        return response()->json(["message" => 'Announcement Successfully Created'], 201);
    }

    function editAnnouncement(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|string',
            'title' => 'string',
            'description' => 'string',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJSON(), 200);
        }

        $announcement = Announcement::find($request->id);
        if(!$announcement){
            return response()->json([
                "error" => "400",
                "message" => "Unable to Make Changes"], 400);
        }

        $announcement->title = $request->title != null ? $request->title : $announcement->title;
        $announcement->description = $request->description != null ? $request->description : $announcement->description;

        //If the new data wasn't saved, send back an error
        if(!$announcement->save()){
            return response()->json([
                'message' => 'Unsuccessful Editing',
            ], 400);
        }

        return response()->json([
            'message' => 'Assignment Successfully Edited',
            'course' => $announcement
        ], 201);
    }

    function getInstructorsCourses(){
        $userID = Auth::id();

        $course = Course::where("user_id", $userID)->get();

        return response()->json($course, 201);
    }

    function getInstructorsAssignments($courseID){
        $userID = Auth::id();

        $courseExist = Course::find($courseID);

        if(!$courseExist){
            return response()->json([
                'message' => 'Unable to Retrieve Data',
            ], 400);
        }

        $assignment = Assignment::where("user_id", $userID)->
            where("course_id", $courseID)->get();

        return response()->json($assignment, 201);
    }

    function getStudentsPerCourse($courseID){
        $courseExist = Course::find($courseID);

        if(!$courseExist){
            return response()->json([
                'message' => 'Unable to Retrieve Data',
            ], 400);
        }

        $students = EnrolledIn::where("course_id", $courseID)->get();

        $result = [];
        foreach ($students as $student) {
            $result[] = $student->user;
        }

        return response()->json($result, 201);
    }

    function getSubmittedAssignments($assignmentID){
        $assignmentExist = Assignment::find($assignmentID);

        if(!$assignmentExist){
            return response()->json([
                'message' => 'Unable to Retrieve Data',
            ], 400);
        }

        $submittedAssignments = UserHasAssignment::where("assignment_id", $assignmentID)->get();

        foreach($submittedAssignments as $submittedAssignment){
            $submittedAssignment->user;
        }

        return response()->json($submittedAssignments, 201);
    }

    function validateExistence($userID, $courseID){
        $userExist = User::find($userID);
        $courseExist = Course::find($courseID);

        if(!$userExist || !$courseExist){
            return true;
        }
        return false;
    }
}
