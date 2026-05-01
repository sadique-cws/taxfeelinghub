<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use App\Models\Post;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('welcome', [
            'featured_testimonials' => Testimonial::where('status', 'published')
                ->where('is_featured', true)
                ->latest()
                ->take(6)
                ->get(),
            'recent_posts' => Post::where('status', 'published')
                ->latest()
                ->take(3)
                ->get()
        ]);
    }
}
