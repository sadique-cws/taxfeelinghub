<?php

namespace App\Http\Controllers;

use App\Models\CareerJob;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerJobController extends Controller
{
    /**
     * Public view: List active job openings.
     */
    public function index()
    {
        return Inertia::render('career', [
            'openings' => CareerJob::where('is_active', true)->latest()->get(),
        ]);
    }

    /**
     * Admin view: Manage all job openings.
     */
    public function adminIndex()
    {
        return Inertia::render('admin/jobs', [
            'jobs' => CareerJob::latest()->get(),
        ]);
    }

    /**
     * Store a new job opening.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'location' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        CareerJob::create($validated);

        return back()->with('success', 'Job opening created successfully.');
    }

    /**
     * Update an existing job opening.
     */
    public function update(Request $request, CareerJob $job)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:100',
            'location' => 'required|string|max:255',
            'description' => 'required|string',
            'is_active' => 'required|boolean',
        ]);

        $job->update($validated);

        return back()->with('success', 'Job opening updated successfully.');
    }

    /**
     * Delete a job opening.
     */
    public function destroy(CareerJob $job)
    {
        $job->delete();

        return back()->with('success', 'Job opening deleted.');
    }
}
