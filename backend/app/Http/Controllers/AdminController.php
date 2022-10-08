<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class AdminController extends Controller
{
    function getInstructors(){
        $users = User::where("user_type_id", "2")->get();

        return response()->json(
            [
                "status" => "success",
                "Users" => $users], 200
        );
    }

    function getStudents(Request $request){
        $users = User::where("user_type_id", "3")->get();

        return response()->json(
            [
                "status" => "success",
                "Users" => $users], 200
        );
    }

    function addUser(Request $request){
        //Validate all input
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'user_type_id' => 'required|integer'
        ]);

        //If validation failed, display an error
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 200);
        }

        $validator->password = Hash::make($request->password);

        //No need to merge the array, just change the password
        $user = User::create($validator->validated());

        return response()->json([
            'message' => 'User Successfully Added',
            'user' => $user
        ], 201);
    }

    function addCourse(Request $request){
        //Validate all input
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:courses',
            'description' => 'required|string|max:150',
            'user_id' => 'required|string',
        ]);

        //If validation failed, display an error
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 200);
        }

        $user = User::find($validator->validated()["user_id"]);

        if(!$user){
            return response()->json([
                'message' => "Unable to Assign Course",
                'error' => '400'
            ], 400);
        }

        $course = Course::create($validator->validated());

        return response()->json([
            'message' => 'Course Successfully Added',
            'course' => $course
        ], 201);
    }

}
