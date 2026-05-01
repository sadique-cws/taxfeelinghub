@extends('emails.layout')

@section('content')
    <h2>New Document Available</h2>
    <p>Hello <strong>{{ $document->user->name }}</strong>,</p>
    <p>A new document has been uploaded to your client portal by your advisor.</p>
    
    <div style="background: #f8f8f8; padding: 20px; border-radius: 6px; margin: 20px 0;">
        <p><strong>Document Name:</strong> {{ $document->name }}</p>
        <p><strong>Category:</strong> {{ $document->category ?? 'General' }}</p>
        <p><strong>Date:</strong> {{ $document->created_at->format('M d, Y') }}</p>
    </div>

    <a href="{{ config('app.url') }}/dashboard/documents" className="button">Access My Documents</a>

    <div className="meta">
        <p>This is an automated notification. Please log in to your secure portal to view and download the file.</p>
    </div>
@endsection
