import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Send, Star, Quote, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';

export default function CreateFeedback() {
    const { data, setData, post, processing, errors, wasSuccessful } = useForm({
        business_name: '',
        content: '',
        rating: 5,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/feedback');
    };

    if (wasSuccessful) {
        return (
            <AppLayout breadcrumbs={[{ title: 'Feedback', href: '#' }]}>
                <Head title="Feedback Submitted" />
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
                    <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h1 className="font-display text-3xl font-bold text-primary mb-2">Thank You!</h1>
                    <p className="text-muted-foreground max-w-md mx-auto mb-8">
                        Your story has been submitted successfully. Our team will review it shortly. We truly appreciate your partnership.
                    </p>
                    <Button asChild className="bg-primary hover:bg-secondary">
                        <Link href="/dashboard">Back to Dashboard</Link>
                    </Button>
                </div>
            </AppLayout>
        );
    }

    return (
        <>
            <Head title="Share Your Story — Client Portal" />

            <div className="p-6 md:p-8 space-y-8 min-h-full max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link 
                        href="/dashboard" 
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Link>
                </div>

                <div className="bg-primary text-white p-8 rounded-xl border border-border shadow-elegant relative overflow-hidden">
                    <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                        <Quote className="h-64 w-64" />
                    </div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="gold-rule" />
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold text-shadow-sm">Your Success</span>
                        </div>
                        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Share Your Experience</h1>
                        <p className="text-white/70 mt-2 text-lg max-w-xl">
                            How has Tax Filing Hub helped your business? We'd love to hear your story and feature it on our wall of success.
                        </p>
                    </div>
                </div>

                <form onSubmit={submit} className="bg-card border border-border rounded-xl p-8 space-y-8 shadow-soft">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="business_name" className="text-primary font-bold uppercase tracking-widest text-[10px]">Your Business / Entity Name (Optional)</Label>
                            <Input
                                id="business_name"
                                value={data.business_name}
                                onChange={e => setData('business_name', e.target.value)}
                                placeholder="e.g. Sharma Enterprises or Self-Employed"
                                className="h-12 border-border focus:border-gold transition-all"
                            />
                            {errors.business_name && <p className="text-red-500 text-xs font-bold">{errors.business_name}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content" className="text-primary font-bold uppercase tracking-widest text-[10px]">Your Story / Feedback</Label>
                            <Textarea
                                id="content"
                                value={data.content}
                                onChange={e => setData('content', e.target.value)}
                                placeholder="Tell us about your experience with our services, our team, or how we solved a problem for you..."
                                className="min-h-[200px] border-border focus:border-gold transition-all text-lg leading-relaxed"
                            />
                            <div className="flex justify-between items-center">
                                {errors.content && <p className="text-red-500 text-xs font-bold">{errors.content}</p>}
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest ml-auto">Min. 20 characters</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Overall Satisfaction</Label>
                            <div className="flex items-center gap-4 bg-surface p-4 rounded-lg border border-border w-fit">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setData('rating', star)}
                                        className="focus:outline-none hover:scale-110 transition-transform"
                                    >
                                        <Star 
                                            className={`h-10 w-10 transition-colors ${
                                                star <= data.rating ? 'fill-gold text-gold' : 'text-muted-foreground/20'
                                            }`} 
                                        />
                                    </button>
                                ))}
                                <span className="text-lg font-bold text-primary ml-4 min-w-[3ch]">{data.rating}/5</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-sm text-muted-foreground italic max-w-sm">
                            By submitting, you agree that we may feature your testimonial on our website and marketing materials.
                        </p>
                        <Button 
                            type="submit" 
                            disabled={processing}
                            className="w-full md:w-auto h-14 px-10 bg-gold text-black hover:bg-gold/90 font-bold rounded-lg shadow-elegant transition-all active:scale-95"
                        >
                            {processing ? 'Submitting...' : <><Send className="h-5 w-5 mr-2" /> Submit My Story</>}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

CreateFeedback.layout = (page: any) => (
    <AppLayout breadcrumbs={[{ title: 'Share Story', href: '/dashboard/feedback' }]}>
        {page}
    </AppLayout>
);
