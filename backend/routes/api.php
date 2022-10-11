<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstructorController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api', 'prefix' => 'auth'], function () {
    Route::controller(AdminController::class)->group(function () {
        Route::get('/get_instructors', "getInstructors");
        Route::get('/get_students',"getStudents");
        Route::get('/get_courses',  "getCourses");
        Route::post('/add_user',"addUser");
        Route::post('/add_course', "addCourse");
        Route::post('/update_course', "updateCourse");
        Route::post('/update_user', "updateUser");
    });

    Route::controller(InstructorController::class)->group(function () {
        Route::get('/get_instructors_courses',  "getInstructorsCourses");
        Route::post('/enroll_student', "enrollStudent" );
        Route::post('/create_assignment', "createAssignment");
        Route::post('/create_announcement',"createAnnouncement");
        Route::post('/edit_assignment', "editAssignment");
        Route::post('/edit_announcement', "editAnnouncement");
        Route::get('/get_instructors_courses',  "getInstructorsCourses");
        Route::get('/get_students_in_course/{course_id}', "getStudentsPerCourse");
        Route::get('/get_submitted_assignments/{assignment_id}', "getSubmittedAssignments");
        Route::get('/get_assignments/{course_id}', "getInstructorsCourses");
    });

    Route::controller(StudentController::class)->group(function () {
        Route::get('/get_student_courses', "getStudentsCourses");
        Route::get('/get_course_announcements/{course_id}', "getCourseAnnouncements");
        Route::post('/submit_assignment', "submitAssignment");
    });
});

Route::post('login', [AuthController::class, "login"]);
