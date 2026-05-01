<?php

namespace App\Http\Controllers\Admin;

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
        return Inertia::render('admin/tickets/index', [
            'tickets' => Ticket::with('user:id,name,email')->latest()->get()
        ]);
    }

    public function show(Ticket $ticket)
    {
        return Inertia::render('admin/tickets/show', [
            'ticket' => $ticket->load('user', 'replies.user'),
        ]);
    }

    public function reply(Request $request, Ticket $ticket)
    {
        $validated = $request->validate([
            'message' => 'required|string',
            'status' => 'nullable|string|in:open,pending,closed',
        ]);

        $reply = $ticket->replies()->create([
            'user_id' => Auth::id(),
            'message' => $validated['message'],
        ]);

        // Notify Client
        \Illuminate\Support\Facades\Mail::to($ticket->user->email)->send(new \App\Mail\TicketRepliedNotification($ticket, $reply));

        if (isset($validated['status'])) {
            $ticket->update(['status' => $validated['status']]);
        } else if ($ticket->status === 'open') {
            $ticket->update(['status' => 'pending']);
        }

        return back()->with('success', 'Reply sent.');
    }

    public function updateStatus(Request $request, Ticket $ticket)
    {
        $validated = $request->validate([
            'status' => 'required|string|in:open,pending,closed',
        ]);

        $ticket->update(['status' => $validated['status']]);

        return back()->with('success', 'Ticket status updated.');
    }
}
