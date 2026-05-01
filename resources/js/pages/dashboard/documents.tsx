import { Head } from '@inertiajs/react';
import { FileText, Download, Archive, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Document { id: number; name: string; category: string; size: number; created_at: string; file_path?: string; }
interface Props { documents: Document[]; }

export default function UserDocuments({ documents }: Props) {
    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <>
            <Head title="My Documents" />
            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Client Portal</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">My Documents</h1>
                            <p className="text-white/70 mt-2 max-w-md">Access your tax returns, registration certificates, and compliance reports.</p>
                        </div>
                        <a 
                            href="/dashboard/documents/download"
                            className="inline-flex items-center gap-2 rounded bg-gold px-7 py-3.5 font-semibold text-gold-foreground hover:bg-gold/90"
                        >
                            <Archive className="h-5 w-5" />
                            Download All (ZIP)
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="rounded border border-border bg-card p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Total Files</p>
                        <p className="font-display text-3xl font-bold text-primary mt-1">{documents.length}</p>
                    </div>
                    <div className="rounded border border-border bg-card p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Storage Used</p>
                        <p className="font-display text-3xl font-bold text-primary mt-1">
                            {formatSize(documents.reduce((acc, d) => acc + d.size, 0))}
                        </p>
                    </div>
                    <div className="rounded border border-border bg-card p-6">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Latest Upload</p>
                        <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-4 w-4 text-gold" />
                            <span className="font-display text-lg font-bold text-primary">
                                {documents.length > 0 ? new Date(documents[0].created_at).toLocaleDateString() : 'N/A'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded border border-border bg-card overflow-hidden">
                    <div className="p-5 border-b border-border">
                        <h2 className="font-display font-bold text-primary">Files Available for Download</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-border bg-muted/50">
                                <tr>
                                    <th className="px-6, py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Filename</th>
                                    <th className="px-6, py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Category</th>
                                    <th className="px-6, py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {documents.length > 0 ? documents.map(doc => (
                                    <tr key={doc.id} className="text-sm hover:bg-muted/30">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded bg-primary text-white flex items-center justify-center shrink-0">
                                                    <FileText className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-display font-semibold text-primary">{doc.name}</p>
                                                    <p className="text-xs text-muted-foreground mt-0.5">{formatSize(doc.size)} • {new Date(doc.created_at).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="font-bold text-xs px-3 py-1 rounded bg-gold/10 text-accent border border-gold/20">
                                                {doc.category || 'General'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <Button variant="outline" className="rounded border-primary text-primary font-semibold hover:bg-primary hover:text-white" asChild>
                                                <a href={`/dashboard/documents/${doc.id}/download`} download={doc.name}>
                                                    <Download className="h-4 w-4 mr-2" /> Download
                                                </a>
                                            </Button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-20 text-center">
                                            <Archive className="h-12 w-12 text-muted-foreground/20 mx-auto mb-4" />
                                            <p className="font-display font-semibold text-primary text-lg">No documents yet.</p>
                                            <p className="text-sm text-muted-foreground mt-1">Documents will appear here once uploaded by your advisor.</p>
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
