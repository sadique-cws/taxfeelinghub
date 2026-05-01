<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class FeedbackController extends Controller
{
    public function create()
    {
        return Inertia::render('dashboard/feedback/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'business_name' => 'nullable|string|max:255',
            'content' => 'required|string|min:20',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        Testimonial::create([
            'client_name' => Auth::user()->name,
            'business_name' => $validated['business_name'],
            'content' => $validated['content'],
            'rating' => $validated['rating'],
            'status' => 'draft', // User submitted feedback starts as draft
            'is_featured' => false,
        ]);

        return redirect()->route('dashboard')->with('success', 'Thank you for your feedback! It will be reviewed by our team.');
    }
}
