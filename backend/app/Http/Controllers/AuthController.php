<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;

class AuthController extends Controller
{
    public function login(Request $request){
        //Validate the input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        //If the validation failed, display an error
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //If authorization failed, display an error
        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    public function register(Request $request) {
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
            return response()->json($validator->errors()->toJson(), 400);
        }

        $validator->password = Hash::make($request->password);

        //No need to merge the array, just change the password
        $user = User::create($validator->validated());

        $user->token = auth()->login($user);

        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60 * 200,
            'user' => auth()->user()
        ]);
    }
}

