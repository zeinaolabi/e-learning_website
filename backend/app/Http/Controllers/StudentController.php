<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Course;
use App\Models\EnrolledIn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    function getStudentsCourses($courseID){
        $userID = Auth::id();
        $courseExist = Course::find($courseID);

        if(!$courseExist){
            return response()->json([
                'message' => 'Unable to Retrieve Data',
            ], 400);
        }

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
}
