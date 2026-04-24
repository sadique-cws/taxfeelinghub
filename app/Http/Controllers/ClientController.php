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
    public function index()
    {
        $clients = User::where('role', 'user')
            ->withCount('documents')
            ->latest()
            ->get();

        return Inertia::render('admin/clients', [
            'clients' => $clients,
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
