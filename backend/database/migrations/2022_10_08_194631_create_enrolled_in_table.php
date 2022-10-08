<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnrolledInTable extends Migration
{
    public function up()
    {
        Schema::create('enrolled_in', function (Blueprint $table) {
            $table->id();
            $table->string("course_id");
            $table->string("user_id");
            $table->timestamps();
            $table->unique(array(["user_id", "course_id"]));
        });
    }

    public function down()
    {
        Schema::dropIfExists('enrolled_in');
    }
}
