import { Head, useForm, router } from '@inertiajs/react';
import { FileUp, Trash2, FileText, User as UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Client { id: number; name: string; email: string; }
interface Document { id: number; name: string; category: string; size: number; created_at: string; user: Client; }
interface Props { documents: Document[]; clients: Client[]; }

export default function AdminDocuments({ documents, clients }: Props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        user_id: '',
        file: null as File | null,
        category: 'Tax Filing',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/documents', { onSuccess: () => reset('file') });
    };

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <>
            <Head title="Admin Documents" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="gold-rule" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</span>
                    </div>
                    <h1 className="font-display text-3xl font-bold tracking-tight">Document Management</h1>
                    <p className="text-white/70 mt-2">Upload and manage documents for your clients.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Upload Form */}
                    <div className="lg:col-span-1 rounded-xl border border-border bg-card p-6">
                        <h2 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <FileUp className="h-5 w-5 text-gold" />
                            Upload New Document
                        </h2>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Select Client</label>
                                <Select onValueChange={(val) => setData('user_id', val)}>
                                    <SelectTrigger className="rounded-xl border-border">
                                        <SelectValue placeholder="Choose a client..." />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-border">
                                        {clients.map(c => (
                                            <SelectItem key={c.id} value={c.id.toString()}>
                                                {c.name} ({c.email})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.user_id && <p className="text-red-500 text-xs mt-1">{errors.user_id}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Category</label>
                                <Input className="rounded-xl border-border" value={data.category} onChange={e => setData('category', e.target.value)} placeholder="e.g. GST Filing" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">File</label>
                                <Input type="file" className="rounded-xl border-border cursor-pointer" onChange={e => setData('file', e.target.files?.[0] || null)} />
                                {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file}</p>}
                            </div>
                            <Button type="submit" disabled={processing} className="w-full rounded-xl bg-primary hover:bg-secondary text-white font-bold py-6 shadow-elegant">
                                {processing ? 'Uploading...' : 'Upload Document'}
                            </Button>
                        </form>
                    </div>

                    {/* Table */}
                    <div className="lg:col-span-2 rounded-xl border border-border bg-card overflow-hidden">
                        <div className="p-5 border-b border-border flex justify-between items-center">
                            <h2 className="font-display font-bold text-primary">Recent Uploads</h2>
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">{documents.length} Files</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border bg-muted/50">
                                    <tr>
                                        <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Document</th>
                                        <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Client</th>
                                        <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</th>
                                        <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Date</th>
                                        <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {documents.length > 0 ? documents.map(doc => (
                                        <tr key={doc.id} className="text-sm hover:bg-muted/30 transition-smooth">
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                                        <FileText className="h-4 w-4" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-primary line-clamp-1">{doc.name}</p>
                                                        <p className="text-xs text-muted-foreground">{formatSize(doc.size)}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2">
                                                    <UserIcon className="h-3 w-3 text-gold" />
                                                    <span className="font-medium text-foreground">{doc.user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-4">
                                                <span className="inline-block px-2.5 py-1 rounded bg-gold/10 text-accent text-[10px] font-bold uppercase tracking-wider border border-gold/20">
                                                    {doc.category || 'Uncategorized'}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-muted-foreground">{new Date(doc.created_at).toLocaleDateString()}</td>
                                            <td className="px-5 py-4 text-right">
                                                <button 
                                                    onClick={() => { if(confirm('Delete this document?')) router.delete(`/documents/${doc.id}`); }}
                                                    className="p-2 text-muted-foreground hover:text-red-500 transition-smooth rounded-lg hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr><td colSpan={5} className="px-5 py-12 text-center text-muted-foreground">No documents found.</td></tr>
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
