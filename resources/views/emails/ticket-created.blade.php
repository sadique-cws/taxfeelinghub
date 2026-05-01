@extends('emails.layout')

@section('content')
    <h2>New Support Ticket Raised</h2>
    <p>A new support ticket has been raised by <strong>{{ $ticket->user->name }}</strong>.</p>
    
    <div style="background: #f8f8f8; padding: 20px; border-radius: 6px; margin: 20px 0;">
        <p><strong>Subject:</strong> {{ $ticket->subject }}</p>
        <p><strong>Priority:</strong> <span style="text-transform: uppercase; font-weight: bold;">{{ $ticket->priority }}</span></p>
        <p><strong>Description:</strong></p>
        <p style="white-space: pre-wrap;">{{ $ticket->description }}</p>
    </div>

    <a href="{{ config('app.url') }}/admin/tickets/{{ $ticket->id }}" className="button">View Ticket Details</a>

    <div className="meta">
        <p>This is an automated notification. Please log in to the admin panel to respond.</p>
    </div>
@endsection
