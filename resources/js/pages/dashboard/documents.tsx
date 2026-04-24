import { Head, Link, useForm } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { FileText, Download, Trash2, Archive, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document {
    id: number;
    name: string;
    category: string;
    size: number;
    created_at: string;
}

interface Props {
    documents: Document[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'My Documents', href: '/dashboard/documents' },
];

export default function UserDocuments({ documents }: Props) {
    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <>
            <Head title="My Documents" />

            <div className="p-6 space-y-6 bg-white min-h-full">
                {/* Header - Flat */}
                <div className="border border-slate-200 p-8 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">My Documents</h1>
                        <p className="text-slate-400 mt-2 text-sm max-w-md">Access your tax returns, registration certificates, and compliance reports here.</p>
                    </div>
                    <a 
                        href="/dashboard/documents/download"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-4 hover:bg-slate-100 transition-colors rounded-none"
                    >
                        <Archive className="h-5 w-5" />
                        Download All (ZIP)
                    </a>
                </div>

                {/* Summary Row - Flat */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="border border-slate-200 p-5 bg-white">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Files</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">{documents.length}</p>
                    </div>
                    <div className="border border-slate-200 p-5 bg-white">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Storage Used</p>
                        <p className="text-2xl font-bold text-slate-900 mt-1">
                            {formatSize(documents.reduce((acc, doc) => acc + doc.size, 0))}
                        </p>
                    </div>
                    <div className="border border-slate-200 p-5 bg-white">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Latest Upload</p>
                        <div className="flex items-center gap-2 text-slate-900 font-bold mt-1">
                            <Clock className="h-4 w-4 text-gold" />
                            {documents.length > 0 ? new Date(documents[0].created_at).toLocaleDateString() : 'N/A'}
                        </div>
                    </div>
                </div>

                {/* Document Grid - Flat */}
                <div className="border border-slate-200 bg-white">
                    <div className="p-4 border-b border-slate-200 bg-slate-50">
                        <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Files Available for Download</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Filename</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Category</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {documents.length > 0 ? documents.map(doc => (
                                    <tr key={doc.id} className="text-sm">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-slate-900 text-white flex items-center justify-center shrink-0">
                                                    <FileText className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900">{doc.name}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">{formatSize(doc.size)} • Uploaded {new Date(doc.created_at).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="font-bold text-slate-900 text-xs px-3 py-1 border border-slate-200 bg-slate-50 inline-block">
                                                {doc.category || 'General'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button 
                                                    variant="outline" 
                                                    className="rounded-none border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-colors h-10 shadow-none"
                                                    asChild
                                                >
                                                    <a href={`/storage/${doc.file_path}`} download={doc.name}>
                                                        <Download className="h-4 w-4 mr-2" />
                                                        Download
                                                    </a>
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-20 text-center">
                                            <div className="max-w-xs mx-auto">
                                                <Archive className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                                                <p className="font-bold text-slate-900 text-lg">No documents yet.</p>
                                                <p className="text-slate-500 text-sm mt-1">When the firm uploads your documents, they will appear here for you to download.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

UserDocuments.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
        { title: 'My Documents', href: '/dashboard/documents' },
    ],
};
