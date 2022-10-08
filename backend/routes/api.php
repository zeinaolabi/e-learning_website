<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api', 'prefix' => 'auth'], function () {
});

Route::get('get_instructors', [AdminController::class, "getInstructors"]);
Route::get('get_students', [AdminController::class, "getStudents"]);
Route::post('add_user', [AdminController::class, "addUser"]);
Route::post('add_course', [AdminController::class, "addCourse"]);
Route::post('update_course', [AdminController::class, "updateCourse"]);


Route::post('login', [AuthController::class, "login"]);
Route::post('register', [AuthController::class, "register"]);
