<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareerJob extends Model
{
    protected $fillable = [
        'title',
        'type',
        'location',
        'description',
        'is_active',
    ];
}
