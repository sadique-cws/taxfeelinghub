import { Head, Link, router } from '@inertiajs/react';
import { Users, CheckCircle, XCircle, Trash2, FileText, Clock, Search, ArrowRight, Filter, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useDebounce } from '@/hooks/use-debounce';
import AppLayout from '@/layouts/app-layout';

interface Client { id: number; name: string; email: string; phone: string | null; status: string; documents_count: number; created_at: string; }
interface Props { 
    clients: Client[]; 
    filters: {
        search?: string;
        status?: string;
    };
}

export default function AdminClients({ clients, filters }: Props) {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || 'all');
    const debouncedSearch = useDebounce(search, 500);

    const handleFilter = useCallback((newSearch: string, newStatus: string) => {
        router.get('/admin/clients', {
            search: newSearch || undefined,
            status: newStatus === 'all' ? undefined : newStatus
        }, {
            preserveState: true,
            preserveScroll: true,
            replace: true
        });
    }, []);

    useEffect(() => {
        if (debouncedSearch !== (filters.search || '')) {
            handleFilter(debouncedSearch, status);
        }
    }, [debouncedSearch, status, filters.search, handleFilter]);

    const handleStatusChange = (value: string) => {
        setStatus(value);
        handleFilter(search, value);
    };

    const clearFilters = () => {
        setSearch('');
        setStatus('all');
        router.get('/admin/clients');
    };

    const pending = clients.filter(c => c.status === 'pending');
    const approved = clients.filter(c => c.status === 'approved');
    const rejected = clients.filter(c => c.status === 'rejected');

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

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 items-end md:items-center bg-card p-4 rounded-xl border border-border shadow-sm">
                    <div className="flex-1 w-full relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                            className="pl-10 h-11 border-border/60 focus:border-gold focus:ring-gold/20"
                            placeholder="Search clients by name, email or phone..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="w-full md:w-48">
                        <Select value={status} onValueChange={handleStatusChange}>
                            <SelectTrigger className="h-11 border-border/60">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-3.5 w-3.5 text-gold" />
                                    <SelectValue placeholder="All Status" />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {(filters.search || filters.status) && (
                        <Button 
                            variant="ghost" 
                            onClick={clearFilters}
                            className="h-11 px-4 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-red-600"
                        >
                            <X className="h-4 w-4 mr-2" /> Clear
                        </Button>
                    )}
                </div>

                {/* Clients Table */}
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-center bg-surface/50">
                        <h2 className="font-display font-bold text-primary flex items-center gap-2">
                            <Users className="h-4 w-4 text-gold" /> All Registered Clients
                        </h2>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest border border-primary/20">
                            {clients.length} Total Clients
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface text-[10px] font-bold uppercase tracking-[0.2em] text-accent border-b border-border">
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Contact</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Docs</th>
                                    <th className="px-6 py-4">Joined</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {clients.length > 0 ? clients.map(client => (
                                    <tr key={client.id} className="hover:bg-muted/30 transition-smooth group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold text-xs uppercase shadow-sm">
                                                    {client.name.charAt(0)}{client.name.split(' ')[1]?.charAt(0) || ''}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-primary text-sm">{client.name}</span>
                                                    <span className="text-[10px] text-muted-foreground font-mono">ID: #{client.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-sm text-primary">{client.email}</span>
                                                {client.phone && <span className="text-xs text-muted-foreground font-mono">{client.phone}</span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <StatusBadge status={client.status} />
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <FileText className="h-3 w-3 text-gold" /> {client.documents_count}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <Clock className="h-3 w-3" /> {new Date(client.created_at).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {client.status === 'pending' && (
                                                    <Button 
                                                        variant="ghost" 
                                                        size="icon"
                                                        onClick={() => handleApprove(client.id)}
                                                        className="h-8 w-8 text-green-600 hover:bg-green-50 border border-transparent hover:border-green-200"
                                                    >
                                                        <CheckCircle className="h-4 w-4" />
                                                    </Button>
                                                )}
                                                
                                                <Button variant="ghost" className="h-8 px-3 hover:bg-gold hover:text-black transition-all group/btn" asChild>
                                                    <Link href={`/admin/clients/${client.id}`} className="inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest">
                                                        View <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                                                    </Link>
                                                </Button>

                                                <Button 
                                                    variant="ghost" 
                                                    size="icon"
                                                    onClick={() => handleDelete(client.id)}
                                                    className="h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-20 text-center text-muted-foreground">
                                            <Users className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                            <p className="font-display font-semibold text-primary text-lg">No clients found.</p>
                                            <p className="text-sm mt-1">Try adjusting your filters or search terms.</p>
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

AdminClients.layout = (page: any) => (
    <AppLayout breadcrumbs={[{ title: 'Clients', href: '/admin/clients' }]}>
        {page}
    </AppLayout>
);

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        pending: 'bg-gold/10 text-accent border-gold/20',
        approved: 'bg-green-50 text-green-700 border-green-200',
        rejected: 'bg-red-50 text-red-700 border-red-200',
    };
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles[status] || styles.pending}`}>
            {status}
        </span>
    );
}
