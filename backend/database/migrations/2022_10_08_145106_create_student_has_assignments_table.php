<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentHasAssignmentsTable extends Migration
{
    public function up()
    {
        Schema::create('student_has_assignments', function (Blueprint $table) {
            $table->id();
            $table->integer("assignment_id");
            $table->integer("user_id");
            $table->date("finished_at")->nullable();
            $table->timestamps();
            $table->unique(array(["user_id", "assignment_id"]));
        });
    }

    public function down()
    {
        Schema::dropIfExists('student_has_assignments');
    }
}
