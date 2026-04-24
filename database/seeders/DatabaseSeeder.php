<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin Account
        User::updateOrCreate(
            ['email' => 'admin@taxfilinghub.com'],
            [
                'name' => 'Admin Advisor',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // Client Account
        User::updateOrCreate(
            ['email' => 'client@taxfilinghub.com'],
            [
                'name' => 'John Client',
                'password' => Hash::make('password'),
                'role' => 'user',
            ]
        );
    }
}
