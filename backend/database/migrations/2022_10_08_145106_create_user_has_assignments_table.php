<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserHasAssignmentsTable extends Migration
{
    public function up()
    {
        Schema::create('user_has_assignments', function (Blueprint $table) {
            $table->id();
            $table->string("assignment_id");
            $table->string("user_id");
            $table->string("solution");
            $table->timestamp('finished_at');
            $table->timestamps();
            $table->unique(["user_id", "assignment_id"]);
        });
    }

    public function down()
    {
        Schema::dropIfExists('student_has_assignments');
    }
}
