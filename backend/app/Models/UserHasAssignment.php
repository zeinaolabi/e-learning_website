<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;


class UserHasAssignment extends Model
{
    use HasFactory;

    protected $collection = "user_has_assignment";

    protected $fillable = [
        'assignment_id',
        'user_id',
        'solution'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
