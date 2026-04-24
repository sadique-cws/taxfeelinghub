<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = $request->user();

        if ($user->role === 'admin') {
            $totalClients = User::where('role', 'user')->where('status', 'approved')->count();
            $pendingClients = User::where('role', 'user')->where('status', 'pending')->count();
            $totalDocuments = Document::count();
            $recentDocuments = Document::with('user:id,name,email')
                ->latest()
                ->take(5)
                ->get();
        } else {
            $totalClients = 0;
            $totalDocuments = $user->documents()->count();
            $recentDocuments = $user->documents()
                ->latest()
                ->take(5)
                ->get();
        }

        return Inertia::render('dashboard', [
            'stats' => [
                'totalClients' => $totalClients,
                'pendingClients' => $pendingClients ?? 0,
                'totalDocuments' => $totalDocuments,
                'storageUsed' => $user->role === 'admin'
                    ? Document::sum('size')
                    : $user->documents()->sum('size'),
            ],
            'recentDocuments' => $recentDocuments,
        ]);
    }
}
