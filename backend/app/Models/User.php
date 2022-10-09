<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Jenssegers\Mongodb\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable  implements JWTSubject
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
        return $this->hasMany(Assignment::class, 'user_id', '_id');
    }

    public function announcements(){
        return $this->hasMany(Announcement::class, 'user_id', '_id');
    }

    public function courses(){
        return $this->hasMany(Course::class, 'user_id', '_id');
    }

    public function userHasAssignments(){
        return $this->hasMany(UserHasAssignment::class, 'user_id', '_id');
    }

    public function enrolledIn(){
        return $this->hasMany(EnrolledIn::class);
    }

    public function getJWTIdentifier(){
        return $this->getKey();
    }

    public function getJWTCustomClaims(){
        return [];
    }

}
