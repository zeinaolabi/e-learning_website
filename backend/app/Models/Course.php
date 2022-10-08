<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'user_id'
    ];

    public function assignments(){
        return $this->hasMany(Assignment::class, 'course_id', 'id');
    }

    public function announcements(){
        return $this->hasMany(Announcement::class, 'course_id', 'id');
    }
}
