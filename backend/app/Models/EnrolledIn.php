<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class EnrolledIn extends Model
{
    protected $collection = 'enrolled_in';

    protected $fillable = [
        'course_id',
        'user_id'
    ];
}
