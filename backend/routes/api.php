<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api', 'prefix' => 'auth'], function () {

});

Route::post('login', [AuthController::class, "login"]);
Route::post('register', [AuthController::class, "register"]);
