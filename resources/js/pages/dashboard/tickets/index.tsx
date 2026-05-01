import { Head, Link } from '@inertiajs/react';
import { MessageSquare, Clock, Plus, ArrowRight, LifeBuoy, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';

interface Ticket {
    id: number;
    subject: string;
    status: 'open' | 'pending' | 'closed';
    priority: 'low' | 'medium' | 'high';
    created_at: string;
}

interface Props {
    tickets: Ticket[];
}

export default function ClientTicketsIndex({ tickets }: Props) {
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'open': return 'bg-blue-50 text-blue-700 border-blue-200';
            case 'pending': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
            case 'closed': return 'bg-green-50 text-green-700 border-green-200';
            default: return 'bg-gray-50 text-gray-700 border-gray-200';
        }
    };

    return (
        <>
            <Head title="Support Tickets — Client Portal" />

            <div className="p-6 md:p-8 space-y-8 min-h-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="bg-primary text-white p-8 rounded-xl border border-border overflow-hidden relative">
                    <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                        <LifeBuoy className="h-64 w-64" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Help Center</span>
                            </div>
                            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Support Tickets</h1>
                            <p className="text-white/70 mt-2 max-w-xl">Need help with your filing or compliance? Raise a ticket and our experts will get back to you.</p>
                        </div>
                        <Button className="bg-gold text-black hover:bg-gold/90 font-bold h-14 px-8" asChild>
                            <Link href="/dashboard/tickets/create">
                                <Plus className="h-5 w-5 mr-2" /> Raise New Ticket
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Tickets Grid/List */}
                <div className="space-y-4">
                    <h2 className="font-display font-bold text-primary text-xl px-2">Your Recent Queries</h2>
                    
                    <div className="grid gap-4">
                        {tickets.length > 0 ? tickets.map(ticket => (
                            <Link 
                                key={ticket.id} 
                                href={`/dashboard/tickets/${ticket.id}`}
                                className="block group bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center border border-border group-hover:bg-gold/10 transition-colors">
                                            <MessageSquare className="h-6 w-6 text-primary group-hover:text-gold transition-colors" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">#TFH-{ticket.id}</span>
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.2em] border ${getStatusStyle(ticket.status)}`}>
                                                    {ticket.status}
                                                </span>
                                            </div>
                                            <h3 className="font-display font-bold text-primary text-lg group-hover:text-gold transition-colors">{ticket.subject}</h3>
                                            <div className="flex items-center gap-4 mt-2">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <Clock className="h-3.5 w-3.5" /> Raised on {new Date(ticket.created_at).toLocaleDateString()}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <AlertCircle className="h-3.5 w-3.5" /> Priority: <span className="font-bold text-primary uppercase">{ticket.priority}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Thread <ArrowRight className="h-4 w-4 text-gold" />
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="bg-card border border-border border-dashed rounded-2xl py-24 text-center">
                                <LifeBuoy className="h-16 w-16 text-muted-foreground/20 mx-auto mb-6" />
                                <h3 className="font-display font-bold text-primary text-2xl">No tickets yet</h3>
                                <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                                    Everything looking good? If you have any questions, don't hesitate to reach out.
                                </p>
                                <Button className="mt-8 bg-primary hover:bg-secondary text-white font-bold" asChild>
                                    <Link href="/dashboard/tickets/create">Create your first ticket</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

ClientTicketsIndex.layout = (page: any) => (
    <AppLayout breadcrumbs={[{ title: 'Support Tickets', href: '/dashboard/tickets' }]}>
        {page}
    </AppLayout>
);
