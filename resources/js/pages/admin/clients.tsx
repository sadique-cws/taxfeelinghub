import { Head, router } from '@inertiajs/react';
import { Users, CheckCircle, XCircle, Trash2, FileText, Clock, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Client {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    role: string;
    status: string;
    documents_count: number;
    created_at: string;
}

interface Props {
    clients: Client[];
}

export default function AdminClients({ clients }: Props) {
    const [search, setSearch] = useState('');

    const filtered = clients.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase()) || 
        c.email.toLowerCase().includes(search.toLowerCase())
    );

    const pending = filtered.filter(c => c.status === 'pending');
    const approved = filtered.filter(c => c.status === 'approved');
    const rejected = filtered.filter(c => c.status === 'rejected');

    const handleApprove = (id: number) => router.patch(`/admin/clients/${id}/approve`);
    const handleReject = (id: number) => router.patch(`/admin/clients/${id}/reject`);
    const handleDelete = (id: number) => {
        if (confirm('Delete this client and all their documents?')) {
            router.delete(`/admin/clients/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Clients" />

            <div className="p-6 space-y-6 bg-white min-h-full">
                {/* Header */}
                <div className="border border-slate-200 p-6 bg-slate-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                            <Users className="h-6 w-6" />
                            Client Management
                        </h1>
                        <p className="text-slate-500 mt-1 text-sm">Approve, reject, and manage client accounts.</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <span className="border border-amber-200 bg-amber-50 text-amber-800 font-bold px-3 py-1">{clients.filter(c => c.status === 'pending').length} Pending</span>
                        <span className="border border-green-200 bg-green-50 text-green-800 font-bold px-3 py-1">{clients.filter(c => c.status === 'approved').length} Approved</span>
                        <span className="border border-slate-200 bg-slate-50 text-slate-600 font-bold px-3 py-1">{clients.length} Total</span>
                    </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-3 border border-slate-200 bg-white p-3">
                    <Search className="h-4 w-4 text-slate-400" />
                    <Input 
                        className="border-0 focus:ring-0 rounded-none shadow-none p-0 h-auto"
                        placeholder="Search by name or email..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                {/* Pending Approvals */}
                {pending.length > 0 && (
                    <div className="border border-amber-200 bg-white">
                        <div className="p-4 border-b border-amber-200 bg-amber-50 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-amber-600" />
                            <h2 className="font-bold text-amber-900 uppercase tracking-widest text-xs">Pending Approval ({pending.length})</h2>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {pending.map(client => (
                                <ClientRow key={client.id} client={client} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Approved Clients */}
                <div className="border border-slate-200 bg-white">
                    <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Active Clients ({approved.length})</h2>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {approved.length > 0 ? approved.map(client => (
                            <ClientRow key={client.id} client={client} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />
                        )) : (
                            <div className="p-12 text-center text-slate-400">No approved clients yet.</div>
                        )}
                    </div>
                </div>

                {/* Rejected */}
                {rejected.length > 0 && (
                    <div className="border border-slate-200 bg-white">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Rejected ({rejected.length})</h2>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {rejected.map(client => (
                                <ClientRow key={client.id} client={client} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

AdminClients.layout = {
    breadcrumbs: [
        { title: 'Admin', href: '/admin/clients' },
        { title: 'Clients', href: '/admin/clients' },
    ],
};

function ClientRow({ client, onApprove, onReject, onDelete }: { client: any; onApprove: (id: number) => void; onReject: (id: number) => void; onDelete: (id: number) => void }) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-4">
            <div className="flex items-center gap-4 min-w-0">
                <div className="h-10 w-10 bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-sm shrink-0 uppercase">
                    {client.name.charAt(0)}{client.name.split(' ')[1]?.charAt(0) || ''}
                </div>
                <div className="min-w-0">
                    <p className="font-bold text-slate-900 truncate">{client.name}</p>
                    <p className="text-xs text-slate-500 truncate">{client.email}{client.phone && ` • ${client.phone}`}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mr-2">
                    <FileText className="h-3 w-3" />
                    {client.documents_count} files
                </div>
                <StatusBadge status={client.status} />
                {client.status === 'pending' && (
                    <>
                        <button onClick={() => onApprove(client.id)} className="p-2 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100">
                            <CheckCircle className="h-4 w-4" />
                        </button>
                        <button onClick={() => onReject(client.id)} className="p-2 text-red-600 border border-red-200 bg-red-50 hover:bg-red-100">
                            <XCircle className="h-4 w-4" />
                        </button>
                    </>
                )}
                {client.status === 'rejected' && (
                    <button onClick={() => onApprove(client.id)} className="p-2 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100">
                        <CheckCircle className="h-4 w-4" />
                    </button>
                )}
                <button onClick={() => onDelete(client.id)} className="p-2 text-slate-400 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        pending: 'bg-amber-50 text-amber-800 border-amber-200',
        approved: 'bg-green-50 text-green-800 border-green-200',
        rejected: 'bg-red-50 text-red-800 border-red-200',
    };
    return (
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border ${styles[status] || styles.pending}`}>
            {status}
        </span>
    );
}
