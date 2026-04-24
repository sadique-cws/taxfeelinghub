import { Head, useForm } from '@inertiajs/react';
import { BreadcrumbItem } from '@/types';
import { FileUp, Trash2, FileText, Download, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Client {
    id: number;
    name: string;
    email: string;
}

interface Document {
    id: number;
    name: string;
    category: string;
    size: number;
    created_at: string;
    user: Client;
}

interface Props {
    documents: Document[];
    clients: Client[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin/documents' },
    { title: 'Documents', href: '/admin/documents' },
];

export default function AdminDocuments({ documents, clients }: Props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        user_id: '',
        file: null as File | null,
        category: 'Tax Filing',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/documents', {
            onSuccess: () => reset('file'),
        });
    };

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <>
            <Head title="Admin Documents" />

            <div className="p-6 space-y-6 bg-white min-h-full">
                {/* Header - Flat */}
                <div className="border border-slate-200 p-6 bg-slate-50">
                    <h1 className="text-2xl font-bold text-slate-900">Document Management</h1>
                    <p className="text-slate-500 mt-1 text-sm">Upload and manage documents for your clients.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Upload Section - Flat */}
                    <div className="lg:col-span-1 border border-slate-200 bg-white p-6">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <FileUp className="h-5 w-5" />
                            Upload New Document
                        </h2>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Select Client</label>
                                <Select onValueChange={(val) => setData('user_id', val)}>
                                    <SelectTrigger className="rounded-none border-slate-200 focus:ring-0">
                                        <SelectValue placeholder="Choose a client..." />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-none border-slate-200 shadow-none">
                                        {clients.map(client => (
                                            <SelectItem key={client.id} value={client.id.toString()}>
                                                {client.name} ({client.email})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.user_id && <p className="text-red-600 text-xs mt-1">{errors.user_id}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Category</label>
                                <Input 
                                    className="rounded-none border-slate-200 focus:ring-0" 
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value)}
                                    placeholder="e.g. GST Filing, Audit Report"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">File</label>
                                <Input 
                                    type="file" 
                                    className="rounded-none border-slate-200 focus:ring-0 cursor-pointer" 
                                    onChange={e => setData('file', e.target.files?.[0] || null)}
                                />
                                {errors.file && <p className="text-red-600 text-xs mt-1">{errors.file}</p>}
                            </div>

                            <Button 
                                type="submit" 
                                disabled={processing}
                                className="w-full rounded-none bg-slate-900 hover:bg-slate-800 text-white font-bold py-6 shadow-none"
                            >
                                {processing ? 'Uploading...' : 'Upload Document'}
                            </Button>
                        </form>
                    </div>

                    {/* Table Section - Flat */}
                    <div className="lg:col-span-2 border border-slate-200 bg-white overflow-hidden">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h2 className="font-bold text-slate-900">Recent Uploads</h2>
                            <span className="text-xs font-medium px-2 py-1 bg-slate-200 text-slate-700">{documents.length} Files</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Document</th>
                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Client</th>
                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Category</th>
                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500">Date</th>
                                        <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {documents.length > 0 ? documents.map(doc => (
                                        <tr key={doc.id} className="text-sm">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 bg-slate-100 flex items-center justify-center text-slate-500">
                                                        <FileText className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 line-clamp-1">{doc.name}</p>
                                                        <p className="text-xs text-slate-500">{formatSize(doc.size)}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <UserIcon className="h-3 w-3 text-slate-400" />
                                                    <span className="font-medium">{doc.user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                                                    {doc.category || 'Uncategorized'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-slate-500">
                                                {new Date(doc.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-4 py-3 text-right">
                                                <button 
                                                    onClick={() => {
                                                        if(confirm('Are you sure you want to delete this document?')) {
                                                            // Handle delete
                                                        }
                                                    }}
                                                    className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={5} className="px-4 py-12 text-center text-slate-400">
                                                No documents found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminDocuments.layout = {
    breadcrumbs: [
        { title: 'Admin', href: '/admin/documents' },
        { title: 'Documents', href: '/admin/documents' },
    ],
};
