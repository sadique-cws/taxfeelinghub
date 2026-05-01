<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * List all clients for admin management.
     */
    public function index(Request $request)
    {
        $query = User::where('role', 'user')->withCount('documents')->latest();

        if ($request->filled('search')) {
            $search = $request->input('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        if ($request->filled('status') && in_array($request->status, ['pending', 'approved', 'rejected'])) {
            $query->where('status', $request->status);
        }

        return Inertia::render('admin/clients', [
            'clients' => $query->get(),
            'filters' => $request->only(['search', 'status'])
        ]);
    }

    /**
     * View client details.
     */
    public function show(User $user)
    {
        return Inertia::render('admin/clients/show', [
            'client' => $user->loadCount('documents')->load('documents'),
            'tickets' => $user->tickets()->latest()->get(),
        ]);
    }

    /**
     * Approve a client.
     */
    public function approve(User $user)
    {
        $user->update(['status' => 'approved']);
        return back()->with('success', "{$user->name} has been approved.");
    }

    /**
     * Reject a client.
     */
    public function reject(User $user)
    {
        $user->update(['status' => 'rejected']);
        return back()->with('success', "{$user->name} has been rejected.");
    }

    /**
     * Delete a client.
     */
    public function destroy(User $user)
    {
        $user->documents()->delete();
        $user->delete();
        return back()->with('success', 'Client deleted.');
    }
}
