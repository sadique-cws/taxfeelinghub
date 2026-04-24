import { Head, Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { 
    LayoutGrid, 
    FileText, 
    Clock, 
    ShieldCheck, 
    AlertCircle, 
    ArrowRight, 
    TrendingUp,
    Download
} from 'lucide-react';

interface RecentDocument {
    id: number;
    name: string;
    category: string;
    size: number;
    created_at: string;
    user?: { id: number; name: string; email: string };
}

interface Props {
    stats: {
        totalClients: number;
        pendingClients: number;
        totalDocuments: number;
        storageUsed: number;
    };
    recentDocuments: RecentDocument[];
}

export default function Dashboard({ stats, recentDocuments }: Props) {
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

            <div className="p-6 space-y-6 bg-white min-h-full">
                {/* Welcome Section */}
                <div className="border border-slate-200 p-8 bg-slate-50">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                                Welcome back, {user.name}
                            </h1>
                            <p className="text-slate-500 mt-1">
                                {isAdmin 
                                    ? 'Administrative overview and document management system.' 
                                    : 'Manage your taxes, compliance, and corporate documents.'}
                            </p>
                        </div>
                        <Link 
                            href={isAdmin ? '/admin/documents' : '/dashboard/documents'}
                            className="bg-slate-900 text-white font-bold px-6 py-3 rounded-none text-sm"
                        >
                            {isAdmin ? 'Manage Files' : 'My Documents'}
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {isAdmin && (
                        <StatCard 
                            title="Total Clients" 
                            value={String(stats.totalClients).padStart(2, '0')} 
                            icon={LayoutGrid}
                            trend="Registered"
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
                    <div className="lg:col-span-2 border border-slate-200 bg-white">
                        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                            <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Recent Uploads</h2>
                            <Clock className="h-4 w-4 text-slate-400" />
                        </div>
                        <div>
                            {recentDocuments.length > 0 ? recentDocuments.map((doc) => (
                                <div key={doc.id} className="flex items-start gap-4 p-5 border-b border-slate-100 last:border-0">
                                    <div className="h-10 w-10 bg-slate-100 flex items-center justify-center shrink-0">
                                        <FileText className="h-5 w-5 text-slate-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-slate-900 truncate">{doc.name}</p>
                                        <p className="text-sm text-slate-500 mt-1">
                                            {formatSize(doc.size)} • {doc.category || 'General'}
                                            {isAdmin && doc.user && <> • for <span className="font-medium">{doc.user.name}</span></>}
                                            {' '}• {new Date(doc.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            )) : (
                                <div className="p-12 text-center text-slate-400">
                                    <FileText className="h-10 w-10 mx-auto mb-3 text-slate-200" />
                                    <p className="font-bold text-slate-900">No documents yet</p>
                                    <p className="text-sm mt-1">
                                        {isAdmin ? 'Upload documents for clients to get started.' : 'Your documents will appear here once uploaded by the firm.'}
                                    </p>
                                </div>
                            )}
                        </div>
                        {recentDocuments.length > 0 && (
                            <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                                <Link 
                                    href={isAdmin ? '/admin/documents' : '/dashboard/documents'} 
                                    className="text-xs font-bold text-slate-900 uppercase tracking-widest hover:underline"
                                >
                                    View All Documents
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Side Panel */}
                    <div className="space-y-6">
                        <div className="border border-slate-200 bg-white p-6">
                            <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Quick Actions</h2>
                            <div className="grid gap-3">
                                <QuickActionButton icon={TrendingUp} label="Request New Service" />
                                <QuickActionButton icon={Download} label="Download All Docs" href="/dashboard/documents/download" />
                                <QuickActionButton icon={ShieldCheck} label="Check Compliance" />
                            </div>
                        </div>

                        <div className="border border-slate-900 bg-slate-900 p-6 text-white">
                            <h2 className="font-bold uppercase tracking-widest text-xs mb-2 text-gold">Expert Advice</h2>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Need help with your tax planning? Our senior partners are available for consultation every Tuesday.
                            </p>
                            <button className="mt-4 text-xs font-bold uppercase tracking-widest text-white border-b border-gold pb-1">
                                Book a slot
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
        <div className="border border-slate-200 p-6 bg-white">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{value}</p>
                </div>
                <div className="h-10 w-10 bg-slate-100 flex items-center justify-center text-slate-900">
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5">
                <div className={cn(
                    "h-2 w-2 rounded-full",
                    variant === 'success' ? 'bg-green-500' : variant === 'warning' ? 'bg-orange-500' : 'bg-slate-300'
                )} />
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{trend}</p>
            </div>
        </div>
    );
}

function QuickActionButton({ icon: Icon, label, href }: any) {
    const content = (
        <>
            <Icon className="h-4 w-4" />
            <span>{label}</span>
        </>
    );
    
    const btnClass = "flex items-center gap-3 w-full border border-slate-200 p-4 text-sm font-bold text-slate-900 hover:bg-slate-50 rounded-none text-left";

    if (href) return <a href={href} className={btnClass}>{content}</a>;
    return <button className={btnClass}>{content}</button>;
}
