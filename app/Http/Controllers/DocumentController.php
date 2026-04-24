<?php

namespace App\Http\Controllers;

use App\Models\Document;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use ZipArchive;

class DocumentController extends Controller
{
    /**
     * Admin view: List all documents and clients.
     */
    public function adminIndex()
    {
        return Inertia::render('admin/documents', [
            'documents' => Document::with('user:id,name,email')->latest()->get(),
            'clients' => User::where('role', 'user')->select('id', 'name', 'email')->get(),
        ]);
    }

    /**
     * User view: List own documents.
     */
    public function userIndex(Request $request)
    {
        return Inertia::render('dashboard/documents', [
            'documents' => $request->user()->documents()->latest()->get(),
        ]);
    }

    /**
     * Admin: Upload a document for a client.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'file' => 'required|file|max:10240', // 10MB limit
            'category' => 'nullable|string|max:50',
        ]);

        $file = $request->file('file');
        $path = $file->store('client-documents');

        Document::create([
            'user_id' => $request->user_id,
            'name' => $file->getClientOriginalName(),
            'file_path' => $path,
            'category' => $request->category,
            'size' => $file->getSize(),
        ]);

        return back()->with('success', 'Document uploaded successfully.');
    }

    /**
     * Delete a document.
     */
    public function destroy(Document $document)
    {
        // Check permissions (Admin can delete any, User can delete own)
        if (auth()->user()->role !== 'admin' && auth()->id() !== $document->user_id) {
            abort(403);
        }

        Storage::delete($document->file_path);
        $document->delete();

        return back()->with('success', 'Document deleted.');
    }

    /**
     * User: Download all their documents as a ZIP.
     */
    public function downloadZip(Request $request)
    {
        $documents = $request->user()->documents;

        if ($documents->isEmpty()) {
            return back()->with('error', 'No documents found.');
        }

        $zipFileName = 'documents-' . now()->format('Y-m-d-His') . '.zip';
        $zipPath = storage_path('app/temp/' . $zipFileName);

        if (!is_dir(storage_path('app/temp'))) {
            mkdir(storage_path('app/temp'), 0755, true);
        }

        $zip = new ZipArchive;
        if ($zip->open($zipPath, ZipArchive::CREATE) === TRUE) {
            foreach ($documents as $doc) {
                if (Storage::exists($doc->file_path)) {
                    $zip->addFile(storage_path('app/' . $doc->file_path), $doc->name);
                }
            }
            $zip->close();
        }

        return response()->download($zipPath)->deleteFileAfterSend(true);
    }
}
