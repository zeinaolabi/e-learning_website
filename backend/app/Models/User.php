<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Jenssegers\Mongodb\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'user_type_id'
    ];

    protected $hidden = [
        'password',
    ];

    public function assignments(){
        return $this->hasMany(Assignment::class, 'user_id', 'id');
    }

    public function announcements(){
        return $this->hasMany(Announcement::class, 'user_id', 'id');
    }

    public function courses(){
        return $this->hasMany(Course::class, 'user_id', 'id');
    }

    public function userHasAssignments(){
        return $this->hasMany(UserHasAssignment::class, 'user_id', 'id');
    }

}
