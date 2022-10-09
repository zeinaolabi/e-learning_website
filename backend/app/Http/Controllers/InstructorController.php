<?php

namespace App\Http\Controllers;

use App\Models\EnrolledIn;
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
}
