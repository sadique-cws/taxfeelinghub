<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/services', 'services')->name('services');
Route::inertia('/blog', 'blog')->name('blog');
Route::inertia('/career', 'career')->name('career');
Route::inertia('/contact', 'contact')->name('contact');

Route::prefix('services')->group(function () {
    Route::inertia('/accounting-support', 'services/accounting-support');
    Route::inertia('/trademark-copyright', 'services/trademark-copyright');
    Route::inertia('/firm-company-registration', 'services/firm-company-registration');
    Route::inertia('/compliance-services', 'services/compliance-services');
    Route::inertia('/accounting-services', 'services/accounting-services');
    Route::inertia('/business-fund-management', 'services/business-fund-management');
    Route::inertia('/direct-taxes', 'services/direct-taxes');
    Route::inertia('/indirect-taxes', 'services/indirect-taxes');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
