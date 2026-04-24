<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('status')->default('pending')->after('role');
            $table->string('phone')->nullable()->after('email');
            $table->string('google_id')->nullable()->after('status');
        });

        // Set existing users as approved
        DB::table('users')->update(['status' => 'approved']);
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['status', 'phone', 'google_id']);
        });
    }
};
