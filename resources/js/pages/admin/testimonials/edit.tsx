import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Star, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';

interface Testimonial {
    id: number;
    client_name: string;
    business_name: string | null;
    content: string;
    rating: number;
    avatar: string | null;
    is_featured: boolean;
    status: 'draft' | 'published';
}

interface Props {
    testimonial: Testimonial;
}

export default function EditTestimonial({ testimonial }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        client_name: testimonial.client_name,
        business_name: testimonial.business_name || '',
        content: testimonial.content,
        rating: testimonial.rating,
        avatar: testimonial.avatar || '',
        is_featured: testimonial.is_featured,
        status: testimonial.status,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(`/admin/testimonials/${testimonial.id}`);
    };

    return (
        <>
            <Head title={`Edit Story: ${testimonial.client_name} — Admin`} />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link 
                        href="/admin/testimonials" 
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to list
                    </Link>
                </div>

                <div className="bg-primary text-white p-8 border border-border">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="gold-rule" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Editing Story</span>
                    </div>
                    <h1 className="font-display text-3xl font-bold tracking-tight">Edit Business Story</h1>
                    <p className="text-white/70 mt-2">Update the success story for {testimonial.client_name}.</p>
                </div>

                <form onSubmit={submit} className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="client_name" className="text-primary font-bold uppercase tracking-widest text-[10px]">Client Name</Label>
                                    <Input
                                        id="client_name"
                                        value={data.client_name}
                                        onChange={e => setData('client_name', e.target.value)}
                                        placeholder="e.g. Amit Sharma"
                                        className="h-12 border-border focus:border-gold transition-all"
                                    />
                                    {errors.client_name && <p className="text-red-500 text-xs font-bold">{errors.client_name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="business_name" className="text-primary font-bold uppercase tracking-widest text-[10px]">Business Name</Label>
                                    <Input
                                        id="business_name"
                                        value={data.business_name}
                                        onChange={e => setData('business_name', e.target.value)}
                                        placeholder="e.g. Sharma Logistics Pvt Ltd"
                                        className="h-12 border-border focus:border-gold transition-all"
                                    />
                                    {errors.business_name && <p className="text-red-500 text-xs font-bold">{errors.business_name}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content" className="text-primary font-bold uppercase tracking-widest text-[10px]">The Story / Testimonial</Label>
                                <Textarea
                                    id="content"
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    placeholder="What does the client say about your service?"
                                    className="min-h-[200px] border-border focus:border-gold transition-all"
                                />
                                {errors.content && <p className="text-red-500 text-xs font-bold">{errors.content}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Rating</Label>
                                <div className="flex items-center gap-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setData('rating', star)}
                                            className="focus:outline-none"
                                        >
                                            <Star 
                                                className={`h-8 w-8 transition-colors ${
                                                    star <= data.rating ? 'fill-gold text-gold' : 'text-muted-foreground/30'
                                                }`} 
                                            />
                                        </button>
                                    ))}
                                    <span className="text-sm font-bold text-primary ml-2">{data.rating} / 5 Stars</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-card border border-border rounded-xl p-8 space-y-6 sticky top-8">
                            <h3 className="font-display font-bold text-primary flex items-center gap-2">
                                <Send className="h-4 w-4 text-gold" /> Publishing
                            </h3>
                            
                            <div className="space-y-2">
                                <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Status</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setData('status', 'draft')}
                                        className={`py-2 text-xs font-bold uppercase tracking-widest rounded-lg border transition-all ${
                                            data.status === 'draft' 
                                            ? 'bg-primary text-white border-primary' 
                                            : 'bg-surface text-muted-foreground border-border hover:bg-muted'
                                        }`}
                                    >
                                        Draft
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setData('status', 'published')}
                                        className={`py-2 text-xs font-bold uppercase tracking-widest rounded-lg border transition-all ${
                                            data.status === 'published' 
                                            ? 'bg-green-600 text-white border-green-600' 
                                            : 'bg-surface text-muted-foreground border-border hover:bg-muted'
                                        }`}
                                    >
                                        Publish
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-border">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="is_featured" className="text-primary font-bold uppercase tracking-widest text-[10px]">Feature on homepage</Label>
                                    <button
                                        type="button"
                                        onClick={() => setData('is_featured', !data.is_featured)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                                            data.is_featured ? 'bg-gold' : 'bg-muted'
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                data.is_featured ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="avatar" className="text-primary font-bold uppercase tracking-widest text-[10px]">Client Avatar URL (Optional)</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="avatar"
                                        value={data.avatar}
                                        onChange={e => setData('avatar', e.target.value)}
                                        placeholder="https://..."
                                        className="border-border focus:border-gold"
                                    />
                                    <div className="h-10 w-10 bg-muted rounded border border-border flex items-center justify-center shrink-0 overflow-hidden">
                                        {data.avatar ? <img src={data.avatar} className="h-full w-full object-cover" /> : <User className="h-4 w-4 text-muted-foreground" />}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <Button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full h-12 bg-gold text-black hover:bg-gold/90 font-bold"
                                >
                                    {processing ? 'Saving...' : <><Save className="h-4 w-4 mr-2" /> Update Story</>}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

EditTestimonial.layout = (page: any) => (
    <AppLayout breadcrumbs={[
        { title: 'Business Stories', href: '/admin/testimonials' },
        { title: 'Edit Story', href: '#' }
    ]}>
        {page}
    </AppLayout>
);
