import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Send, LifeBuoy, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';

export default function ClientTicketCreate() {
    const { data, setData, post, processing, errors } = useForm({
        subject: '',
        priority: 'medium',
        description: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/tickets');
    };

    return (
        <>
            <Head title="Raise Support Ticket — Client Portal" />

            <div className="p-6 md:p-8 space-y-8 min-h-full max-w-4xl mx-auto">
                {/* Back Link */}
                <Link href="/dashboard/tickets" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Back to My Tickets
                </Link>

                <div className="bg-primary text-white p-8 rounded-xl border border-border overflow-hidden relative">
                    <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                        <LifeBuoy className="h-64 w-64" />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="gold-rule" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Submit Request</span>
                        </div>
                        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">How can we help?</h1>
                        <p className="text-white/70 mt-2 text-lg max-w-xl">
                            Provide as much detail as possible so our experts can assist you effectively.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    <form onSubmit={submit} className="bg-card border border-border rounded-xl p-8 space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-primary font-bold uppercase tracking-widest text-[10px]">Subject / Topic</Label>
                                <Input
                                    id="subject"
                                    value={data.subject}
                                    onChange={e => setData('subject', e.target.value)}
                                    placeholder="e.g. Question regarding GST filing or Error in Document"
                                    className="h-12 border-border focus:border-gold transition-all"
                                    required
                                />
                                {errors.subject && <p className="text-red-500 text-xs font-bold">{errors.subject}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Priority Level</Label>
                                <Select value={data.priority} onValueChange={val => setData('priority', val as any)}>
                                    <SelectTrigger className="h-12 border-border focus:border-gold">
                                        <SelectValue placeholder="Select Priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="low">Low (General Inquiry)</SelectItem>
                                        <SelectItem value="medium">Medium (Requires Attention)</SelectItem>
                                        <SelectItem value="high">High (Urgent Issue)</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.priority && <p className="text-red-500 text-xs font-bold">{errors.priority}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-primary font-bold uppercase tracking-widest text-[10px]">Detailed Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={e => setData('description', e.target.value)}
                                    placeholder="Please describe your issue or query in detail..."
                                    className="min-h-[250px] border-border focus:border-gold transition-all text-lg leading-relaxed"
                                    required
                                />
                                {errors.description && <p className="text-red-500 text-xs font-bold">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border flex justify-end">
                            <Button 
                                type="submit" 
                                disabled={processing}
                                className="w-full md:w-auto h-14 px-10 bg-gold text-black hover:bg-gold/90 font-bold rounded-lg transition-all active:scale-95"
                            >
                                {processing ? 'Submitting...' : <><Send className="h-5 w-5 mr-2" /> Raise Support Ticket</>}
                            </Button>
                        </div>
                    </form>

                    <aside className="space-y-6">
                        <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
                            <div className="flex items-center gap-2 text-gold">
                                <Info className="h-5 w-5" />
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Quick Tips</h4>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Be specific about the service or document.",
                                    "Mention any deadlines or urgent timelines.",
                                    "Admins typically respond within 2-4 business hours.",
                                    "You can track the status of your ticket in the My Tickets tab."
                                ].map((tip, i) => (
                                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                        <div className="h-1 w-1 rounded-full bg-gold mt-1.5 shrink-0" />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
                            <AlertCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                            <h4 className="text-xs font-bold text-blue-900 uppercase tracking-widest">Urgent Help?</h4>
                            <p className="text-[10px] text-blue-700 mt-2">
                                For critical compliance deadlines within 24 hours, we recommend calling our direct support line.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

ClientTicketCreate.layout = (page: any) => (
    <AppLayout breadcrumbs={[
        { title: 'Support Tickets', href: '/dashboard/tickets' },
        { title: 'New Ticket', href: '#' }
    ]}>
        {page}
    </AppLayout>
);
