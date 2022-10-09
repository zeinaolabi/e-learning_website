<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Course;
use App\Models\EnrolledIn;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    function getStudentsAssignments($userID, $courseID){
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
}
