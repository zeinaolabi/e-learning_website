<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstructorController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api', 'prefix' => 'auth'], function () {
});

Route::get('get_instructors', [AdminController::class, "getInstructors"]);
Route::get('get_students', [AdminController::class, "getStudents"]);
Route::post('add_user', [AdminController::class, "addUser"]);
Route::post('add_course', [AdminController::class, "addCourse"]);
Route::post('update_course', [AdminController::class, "updateCourse"]);

Route::post('enroll_student', [InstructorController::class, "enrollStudent"]);
Route::post('create_assignment', [InstructorController::class, "createAssignment"]);
Route::post('create_announcement', [InstructorController::class, "createAnnouncement"]);
Route::post('edit_assignment', [InstructorController::class, "editAssignment"]);
Route::post('edit_announcement', [InstructorController::class, "editAnnouncement"]);
Route::get('get_instructors_courses', [InstructorController::class, "getInstructorsCourses"]);


Route::post('login', [AuthController::class, "login"]);
Route::post('register', [AuthController::class, "register"]);
