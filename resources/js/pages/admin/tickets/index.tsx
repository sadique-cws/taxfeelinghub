import { Head, Link } from '@inertiajs/react';
import { MessageCircle, Clock, CheckCircle2, User, ArrowRight, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';

interface Ticket {
    id: number;
    subject: string;
    status: 'open' | 'pending' | 'closed';
    priority: 'low' | 'medium' | 'high';
    created_at: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

interface Props {
    tickets: Ticket[];
}

export default function AdminTicketsIndex({ tickets }: Props) {
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'open': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'pending': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
            case 'closed': return 'bg-green-50 text-green-700 border-green-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    const getPriorityStyle = (priority: string) => {
        switch (priority) {
            case 'high': return 'text-red-600 font-bold';
            case 'medium': return 'text-yellow-600 font-bold';
            case 'low': return 'text-green-600 font-bold';
            default: return 'text-muted-foreground';
        }
    };

    return (
        <>
            <Head title="Support Tickets — Admin" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 rounded-xl border border-border overflow-hidden relative">
                    <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 rotate-12">
                        <LifeBuoy className="h-64 w-64" />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="gold-rule" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin Portal</span>
                        </div>
                        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Support Tickets</h1>
                        <p className="text-white/70 mt-2 max-w-xl">Manage and respond to client queries and support requests.</p>
                    </div>
                </div>

                {/* Tickets Table */}
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-center bg-surface/50">
                        <h2 className="font-display font-bold text-primary flex items-center gap-2">
                            <MessageCircle className="h-4 w-4 text-gold" /> All Support Queries
                        </h2>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest border border-primary/20">
                            {tickets.length} Active Tickets
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface text-[10px] font-bold uppercase tracking-[0.2em] text-accent border-b border-border">
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Subject</th>
                                    <th className="px-6 py-4">Priority</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Created</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {tickets.length > 0 ? tickets.map(ticket => (
                                    <tr key={ticket.id} className="hover:bg-muted/30 transition-smooth group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-full bg-primary/5 flex items-center justify-center border border-border shrink-0">
                                                    <User className="h-4 w-4 text-gold" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-primary text-sm">{ticket.user.name}</span>
                                                    <span className="text-[10px] text-muted-foreground font-mono">{ticket.user.email}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-sm font-semibold text-primary line-clamp-1">{ticket.subject}</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`text-[10px] uppercase tracking-widest ${getPriorityStyle(ticket.priority)}`}>
                                                {ticket.priority}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${getStatusStyle(ticket.status)}`}>
                                                {ticket.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                <Clock className="h-3 w-3" /> {new Date(ticket.created_at).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <Button variant="ghost" className="h-8 px-4 hover:bg-gold hover:text-black transition-all group/btn" asChild>
                                                <Link href={`/admin/tickets/${ticket.id}`} className="inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest">
                                                    View Details <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-20 text-center text-muted-foreground">
                                            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                            <p className="font-display font-semibold text-primary text-lg">No support tickets yet.</p>
                                            <p className="text-sm mt-1">Clients' support requests will appear here.</p>
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

AdminTicketsIndex.layout = (page: any) => (
    <AppLayout breadcrumbs={[{ title: 'Support Tickets', href: '/admin/tickets' }]}>
        {page}
    </AppLayout>
);
