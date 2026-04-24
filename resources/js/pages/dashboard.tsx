import { Head, Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { 
    LayoutGrid, 
    FileText, 
    Clock, 
    ShieldCheck, 
    ArrowRight
} from 'lucide-react';

interface RecentDocument {
    id: number;
    name: string;
    category: string;
    size: number;
    created_at: string;
    user?: { id: number; name: string; email: string };
}

interface RecentClient {
    id: number;
    name: string;
    email: string;
    status: string;
    created_at: string;
}

interface Props {
    stats: {
        totalClients: number;
        pendingClients: number;
        totalDocuments: number;
        storageUsed: number;
    };
    recentDocuments: RecentDocument[];
    recentClients: RecentClient[];
}

export default function Dashboard({ stats, recentDocuments, recentClients }: Props) {
    const { auth } = usePage().props as any;
    const user = auth.user;
    const isAdmin = user.role === 'admin';

    const formatSize = (bytes: number) => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    return (
        <>
            <Head title="Dashboard" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Welcome Hero */}
                <div className="rounded-2xl bg-hero-gradient text-white p-8 md:p-10 shadow-card">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                                    {isAdmin ? 'Admin Console' : 'Client Portal'}
                                </span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                                Welcome back, {user.name}
                            </h1>
                            <p className="text-white/70 mt-2 max-w-lg">
                                {isAdmin 
                                    ? 'Administrative overview and document management system.' 
                                    : 'Manage your taxes, compliance, and corporate documents.'}
                            </p>
                        </div>
                        <Link 
                            href={isAdmin ? '/admin/documents' : '/dashboard/documents'}
                            className="inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 font-semibold text-gold-foreground hover:opacity-90 transition-smooth shadow-soft"
                        >
                            {isAdmin ? 'Manage Files' : 'My Documents'}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {isAdmin && (
                        <StatCard 
                            title="Active Clients" 
                            value={String(stats.totalClients).padStart(2, '0')} 
                            icon={LayoutGrid}
                            trend="Approved"
                        />
                    )}
                    <StatCard 
                        title="Documents" 
                        value={String(stats.totalDocuments).padStart(2, '0')} 
                        icon={FileText}
                        trend={isAdmin ? 'All clients' : 'Your files'}
                    />
                    <StatCard 
                        title="Storage Used" 
                        value={formatSize(stats.storageUsed)} 
                        icon={ShieldCheck}
                        trend="Total"
                        variant="success"
                    />
                    <StatCard 
                        title={isAdmin ? 'Pending Approval' : 'Recent Uploads'}
                        value={String(isAdmin ? stats.pendingClients : recentDocuments.length).padStart(2, '0')} 
                        icon={Clock}
                        trend={isAdmin ? 'Needs action' : 'Last 5 files'}
                        variant={isAdmin && stats.pendingClients > 0 ? 'warning' : 'default'}
                    />
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Recent Documents */}
                    <div className="lg:col-span-2 rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                        <div className="p-5 border-b border-border flex justify-between items-center">
                            <h2 className="font-display font-bold text-primary">Recent Uploads</h2>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                            {recentDocuments.length > 0 ? recentDocuments.map((doc) => (
                                <div key={doc.id} className="flex items-start gap-4 p-5 border-b border-border/50 last:border-0 hover-lift transition-smooth">
                                    <div className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-display font-semibold text-primary truncate">{doc.name}</p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {formatSize(doc.size)} • {doc.category || 'General'}
                                            {isAdmin && doc.user && <> • for <span className="font-semibold text-accent">{doc.user.name}</span></>}
                                            {' '}• {new Date(doc.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            )) : (
                                <div className="p-12 text-center">
                                    <FileText className="h-10 w-10 mx-auto mb-3 text-muted-foreground/30" />
                                    <p className="font-display font-semibold text-primary">No documents yet</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {isAdmin ? 'Upload documents for clients to get started.' : 'Your documents will appear here once uploaded by the firm.'}
                                    </p>
                                </div>
                            )}
                        </div>
                        {recentDocuments.length > 0 && (
                            <div className="p-4 border-t border-border text-center">
                                <Link 
                                    href={isAdmin ? '/admin/documents' : '/dashboard/documents'} 
                                    className="text-xs font-bold text-accent uppercase tracking-widest hover:text-primary transition-smooth"
                                >
                                    View All Documents →
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Side Panel */}
                    <div className="space-y-5">
                        <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                            <div className="p-5 border-b border-border flex items-center justify-between">
                                <h2 className="font-display font-bold text-primary">Recent Clients</h2>
                                {isAdmin && (
                                    <Link href="/admin/clients" className="text-[10px] font-bold text-accent uppercase tracking-widest hover:text-primary transition-smooth">
                                        View All
                                    </Link>
                                )}
                            </div>
                            <div className="divide-y divide-border/50">
                                {recentClients.length > 0 ? recentClients.map(client => (
                                    <div key={client.id} className="flex items-center gap-3 p-4 hover:bg-muted/30 transition-smooth">
                                        <div className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0 uppercase">
                                            {client.name.charAt(0)}{client.name.split(' ')[1]?.charAt(0) || ''}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-display text-sm font-semibold text-primary truncate">{client.name}</p>
                                            <p className="text-[11px] text-muted-foreground truncate">{client.email}</p>
                                        </div>
                                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                                            client.status === 'approved' ? 'bg-green-50 text-green-700 border-green-200' :
                                            client.status === 'pending' ? 'bg-gold/10 text-accent border-gold/20' :
                                            'bg-red-50 text-red-700 border-red-200'
                                        }`}>{client.status}</span>
                                    </div>
                                )) : (
                                    <div className="p-8 text-center text-muted-foreground text-sm">No clients onboarded yet.</div>
                                )}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-hero-gradient text-white p-6 shadow-card">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">Expert Advice</p>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Need help with your tax planning? Our senior partners are available for consultation every Tuesday.
                            </p>
                            <button className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-smooth">
                                Book a slot <ArrowRight className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: '/dashboard' },
    ],
};

function StatCard({ title, value, icon: Icon, trend, variant = 'default' }: any) {
    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover-lift transition-smooth group">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</p>
                    <p className="font-display text-3xl font-bold text-primary mt-1">{value}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-smooth">
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
                <div className={cn(
                    "h-2 w-2 rounded-full",
                    variant === 'success' ? 'bg-green-500' : variant === 'warning' ? 'bg-gold' : 'bg-muted-foreground/30'
                )} />
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{trend}</p>
            </div>
        </div>
    );
}

