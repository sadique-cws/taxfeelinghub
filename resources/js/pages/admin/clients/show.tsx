import { Head, Link } from '@inertiajs/react';
import { 
    User, Mail, Phone, Calendar, FileText, 
    MessageSquare, ArrowLeft, ShieldCheck, 
    Clock, ExternalLink, Download, Trash2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';

interface Document {
    id: number;
    name: string;
    type: string;
    file_path: string;
    created_at: string;
}

interface Ticket {
    id: number;
    subject: string;
    status: string;
    created_at: string;
}

interface Props {
    client: {
        id: number;
        name: string;
        email: string;
        phone: string | null;
        status: string;
        created_at: string;
        documents: Document[];
        documents_count: number;
    };
    tickets: Ticket[];
}

export default function AdminClientShow({ client, tickets }: Props) {
    const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    return (
        <>
            <Head title={`Client: ${client.name} — Admin`} />

            <div className="p-6 md:p-8 space-y-8 min-h-screen bg-background">
                {/* Navigation & Header */}
                <div className="flex flex-col gap-6">
                    <Link href="/admin/clients" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors w-fit">
                        <ArrowLeft className="h-4 w-4" /> Back to All Clients
                    </Link>

                    <div className="bg-primary text-white p-8 rounded-xl border border-border relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                            <User className="h-64 w-64" />
                        </div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex items-center gap-5">
                                <div className="h-20 w-20 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-3xl font-display font-bold">
                                    {client.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h1 className="font-display text-3xl font-bold tracking-tight">{client.name}</h1>
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                            client.status === 'approved' ? 'bg-green-500/20 text-green-300 border-green-500/30' : 'bg-gold/20 text-gold border-gold/30'
                                        }`}>
                                            {client.status}
                                        </span>
                                    </div>
                                    <p className="text-white/70 flex items-center gap-2 text-sm">
                                        <Mail className="h-4 w-4" /> {client.email}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <Button className="bg-gold hover:bg-white text-black font-bold uppercase tracking-widest text-xs h-11 px-6">
                                    Edit Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="p-5 border-b border-border bg-surface/50">
                                <h2 className="font-display font-bold text-primary flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-gold" /> Client Information
                                </h2>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1 block">Full Name</label>
                                    <p className="text-primary font-medium">{client.name}</p>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1 block">Email Address</label>
                                    <p className="text-primary font-medium">{client.email}</p>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1 block">Phone Number</label>
                                    <p className="text-primary font-medium">{client.phone || 'Not provided'}</p>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1 block">Member Since</label>
                                    <p className="text-primary font-medium">{formatDate(client.created_at)}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Activity */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Documents Section */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="p-5 border-b border-border flex justify-between items-center bg-surface/50">
                                <h2 className="font-display font-bold text-primary flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-gold" /> Shared Documents
                                </h2>
                                <span className="text-xs font-bold text-muted-foreground">{client.documents_count} Files</span>
                            </div>
                            <div className="divide-y divide-border/50">
                                {client.documents.length > 0 ? client.documents.map(doc => (
                                    <div key={doc.id} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-smooth group">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <FileText className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary">{doc.name}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                                                    Uploaded {new Date(doc.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gold hover:text-black">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="p-12 text-center text-muted-foreground">
                                        <FileText className="h-10 w-10 mx-auto mb-3 opacity-20" />
                                        <p className="text-sm">No documents shared yet.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Recent Tickets Section */}
                        <div className="bg-card border border-border rounded-xl overflow-hidden">
                            <div className="p-5 border-b border-border flex justify-between items-center bg-surface/50">
                                <h2 className="font-display font-bold text-primary flex items-center gap-2">
                                    <MessageSquare className="h-4 w-4 text-gold" /> Support History
                                </h2>
                                <span className="text-xs font-bold text-muted-foreground">{tickets.length} Tickets</span>
                            </div>
                            <div className="divide-y divide-border/50">
                                {tickets.length > 0 ? tickets.map(ticket => (
                                    <Link 
                                        key={ticket.id} 
                                        href={`/admin/tickets/${ticket.id}`}
                                        className="p-4 flex items-center justify-between hover:bg-muted/30 transition-smooth group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-lg bg-surface border border-border flex items-center justify-center text-gold">
                                                <Clock className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-primary group-hover:text-gold transition-colors">{ticket.subject}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                                                    Opened {new Date(ticket.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                            ticket.status === 'open' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-green-50 text-green-700 border-green-200'
                                        }`}>
                                            {ticket.status}
                                        </span>
                                    </Link>
                                )) : (
                                    <div className="p-12 text-center text-muted-foreground">
                                        <MessageSquare className="h-10 w-10 mx-auto mb-3 opacity-20" />
                                        <p className="text-sm">No support history for this client.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminClientShow.layout = (page: any) => (
    <AppLayout breadcrumbs={[
        { title: 'Clients', href: '/admin/clients' },
        { title: 'Client Details', href: '#' }
    ]}>
        {page}
    </AppLayout>
);
