import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { PageHeader } from "@/components/page-header";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

interface Service {
    title: string;
    slug: string;
}

interface LocationProps {
    location: {
        name: string;
        city: string;
        area: string | null;
        description: string;
    };
    services: Record<string, Service>;
}

export default function LocationLanding({ location, services }: LocationProps) {
    const cityName = location.city;
    const fullLocation = location.name;

    return (
        <PublicLayout>
            <Head>
                <title>{`Best Tax Consultant in ${fullLocation} — Tax Filing Hub`}</title>
                <meta name="description" content={`Expert Income Tax, GST, and Audit services in ${fullLocation}, Bihar. Professional chartered accountant services and financial consulting in ${cityName}.`} />
                <meta name="keywords" content={`Tax Consultant in ${fullLocation}, GST Registration ${cityName}, Income Tax Filing ${cityName}, CA in ${fullLocation}, Best Accountants ${cityName}`} />
            </Head>

            <PageHeader
                eyebrow="Local Expertise"
                title={`Professional Tax Services in ${fullLocation}`}
                description={`${location.description} We provide comprehensive GST, Income Tax, and Audit support tailored for businesses in ${fullLocation}.`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: cityName, href: `/best-tax-consultant-in-${cityName.toLowerCase()}` },
                    { label: location.area || "Overview" }
                ]}
            />

            {/* Local Trust Section */}
            <section className="container-page py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-fade-up">
                        <div className="gold-rule mb-6" />
                        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
                            Your trusted financial advisor in <span className="text-gold">{fullLocation}.</span>
                        </h2>
                        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                            At Tax Filing Hub, we understand the local business landscape of {cityName}. 
                            Whether you are a small trader in {location.area || cityName} or a large corporate entity in Bihar, 
                            our expert team ensures your compliance is handled with precision and care.
                        </p>
                        
                        <div className="mt-10 grid gap-4">
                            {[
                                "Expert guidance on Direct & Indirect Taxes",
                                "Local office presence for face-to-face consultation",
                                "Deep understanding of Bihar's regulatory environment",
                                "Dedicated support for local SME and Startups"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                                    <span className="font-medium text-primary/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl bg-primary text-white p-10 md:p-14 border border-white/10 relative overflow-hidden animate-fade-up">
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />
                        <div className="relative z-10">
                            <ShieldCheck className="h-12 w-12 text-gold mb-8" />
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">Ready to scale your business in {cityName}?</h3>
                            <p className="text-white/70 mb-10 text-lg">
                                Stop worrying about compliance and start focusing on growth. 
                                Our experts are just a call away.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 font-bold text-black hover:bg-gold/90 transition-smooth group"
                            >
                                Get a Free Consultation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Services Grid */}
            <section className="bg-surface border-y border-border">
                <div className="container-page py-24">
                    <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Specialties</span>
                        <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-primary">Services we offer in {cityName}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Object.values(services).map((service, i) => (
                            <div key={i} className="rounded-xl border border-border bg-background p-8 hover:border-gold/50 transition-all animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <h3 className="font-display text-xl font-bold text-primary mb-4 leading-tight">{service.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    Comprehensive {service.title.toLowerCase()} tailored for the {cityName} business ecosystem.
                                </p>
                                <Link 
                                    href="/services" 
                                    className="text-xs font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    Learn More <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact */}
            <section className="container-page py-20">
                <div className="grid sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-8 rounded-xl border border-dashed border-border animate-fade-up">
                        <MapPin className="h-8 w-8 text-gold mb-4" />
                        <h4 className="font-bold text-primary mb-2">Visit Local Hub</h4>
                        <p className="text-sm text-muted-foreground">Bhatta Bazar, Purnia, Bihar</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 rounded-xl border border-dashed border-border animate-fade-up" style={{ animationDelay: '0.1s' }}>
                        <Phone className="h-8 w-8 text-gold mb-4" />
                        <h4 className="font-bold text-primary mb-2">Call Direct</h4>
                        <p className="text-sm text-muted-foreground">7488447789</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 rounded-xl border border-dashed border-border animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <Mail className="h-8 w-8 text-gold mb-4" />
                        <h4 className="font-bold text-primary mb-2">Email Inquiry</h4>
                        <p className="text-sm text-muted-foreground">Taxfillinghub@gmail.com</p>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
