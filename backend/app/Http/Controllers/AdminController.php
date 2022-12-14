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

        return response()->json([
                "status" => "success",
                "Users" => $users], 200);
    }

    function getStudents(){
        $users = User::where("user_type_id", "3")->get();

        return response()->json([
                "status" => "success",
                "Users" => $users], 200);
    }

    function getCourses(){
        $courses = Course::get();

        foreach ($courses as $course) {
            $course->user;
        }

        return response()->json([
            "status" => "success",
            "Users" => $courses], 200);
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
            'email' => 'required|string',
        ]);

        //If validation failed, display an error
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 200);
        }

        $user = User::where("email", $request->email)->first();

        if(!$user){
            return response()->json([
                'message' => "Unable to Assign Course",
                'error' => '400'
            ], 400);
        }

        $course = Course::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => $user->id,
        ]);

        return response()->json([
            'message' => 'Course Successfully Added',
            'course' => $course
        ], 201);
    }

    function updateCourse(Request $request){
        //Validate all input
        $validator = Validator::make($request->all(), [
            'id' => 'required|string',
            'name' => 'string|unique:courses',
            'description' => 'string|max:150',
            'user_id' => 'string'
        ]);

        //If validation failed, display an error
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 200);
        }

        //Check if the user the course is assigned to exists
        if($request->user_id){
            if(!User::find($request->user_id)) {
                return response()->json([
                    'message' => "Unable to Assign Course",
                    'error' => '400'
                ], 400);
            }
        }

        $course = Course::find($request->id);

        //Modify the info depending on the user's sent data
        $course->name = $request->name != null ? $request->name : $course->name;
        $course->description = $request->description != null ? $request->description : $course->description;
        $course->user_id = $request->user_id != null ? $request->user_id : $course->user_id;

        //If the new data wasn't saved, send back an error
        if(!$course->save()){
            return response()->json([
                'message' => 'Unsuccessful Editing',
            ], 400);
        }

        return response()->json([
            'message' => 'Course Successfully Edited',
            'course' => $course
        ], 201);
    }

    function updateUser(Request $request){
        //Validate all input
        $validator = Validator::make($request->all(), [
            'id' => 'required|string',
            'first_name' => 'string',
            'last_name' => 'string',
            'email' => 'string|email|unique:users',
            'password' => 'string|min:6'
        ]);

        //If validation failed, display an error
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 200);
        }

        $user = User::find($request->id);

        //Modify the info depending on the user's sent data
        $user->first_name = $request->first_name != null ? $request->first_name : $user->first_name;
        $user->last_name = $request->last_name != null ? $request->last_name : $user->last_name;
        $user->email = $request->email != null ? $request->email : $user->email;
        $user->password = $request->password != null ? Hash::make($request->password) : $user->password;

        //If the new data wasn't saved, send back an error
        if(!$user->save()){
            return response()->json([
                'message' => 'Unsuccessful Editing',
            ], 400);
        }

        return response()->json([
            'message' => 'Course Successfully Edited',
            'course' => $user
        ], 201);
    }
}
