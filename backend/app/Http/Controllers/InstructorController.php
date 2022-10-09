<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Assignment;
use App\Models\Course;
use App\Models\EnrolledIn;
use App\Models\User;
use Illuminate\Http\Request;
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

    function validateExistence($userID, $courseID){
        $userExist = User::find($userID);
        $courseExist = Course::find($courseID);

        if(!$userExist || !$courseExist){
            return true;
        }
        return false;
    }
}
