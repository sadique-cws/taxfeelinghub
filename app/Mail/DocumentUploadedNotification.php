<?php

namespace App\Mail;

use App\Models\Document;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DocumentUploadedNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $document;

    public function __construct(Document $document)
    {
        $this->document = $document;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Document Uploaded: ' . $this->document->name,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.document-uploaded',
        );
    }
}
