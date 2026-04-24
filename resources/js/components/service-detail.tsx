import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
    CheckCircle2, 
    ArrowRight, 
    Phone,
    HelpCircle
} from 'lucide-react';
import { PageHeader } from '@/components/page-header';

interface ServiceDetailProps {
    title: string;
    description: string;
    overview: string;
    features: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export default function ServiceDetail({ title, description, overview, features, faqs }: ServiceDetailProps) {
    return (
        <PublicLayout>
            <Head title={`${title} — Tax Filing Hub`} />
            
            <PageHeader
                eyebrow="Service Details"
                title={title}
                description={description}
                breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: title }]}
            />

            {/* Overview */}
            <section className="py-24 md:py-32">
                <div className="container-page">
                    <div className="grid gap-20 lg:grid-cols-[1fr_1.15fr] items-start">
                        <div className="animate-fade-up">
                            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-8">Service Overview</h2>
                            <div className="prose prose-slate max-w-none text-muted-foreground leading-relaxed text-lg">
                                {overview}
                            </div>
                        </div>
                        <div className="space-y-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-8">Key Deliverables</h2>
                            <div className="grid gap-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex gap-6 p-8 rounded-2xl bg-surface border border-border shadow-card group hover:border-gold/30 transition-smooth">
                                        <div className="h-10 w-10 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-black transition-smooth">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary font-display mb-2 text-lg">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 md:py-32 bg-surface border-y border-border">
                <div className="container-page max-w-4xl">
                    <div className="text-center mb-20">
                        <div className="flex justify-center mb-6"><div className="gold-rule" /></div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Common Questions</h2>
                        <h3 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-primary font-display">Everything you need to know.</h3>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <Card key={i} className="border-none shadow-card rounded-2xl bg-background overflow-hidden animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <CardContent className="p-8">
                                    <div className="flex gap-6">
                                        <HelpCircle className="h-6 w-6 text-gold shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-xl font-bold mb-4 text-primary font-display leading-snug">{faq.question}</h4>
                                            <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="container-page text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-center mb-6"><div className="gold-rule" /></div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-display text-primary leading-tight">Ready to <span className="text-gold italic">get started?</span></h2>
                        <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                            Our team of experts is ready to assist you with {title.toLowerCase()} and other compliance needs.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button size="lg" className="rounded-xl px-12 h-16 text-lg font-bold w-full sm:w-auto shadow-elegant" asChild>
                                <Link href="/contact">Request a Call Back</Link>
                            </Button>
                            <a href="tel:+917488447789" className="flex items-center gap-4 text-2xl font-bold text-primary hover:text-accent transition-smooth group">
                                <div className="h-12 w-12 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-accent transition-smooth">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <span>+91 7488447789</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
