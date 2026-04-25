import { Head, router } from '@inertiajs/react';
import { Mail, Phone, Trash2, CheckCircle, XCircle, User, MessageSquare, Calendar } from 'lucide-react';

interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string | null;
    message: string;
    is_read: boolean;
    created_at: string;
}

interface Props {
    leads: Lead[];
}

export default function AdminLeads({ leads }: Props) {
    const toggleRead = (id: number) => {
        router.patch(`/admin/leads/${id}/toggle-read`);
    };

    const deleteLead = (id: number) => {
        if (confirm('Are you sure you want to delete this callback request?')) {
            router.delete(`/admin/leads/${id}`);
        }
    };

    return (
        <>
            <Head title="Callback Requests — Admin" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</span>
                            </div>
                            <h1 className="font-display text-3xl font-bold tracking-tight">Callback Requests</h1>
                            <p className="text-white/70 mt-2">Manage inquiries and consultation requests from the website.</p>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <span className="rounded bg-gold/20 text-gold font-bold px-4 py-1.5 border border-gold/30">
                                {leads.filter(l => !l.is_read).length} New Inquiries
                            </span>
                        </div>
                    </div>
                </div>

                {/* Leads List */}
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-center">
                        <h2 className="font-display font-bold text-primary">All Requests</h2>
                        <span className="text-xs font-bold px-3 py-1 rounded bg-primary/10 text-primary">{leads.length} Total</span>
                    </div>
                    <div className="divide-y divide-border/50">
                        {leads.length > 0 ? leads.map(lead => (
                            <div key={lead.id} className={`p-6 hover:bg-muted/30 transition-smooth ${!lead.is_read ? 'bg-gold/[0.02] border-l-4 border-l-gold' : ''}`}>
                                <div className="flex flex-col lg:flex-row justify-between gap-6">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <h3 className={`font-display font-bold text-lg ${!lead.is_read ? 'text-primary' : 'text-primary/70'}`}>
                                                {lead.name}
                                            </h3>
                                            {!lead.is_read && (
                                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-gold text-black">
                                                    New
                                                </span>
                                            )}
                                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5" /> {new Date(lead.created_at).toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div className="flex items-center gap-2.5 text-sm">
                                                <div className="h-8 w-8 rounded bg-primary/5 flex items-center justify-center text-primary">
                                                    <Mail className="h-4 w-4" />
                                                </div>
                                                <a href={`mailto:${lead.email}`} className="text-muted-foreground hover:text-primary transition-colors">{lead.email}</a>
                                            </div>
                                            <div className="flex items-center gap-2.5 text-sm">
                                                <div className="h-8 w-8 rounded bg-primary/5 flex items-center justify-center text-primary">
                                                    <Phone className="h-4 w-4" />
                                                </div>
                                                <a href={`tel:${lead.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{lead.phone}</a>
                                            </div>
                                            {lead.subject && (
                                                <div className="flex items-center gap-2.5 text-sm">
                                                    <div className="h-8 w-8 rounded bg-primary/5 flex items-center justify-center text-primary">
                                                        <MessageSquare className="h-4 w-4" />
                                                    </div>
                                                    <span className="text-muted-foreground font-medium">{lead.subject}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="bg-surface p-4 rounded-xl border border-border">
                                            <p className="text-sm text-foreground leading-relaxed italic">
                                                "{lead.message}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex lg:flex-col items-center justify-center gap-2">
                                        <button 
                                            onClick={() => toggleRead(lead.id)}
                                            className={`p-3 rounded-xl transition-smooth border w-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest ${
                                                lead.is_read 
                                                ? 'text-muted-foreground bg-surface border-border hover:bg-muted' 
                                                : 'text-gold bg-primary border-primary hover:bg-secondary'
                                            }`}
                                        >
                                            {lead.is_read ? <><XCircle className="h-4 w-4" /> Mark Unread</> : <><CheckCircle className="h-4 w-4" /> Mark Read</>}
                                        </button>
                                        <button 
                                            onClick={() => deleteLead(lead.id)}
                                            className="p-3 rounded-xl text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-smooth border border-border w-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest"
                                        >
                                            <Trash2 className="h-4 w-4" /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="p-20 text-center text-muted-foreground">
                                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                <p className="font-display font-semibold text-primary">No inquiries found.</p>
                                <p className="text-sm mt-1">When someone submits the contact form, it will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

AdminLeads.layout = {
    breadcrumbs: [
        { title: 'Admin', href: '/admin/documents' },
        { title: 'Inquiries', href: '/admin/leads' },
    ],
};
