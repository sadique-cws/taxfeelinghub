@extends('emails.layout')

@section('content')
    <h2>New Reply on Ticket #{{ $ticket->id }}</h2>
    <p>There is a new message from <strong>{{ $reply->user->name }}</strong> regarding your support ticket.</p>
    
    <div style="background: #f8f8f8; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #D4AF37;">
        <p style="white-space: pre-wrap;">{{ $reply->message }}</p>
    </div>

    @php
        $url = $reply->user->role === 'admin' 
            ? config('app.url') . '/dashboard/tickets/' . $ticket->id 
            : config('app.url') . '/admin/tickets/' . $ticket->id;
    @endphp

    <a href="{{ $url }}" className="button">View Thread</a>

    <div className="meta">
        <p>You received this because you are part of this support thread.</p>
    </div>
@endsection
