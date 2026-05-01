import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, User, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    testimonials: Testimonial[];
}

export default function AdminTestimonials({ testimonials }: Props) {
    const deleteTestimonial = (id: number) => {
        if (confirm('Are you sure you want to delete this business story?')) {
            router.delete(`/admin/testimonials/${id}`);
        }
    };

    return (
        <>
            <Head title="Business Stories — Admin" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</span>
                            </div>
                            <h1 className="font-display text-3xl font-bold tracking-tight">Business Stories</h1>
                            <p className="text-white/70 mt-2">Manage success stories and testimonials from the businesses we serve.</p>
                        </div>
                        <Button className="bg-gold text-black hover:bg-gold/90 font-bold" asChild>
                            <Link href="/admin/testimonials/create">
                                <Plus className="h-5 w-5 mr-2" /> New Story
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Testimonials List */}
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-center">
                        <h2 className="font-display font-bold text-primary">All Stories</h2>
                        <span className="text-xs font-bold px-3 py-1 rounded bg-primary/10 text-primary">{testimonials.length} Total</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface text-xs font-bold uppercase tracking-widest text-accent border-b border-border">
                                    <th className="px-6 py-4">Client / Business</th>
                                    <th className="px-6 py-4">Story Content</th>
                                    <th className="px-6 py-4">Rating</th>
                                    <th className="px-6 py-4">Featured</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {testimonials.length > 0 ? testimonials.map(testimonial => (
                                    <tr key={testimonial.id} className="hover:bg-muted/30 transition-smooth group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden shrink-0 border border-border">
                                                    {testimonial.avatar ? (
                                                        <img src={testimonial.avatar} alt="" className="h-full w-full object-cover" />
                                                    ) : (
                                                        <User className="h-5 w-5 text-gold" />
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-primary">{testimonial.client_name}</span>
                                                    <span className="text-[10px] uppercase font-bold text-gold tracking-wider">{testimonial.business_name || 'Individual'}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <p className="text-sm text-muted-foreground line-clamp-2 max-w-md">"{testimonial.content}"</p>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i} 
                                                        className={`h-3 w-3 ${i < testimonial.rating ? 'fill-gold text-gold' : 'text-muted-foreground/30'}`} 
                                                    />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            {testimonial.is_featured ? (
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-gold/10 text-gold border border-gold/20">
                                                    Featured
                                                </span>
                                            ) : (
                                                <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">No</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                                testimonial.status === 'published' 
                                                ? 'bg-green-50 text-green-700 border-green-200' 
                                                : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                            }`}>
                                                {testimonial.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {testimonial.status === 'draft' && (
                                                    <Button 
                                                        size="sm" 
                                                        className="h-8 px-3 bg-green-600 hover:bg-green-700 text-white font-bold text-[10px] uppercase tracking-widest"
                                                        onClick={() => router.patch(`/admin/testimonials/${testimonial.id}`, { status: 'published' })}
                                                    >
                                                        Approve
                                                    </Button>
                                                )}
                                                <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-gold hover:text-black transition-all" asChild title="Edit">
                                                    <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
                                                        <Edit2 className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-red-500 hover:text-white transition-all" onClick={() => deleteTestimonial(testimonial.id)} title="Delete">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-20 text-center text-muted-foreground">
                                            <Quote className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                            <p className="font-display font-semibold text-primary">No stories found.</p>
                                            <p className="text-sm mt-1">Share the first success story of your client.</p>
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

AdminTestimonials.layout = (page: any) => (
    <AppLayout breadcrumbs={[{ title: 'Business Stories', href: '/admin/testimonials' }]}>
        {page}
    </AppLayout>
);
