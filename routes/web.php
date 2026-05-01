<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

use App\Http\Controllers\SeoController;
use App\Http\Controllers\LeadController;
use App\Http\Controllers\CareerJobController;
use App\Http\Controllers\PostController;

Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/services', 'services')->name('services');
Route::get('/blog', [PostController::class, 'index'])->name('blog');
Route::get('/blog/{slug}', [PostController::class, 'show'])->name('blog.show');
Route::get('/career', [CareerJobController::class, 'index'])->name('career');
Route::inertia('/contact', 'contact')->name('contact');
Route::post('/contact', [LeadController::class, 'store'])->name('contact.store');

// SEO & Sitemap
Route::get('/sitemap.xml', [SeoController::class, 'sitemap']);
Route::get('/best-tax-consultant-in-{city}/{area?}', [SeoController::class, 'locationPage'])->name('seo.location');

Route::prefix('services')->group(function () {
    Route::inertia('/accounting-support', 'services/accounting-support');
    Route::inertia('/trademark-copyright', 'services/trademark-copyright');
    Route::inertia('/firm-company-registration', 'services/firm-company-registration');
    Route::inertia('/compliance-services', 'services/compliance-services');
    Route::inertia('/accounting-services', 'services/accounting-services');
    Route::inertia('/business-fund-management', 'services/business-fund-management');
    Route::inertia('/direct-taxes', 'services/direct-taxes');
    Route::inertia('/indirect-taxes', 'services/indirect-taxes');
    Route::inertia('/miscellaneous-services', 'services/miscellaneous-services');
});

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\ClientController;

// Pending approval page (authenticated but not approved)
Route::middleware(['auth'])->group(function () {
    Route::inertia('pending', 'auth/pending')->name('pending');
});

Route::middleware(['auth', 'verified', 'approved'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    
    // User Document Routes
    Route::get('dashboard/documents', [DocumentController::class, 'userIndex'])->name('dashboard.documents');
    Route::get('dashboard/documents/download', [DocumentController::class, 'downloadZip'])->name('dashboard.documents.download');
    Route::get('dashboard/documents/{document}/download', [DocumentController::class, 'download'])->name('dashboard.documents.single-download');
    Route::delete('documents/{document}', [DocumentController::class, 'destroy'])->name('documents.destroy');

    // User Testimonial Routes
    Route::get('dashboard/feedback', [\App\Http\Controllers\Client\FeedbackController::class, 'create'])->name('dashboard.feedback.create');
    Route::post('dashboard/feedback', [\App\Http\Controllers\Client\FeedbackController::class, 'store'])->name('dashboard.feedback.store');

    // Admin Routes
    Route::middleware(['admin'])->prefix('admin')->group(function () {
        Route::get('documents', [DocumentController::class, 'adminIndex'])->name('admin.documents');
        Route::post('documents', [DocumentController::class, 'store'])->name('admin.documents.store');
        Route::get('clients', [ClientController::class, 'index'])->name('admin.clients');
        
        // Admin Blog Management
        Route::get('blogs', [PostController::class, 'adminIndex'])->name('admin.blogs');
        Route::get('blogs/create', [PostController::class, 'create'])->name('admin.blogs.create');
        Route::post('blogs', [PostController::class, 'store'])->name('admin.blogs.store');
        Route::get('blogs/{post}/edit', [PostController::class, 'edit'])->name('admin.blogs.edit');
        Route::patch('blogs/{post}', [PostController::class, 'update'])->name('admin.blogs.update');
        Route::delete('blogs/{post}', [PostController::class, 'destroy'])->name('admin.blogs.destroy');
        Route::patch('clients/{user}/approve', [ClientController::class, 'approve'])->name('admin.clients.approve');
        Route::patch('clients/{user}/reject', [ClientController::class, 'reject'])->name('admin.clients.reject');
        Route::delete('clients/{user}', [ClientController::class, 'destroy'])->name('admin.clients.destroy');

        // Admin Job Management
        Route::get('jobs', [CareerJobController::class, 'adminIndex'])->name('admin.jobs');
        Route::post('jobs', [CareerJobController::class, 'store'])->name('admin.jobs.store');
        Route::patch('jobs/{job}', [CareerJobController::class, 'update'])->name('admin.jobs.update');
        Route::delete('jobs/{job}', [CareerJobController::class, 'destroy'])->name('admin.jobs.destroy');

        // Admin Lead Management
        Route::get('leads', [LeadController::class, 'index'])->name('admin.leads');
        Route::patch('leads/{lead}/toggle-read', [LeadController::class, 'toggleRead'])->name('admin.leads.toggle-read');
        Route::delete('leads/{lead}', [LeadController::class, 'destroy'])->name('admin.leads.destroy');

        // Admin Testimonial Management
        Route::resource('testimonials', \App\Http\Controllers\Admin\TestimonialController::class)->names('admin.testimonials');
    });
});

require __DIR__.'/settings.php';
