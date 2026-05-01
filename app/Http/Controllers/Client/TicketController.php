<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Models\TicketReply;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    public function index()
    {
        return Inertia::render('dashboard/tickets/index', [
            'tickets' => Auth::user()->tickets()->latest()->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/tickets/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'priority' => 'required|string|in:low,medium,high',
            'description' => 'required|string',
        ]);

        $ticket = Auth::user()->tickets()->create($validated);

        // Notify Admin
        $adminEmail = \App\Models\User::where('role', 'admin')->first()?->email ?? config('mail.from.address');
        \Illuminate\Support\Facades\Mail::to($adminEmail)->send(new \App\Mail\TicketCreatedNotification($ticket));

        return redirect()->route('dashboard.tickets.show', $ticket->id)->with('success', 'Support ticket raised successfully.');
    }

    public function show(Ticket $ticket)
    {
        if ($ticket->user_id !== Auth::id()) {
            abort(403);
        }

        return Inertia::render('dashboard/tickets/show', [
            'ticket' => $ticket->load('replies.user'),
        ]);
    }

    public function reply(Request $request, Ticket $ticket)
    {
        if ($ticket->user_id !== Auth::id()) {
            abort(403);
        }

        if ($ticket->status === 'closed') {
            return back()->with('error', 'Cannot reply to a closed ticket.');
        }

        $validated = $request->validate([
            'message' => 'required|string',
        ]);

        $reply = $ticket->replies()->create([
            'user_id' => Auth::id(),
            'message' => $validated['message'],
        ]);

        // Notify Admin
        $adminEmail = \App\Models\User::where('role', 'admin')->first()?->email ?? config('mail.from.address');
        \Illuminate\Support\Facades\Mail::to($adminEmail)->send(new \App\Mail\TicketRepliedNotification($ticket, $reply));

        return back()->with('success', 'Reply sent.');
    }

    public function close(Ticket $ticket)
    {
        if ($ticket->user_id !== Auth::id()) {
            abort(403);
        }

        $ticket->update(['status' => 'closed']);

        return back()->with('success', 'Ticket closed.');
    }
}
