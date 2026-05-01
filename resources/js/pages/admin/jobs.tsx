import { Head, useForm, router } from '@inertiajs/react';
import { Briefcase, Trash2, MapPin, Plus, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';

interface CareerJob {
    id: number;
    title: string;
    type: string;
    location: string;
    description: string;
    is_active: boolean;
    created_at: string;
}

interface Props {
    jobs: CareerJob[];
}

export default function AdminJobs({ jobs }: Props) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '',
        type: 'Full-time',
        location: '',
        description: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/jobs', { onSuccess: () => reset() });
    };

    const toggleStatus = (job: CareerJob) => {
        router.patch(`/admin/jobs/${job.id}`, {
            ...job,
            is_active: !job.is_active,
        });
    };

    const deleteJob = (id: number) => {
        if (confirm('Are you sure you want to delete this job opening?')) {
            router.delete(`/admin/jobs/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Jobs — Admin" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="gold-rule" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</span>
                    </div>
                    <h1 className="font-display text-3xl font-bold tracking-tight">Career Management</h1>
                    <p className="text-white/70 mt-2">Add and manage active job openings on your career page.</p>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Create Form */}
                    <div className="lg:col-span-1 rounded-xl border border-border bg-card p-6 h-fit">
                        <h2 className="font-display text-lg font-bold text-primary mb-6 flex items-center gap-2">
                            <Plus className="h-5 w-5 text-gold" />
                            Post New Opening
                        </h2>
                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Job Title</label>
                                <Input 
                                    className="rounded-xl border-border" 
                                    value={data.title} 
                                    onChange={e => setData('title', e.target.value)} 
                                    placeholder="e.g. Senior Tax Associate" 
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Job Type</label>
                                <Select value={data.type} onValueChange={(val) => setData('type', val)}>
                                    <SelectTrigger className="rounded-xl border-border">
                                        <SelectValue placeholder="Select type..." />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-border">
                                        <SelectItem value="Full-time">Full-time</SelectItem>
                                        <SelectItem value="Part-time">Part-time</SelectItem>
                                        <SelectItem value="Internship">Internship</SelectItem>
                                        <SelectItem value="Contract">Contract</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Location</label>
                                <Input 
                                    className="rounded-xl border-border" 
                                    value={data.location} 
                                    onChange={e => setData('location', e.target.value)} 
                                    placeholder="e.g. Purnia, Bihar / Remote" 
                                />
                                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Description</label>
                                <Textarea 
                                    className="rounded-xl border-border min-h-[120px]" 
                                    value={data.description} 
                                    onChange={e => setData('description', e.target.value)} 
                                    placeholder="Responsibilities, requirements, etc." 
                                />
                                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                            </div>
                            <Button type="submit" disabled={processing} className="w-full rounded-xl bg-primary hover:bg-secondary text-white font-bold py-6">
                                {processing ? 'Posting...' : 'Post Opening'}
                            </Button>
                        </form>
                    </div>

                    {/* Openings List */}
                    <div className="lg:col-span-2 rounded-xl border border-border bg-card overflow-hidden">
                        <div className="p-5 border-b border-border flex justify-between items-center">
                            <h2 className="font-display font-bold text-primary">Active Openings</h2>
                            <span className="text-xs font-bold px-3 py-1 rounded bg-primary/10 text-primary">{jobs.length} Positions</span>
                        </div>
                        <div className="divide-y divide-border/50">
                            {jobs.length > 0 ? jobs.map(job => (
                                <div key={job.id} className="p-6 hover:bg-muted/30 transition-smooth">
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-display font-bold text-primary text-lg">{job.title}</h3>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${
                                                    job.is_active ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                                                }`}>
                                                    {job.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                                                <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-gold" /> {job.type}</span>
                                                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" /> {job.location}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">{job.description}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={() => toggleStatus(job)}
                                                className={`p-2 rounded-lg transition-smooth border ${
                                                    job.is_active ? 'text-red-500 bg-red-50 hover:bg-red-100 border-red-100' : 'text-green-600 bg-green-50 hover:bg-green-100 border-green-100'
                                                }`}
                                                title={job.is_active ? 'Deactivate' : 'Activate'}
                                            >
                                                {job.is_active ? <XCircle className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                                            </button>
                                            <button 
                                                onClick={() => deleteJob(job.id)}
                                                className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-smooth border border-border"
                                                title="Delete"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="p-20 text-center text-muted-foreground">
                                    <Briefcase className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                    <p className="font-display font-semibold text-primary">No job openings yet.</p>
                                    <p className="text-sm mt-1">Add your first job opening using the form on the left.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

AdminJobs.layout = (page: any) => (
    <AppLayout breadcrumbs={[
        { title: 'Admin', href: '/admin/documents' },
        { title: 'Careers', href: '/admin/jobs' },
    ]}>
        {page}
    </AppLayout>
);
