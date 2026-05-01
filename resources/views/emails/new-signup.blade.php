@extends('emails.layout')

@section('content')
    <h2>New Client Signup</h2>
    <p>A new client has registered on the platform.</p>
    
    <div style="background: #f8f8f8; padding: 20px; border-radius: 6px; margin: 20px 0;">
        <p><strong>Name:</strong> {{ $user->name }}</p>
        <p><strong>Email:</strong> {{ $user->email }}</p>
        <p><strong>Registered At:</strong> {{ $user->created_at->format('M d, Y H:i') }}</p>
    </div>

    <a href="{{ config('app.url') }}/admin/clients" className="button">View Client List</a>

    <div className="meta">
        <p>Please review the new registration and assign tasks if necessary.</p>
    </div>
@endsection
