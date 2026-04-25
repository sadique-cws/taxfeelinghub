<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeadController extends Controller
{
    /**
     * Admin view: List all callback requests (leads).
     */
    public function index()
    {
        return Inertia::render('admin/leads', [
            'leads' => Lead::latest()->get(),
        ]);
    }

    /**
     * Store a new callback request from the contact form.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        Lead::create($validated);

        return back()->with('success', 'Your request has been sent. We will call you back shortly.');
    }

    /**
     * Toggle the read status of a lead.
     */
    public function toggleRead(Lead $lead)
    {
        $lead->update(['is_read' => !$lead->is_read]);

        return back()->with('success', 'Status updated.');
    }

    /**
     * Delete a lead.
     */
    public function destroy(Lead $lead)
    {
        $lead->delete();

        return back()->with('success', 'Lead deleted.');
    }
}
