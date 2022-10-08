<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
    
}
