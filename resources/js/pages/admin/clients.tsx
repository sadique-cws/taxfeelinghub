import { Head, router } from '@inertiajs/react';
import { Users, CheckCircle, XCircle, Trash2, FileText, Clock, Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface Client { id: number; name: string; email: string; phone: string | null; status: string; documents_count: number; created_at: string; }
interface Props { clients: Client[]; }

export default function AdminClients({ clients }: Props) {
    const [search, setSearch] = useState('');
    const filtered = clients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));
    const pending = filtered.filter(c => c.status === 'pending');
    const approved = filtered.filter(c => c.status === 'approved');
    const rejected = filtered.filter(c => c.status === 'rejected');

    const handleApprove = (id: number) => router.patch(`/admin/clients/${id}/approve`);
    const handleReject = (id: number) => router.patch(`/admin/clients/${id}/reject`);
    const handleDelete = (id: number) => { if (confirm('Delete this client and all their documents?')) router.delete(`/admin/clients/${id}`); };

    return (
        <>
            <Head title="Manage Clients" />
            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</span>
                            </div>
                            <h1 className="font-display text-3xl font-bold tracking-tight">Client Management</h1>
                            <p className="text-white/70 mt-2">Approve, reject, and manage client accounts.</p>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <span className="rounded bg-gold/20 text-gold font-bold px-4 py-1.5 border border-gold/30">{clients.filter(c => c.status === 'pending').length} Pending</span>
                            <span className="rounded bg-white/10 text-white font-bold px-4 py-1.5 border border-white/20">{clients.filter(c => c.status === 'approved').length} Active</span>
                        </div>
                    </div>
                </div>

                {/* Search */}
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <Input 
                        className="border-0 focus-visible:ring-0 shadow-none p-0 h-auto text-base"
                        placeholder="Search clients by name or email..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                {/* Pending */}
                {pending.length > 0 && (
                    <Section icon={Clock} title="Pending Approval" count={pending.length} accent="gold">
                        {pending.map(c => <ClientRow key={c.id} client={c} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />)}
                    </Section>
                )}

                {/* Approved */}
                <Section icon={CheckCircle} title="Active Clients" count={approved.length} accent="green">
                    {approved.length > 0 ? approved.map(c => (
                        <ClientRow key={c.id} client={c} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />
                    )) : (
                        <div className="p-12 text-center text-muted-foreground">No approved clients yet.</div>
                    )}
                </Section>

                {/* Rejected */}
                {rejected.length > 0 && (
                    <Section icon={XCircle} title="Rejected" count={rejected.length} accent="red">
                        {rejected.map(c => <ClientRow key={c.id} client={c} onApprove={handleApprove} onReject={handleReject} onDelete={handleDelete} />)}
                    </Section>
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

function Section({ icon: Icon, title, count, accent, children }: any) {
    const colors: Record<string, string> = {
        gold: 'text-gold',
        green: 'text-green-500',
        red: 'text-red-500',
    };
    return (
        <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="p-5 border-b border-border flex items-center gap-3">
                <Icon className={`h-5 w-5 ${colors[accent] || 'text-primary'}`} />
                <h2 className="font-display font-bold text-primary">{title}</h2>
                <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">{count}</span>
            </div>
            <div className="divide-y divide-border/50">{children}</div>
        </div>
    );
}

function ClientRow({ client, onApprove, onReject, onDelete }: any) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 gap-4 hover:bg-muted/30 transition-smooth">
            <div className="flex items-center gap-4 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold text-sm shrink-0 uppercase">
                    {client.name.charAt(0)}{client.name.split(' ')[1]?.charAt(0) || ''}
                </div>
                <div className="min-w-0">
                    <p className="font-display font-semibold text-primary truncate">{client.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{client.email}{client.phone && ` • ${client.phone}`}</p>
                </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mr-2">
                    <FileText className="h-3 w-3" /> {client.documents_count} files
                </div>
                <StatusBadge status={client.status} />
                {client.status === 'pending' && (
                    <>
                        <button onClick={() => onApprove(client.id)} className="p-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-smooth border border-green-200">
                            <CheckCircle className="h-4 w-4" />
                        </button>
                        <button onClick={() => onReject(client.id)} className="p-2 rounded-lg text-red-500 bg-red-50 hover:bg-red-100 transition-smooth border border-red-200">
                            <XCircle className="h-4 w-4" />
                        </button>
                    </>
                )}
                {client.status === 'rejected' && (
                    <button onClick={() => onApprove(client.id)} className="p-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-smooth border border-green-200">
                        <CheckCircle className="h-4 w-4" />
                    </button>
                )}
                <button onClick={() => onDelete(client.id)} className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-smooth">
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        pending: 'bg-gold/10 text-accent border-gold/20',
        approved: 'bg-green-50 text-green-700 border-green-200',
        rejected: 'bg-red-50 text-red-700 border-red-200',
    };
    return (
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border ${styles[status] || styles.pending}`}>
            {status}
        </span>
    );
}
