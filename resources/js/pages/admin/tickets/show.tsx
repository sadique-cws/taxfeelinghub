import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { ArrowLeft, MessageSquare, Send, User, Clock, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    user: {
        id: number;
        name: string;
        email: string;
    };
    replies: Reply[];
}

interface Props {
    ticket: Ticket;
}

export default function AdminTicketShow({ ticket }: Props) {
    const { data, setData, post, processing, reset } = useForm({
        message: '',
        status: ticket.status,
    });

    const submitReply = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/admin/tickets/${ticket.id}/reply`, {
            onSuccess: () => reset('message'),
        });
    };

    return (
        <>
            <Head title={`Ticket #${ticket.id} — Admin`} />

            <div className="p-6 md:p-8 space-y-8 min-h-screen w-full mx-auto bg-background">
                {/* Back Link */}
                <Link href="/admin/tickets" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to All Tickets
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                    {/* Main Content */}
                    <div className="space-y-8">
                        {/* Ticket Original Message */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="p-6 border-b border-border bg-surface/50 flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h1 className="font-display font-bold text-xl text-primary">{ticket.subject}</h1>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                            <Clock className="h-3 w-3" /> Submitted on {new Date(ticket.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                    {ticket.description}
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
                                    className={`flex gap-4 ${reply.user.role === 'admin' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 border ${
                                        reply.user.role === 'admin' ? 'bg-gold border-gold text-black' : 'bg-primary border-primary text-white'
                                    }`}>
                                        {reply.user.role === 'admin' ? <ShieldCheck className="h-5 w-5" /> : <User className="h-5 w-5" />}
                                    </div>
                                    <div className={`flex flex-col max-w-[80%] ${reply.user.role === 'admin' ? 'items-end' : 'items-start'}`}>
                                        <div className="flex items-center gap-3 mb-2 px-1">
                                            <span className="text-xs font-bold text-primary">{reply.user.name}</span>
                                            <span className="text-[10px] text-muted-foreground">{new Date(reply.created_at).toLocaleString()}</span>
                                        </div>
                                        <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                                            reply.user.role === 'admin' 
                                            ? 'bg-primary text-white rounded-tr-none' 
                                            : 'bg-card border border-border text-primary rounded-tl-none'
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
                                        <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Your Response</Label>
                                        <Textarea
                                            value={data.message}
                                            onChange={e => setData('message', e.target.value)}
                                            placeholder="Type your response here..."
                                            className="min-h-[150px] border-border focus:border-gold transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4 border-t border-border">
                                        <div className="flex items-center gap-4 w-full md:w-auto">
                                            <Label className="text-primary font-bold uppercase tracking-widest text-[10px] whitespace-nowrap">Update Status</Label>
                                            <Select value={data.status} onValueChange={val => setData('status', val as any)}>
                                                <SelectTrigger className="w-40 border-border">
                                                    <SelectValue placeholder="Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="open">Open</SelectItem>
                                                    <SelectItem value="pending">Pending</SelectItem>
                                                    <SelectItem value="closed">Closed</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
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
                            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h3 className="font-display font-bold text-green-800 text-xl">Ticket is Closed</h3>
                                <p className="text-green-700 mt-2">This support request has been resolved and is now closed.</p>
                                <Button 
                                    variant="outline" 
                                    className="mt-6 border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
                                    onClick={() => setData('status', 'open')}
                                >
                                    Re-open Ticket
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6 sticky top-8">
                        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent border-b border-border pb-3">Client Details</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center border border-border">
                                        <User className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-primary">{ticket.user.name}</p>
                                        <p className="text-xs text-muted-foreground">{ticket.user.email}</p>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full justify-start border-border text-xs font-bold" asChild>
                                    <a href={`mailto:${ticket.user.email}`}><Mail className="h-3.5 w-3.5 mr-2" /> Email Client</a>
                                </Button>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent border-b border-border pb-3">Ticket Information</h4>
                            <div className="space-y-4">
                                <div>
                                    <Label className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Priority</Label>
                                    <p className={`text-sm font-bold mt-1 uppercase ${
                                        ticket.priority === 'high' ? 'text-red-600' : 
                                        ticket.priority === 'medium' ? 'text-yellow-600' : 'text-green-600'
                                    }`}>
                                        {ticket.priority}
                                    </p>
                                </div>
                                <div>
                                    <Label className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Status</Label>
                                    <p className="mt-1">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                            ticket.status === 'open' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                            ticket.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                            'bg-green-50 text-green-700 border-green-200'
                                        }`}>
                                            {ticket.status}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <Label className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Ticket ID</Label>
                                    <p className="text-sm font-mono text-primary font-bold mt-1">#TFH-{ticket.id}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminTicketShow.layout = (page: any) => (
    <AdminTicketLayout>{page}</AdminTicketLayout>
);

function AdminTicketLayout({ children }: { children: React.ReactNode }) {
    const { ticket } = usePage().props as any;
    const breadcrumbs = [
        { title: 'Support Tickets', href: '/admin/tickets' },
        { title: ticket ? `Ticket #${ticket.id}` : 'Ticket Details', href: '#' }
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            {children}
        </AppLayout>
    );
}
