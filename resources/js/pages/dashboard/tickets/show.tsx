import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, MessageSquare, Send, User, Clock, CheckCircle2, ShieldCheck, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';

interface Reply {
    id: number;
    message: string;
    created_at: string;
    user: {
        id: number;
        name: string;
        role: string;
    };
}

interface Ticket {
    id: number;
    subject: string;
    description: string;
    status: 'open' | 'pending' | 'closed';
    priority: 'low' | 'medium' | 'high';
    created_at: string;
    replies: Reply[];
}

interface Props {
    ticket: Ticket;
}

export default function ClientTicketShow({ ticket }: Props) {
    const { data, setData, post, processing, reset } = useForm({
        message: '',
    });

    const submitReply = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/dashboard/tickets/${ticket.id}/reply`, {
            onSuccess: () => reset('message'),
        });
    };

    const closeTicket = () => {
        if (confirm('Are you sure you want to mark this ticket as resolved/closed?')) {
            post(`/dashboard/tickets/${ticket.id}/close`);
        }
    };

    return (
        <>
            <Head title={`Ticket #${ticket.id} — Client Portal`} />

            <div className="p-6 md:p-8 space-y-8 min-h-screen w-full mx-auto bg-background">
                {/* Back Link */}
                <div className="flex justify-between items-center">
                    <Link href="/dashboard/tickets" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to My Tickets
                    </Link>
                    {ticket.status !== 'closed' && (
                        <Button variant="outline" className="border-red-200 text-red-500 hover:bg-red-50 font-bold text-xs uppercase tracking-widest" onClick={closeTicket}>
                            Mark as Resolved
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                    {/* Main Content */}
                    <div className="space-y-8">
                        {/* Ticket Original Message */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="p-6 border-b border-border bg-surface/50">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">#TFH-{ticket.id}</span>
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-[0.2em] border ${
                                                ticket.status === 'open' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                                ticket.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                                'bg-green-50 text-green-700 border-green-200'
                                            }`}>
                                                {ticket.status}
                                            </span>
                                        </div>
                                        <h1 className="font-display font-bold text-xl text-primary">{ticket.subject}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    {ticket.description}
                                </div>
                                <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                                    <Clock className="h-3.5 w-3.5" /> Submitted on {new Date(ticket.created_at).toLocaleString()}
                                </div>
                            </div>
                        </div>

                        {/* Replies Thread */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-border" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent px-4">Conversation Thread</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            {ticket.replies.map((reply) => (
                                <div 
                                    key={reply.id} 
                                    className={`flex gap-4 ${reply.user.role === 'admin' ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 border ${
                                        reply.user.role === 'admin' ? 'bg-gold border-gold text-black' : 'bg-primary border-primary text-white'
                                    }`}>
                                        {reply.user.role === 'admin' ? <ShieldCheck className="h-5 w-5" /> : <User className="h-5 w-5" />}
                                    </div>
                                    <div className={`flex flex-col max-w-[80%] ${reply.user.role === 'admin' ? 'items-start' : 'items-end'}`}>
                                        <div className="flex items-center gap-3 mb-2 px-1">
                                            <span className="text-xs font-bold text-primary">{reply.user.role === 'admin' ? 'Tax Filing Hub Advisor' : 'You'}</span>
                                            <span className="text-[10px] text-muted-foreground">{new Date(reply.created_at).toLocaleString()}</span>
                                        </div>
                                        <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                                            reply.user.role === 'admin' 
                                            ? 'bg-card border border-border text-primary rounded-tl-none' 
                                            : 'bg-primary text-white rounded-tr-none'
                                        }`}>
                                            {reply.message}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Reply Form */}
                        {ticket.status !== 'closed' ? (
                            <div className="bg-card border border-border rounded-xl p-8">
                                <h3 className="font-display font-bold text-primary mb-6 flex items-center gap-2">
                                    <Send className="h-4 w-4 text-gold" /> Post a Reply
                                </h3>
                                <form onSubmit={submitReply} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Your Message</Label>
                                        <Textarea
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            placeholder="Write your follow-up message here..."
                                            className="min-h-[150px] border-border focus:border-gold transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end pt-4 border-t border-border">
                                        <Button 
                                            type="submit" 
                                            disabled={processing}
                                            className="w-full md:w-auto bg-primary hover:bg-secondary text-white font-bold px-10 h-12 transition-all active:scale-95"
                                        >
                                            {processing ? 'Sending...' : 'Send Reply'}
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                                <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                <h3 className="font-display font-bold text-green-800 text-2xl tracking-tight">Issue Resolved</h3>
                                <p className="text-green-700 mt-2 max-w-md mx-auto leading-relaxed">
                                    This ticket has been marked as closed. We hope your query was resolved to your satisfaction.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6 sticky top-8">
                        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent border-b border-border pb-3">Ticket Summary</h4>
                            <div className="space-y-5">
                                <div>
                                    <Label className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Current Status</Label>
                                    <div className="mt-1">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest border ${
                                            ticket.status === 'open' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                            ticket.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                            'bg-green-50 text-green-700 border-green-200'
                                        }`}>
                                            {ticket.status}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <Label className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Assigned Priority</Label>
                                    <p className={`text-sm font-bold mt-1 uppercase ${
                                        ticket.priority === 'high' ? 'text-red-600' : 
                                        ticket.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                                    }`}>
                                        {ticket.priority}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-white rounded-xl p-6 overflow-hidden relative">
                            <div className="absolute right-0 top-0 opacity-10 translate-x-1/3 -translate-y-1/3 rotate-12">
                                <LifeBuoy className="h-32 w-32" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Helpful Tip</h4>
                                <p className="text-xs text-white/80 leading-relaxed">
                                    Closing a ticket helps us focus on active issues. If your question is resolved, feel free to close it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ClientTicketShow.layout = (page: any) => (
    <ClientTicketLayout>{page}</ClientTicketLayout>
);

function ClientTicketLayout({ children }: { children: React.ReactNode }) {
    const { ticket } = usePage().props as any;
    const breadcrumbs = [
        { title: 'Support Tickets', href: '/dashboard/tickets' },
        { title: ticket ? `Ticket #${ticket.id}` : 'Ticket Details', href: '#' }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            {children}
        </AppLayout>
    );
}
