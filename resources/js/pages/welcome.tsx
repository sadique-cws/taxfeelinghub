import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  FileCheck2,
  Landmark,
  Receipt,
  ShieldCheck,
  TrendingUp,
  Users,
  Star,
  Phone,
  Gavel,
  RefreshCcw,
  LayoutGrid
} from "lucide-react";
import { Button } from '@/components/ui/button';

const ICONS = {
  BookOpen, ShieldCheck, Building2, FileCheck2, Users, TrendingUp, Landmark, Receipt, Gavel, RefreshCcw, LayoutGrid
} as const;

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "1,200+", label: "Projects Delivered" },
  { value: "10k+", label: "Hours of Support" },
  { value: "25+", label: "Expert Advisors" },
];

const WHY = [
  { title: "End-to-end Expertise", desc: "One firm for accounting, tax, legal and advisory — no juggling vendors." },
  { title: "Personal Commitment", desc: "Dedicated relationship managers who know your business inside out." },
  { title: "Always Compliant", desc: "Proactive calendar so you never miss a statutory deadline or filing." },
  { title: "Transparent Pricing", desc: "Clear scope and fixed fees — no surprises, no hidden charges." },
];

interface Testimonial {
    id: number;
    client_name: string;
    business_name: string | null;
    content: string;
    rating: number;
    avatar: string | null;
}

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
    created_at: string;
}

interface WelcomeProps {
    featured_testimonials: Testimonial[];
    recent_posts: Post[];
}

const TESTIMONIALS_FALLBACK = [
  { name: "Anjali Sharma", role: "Founder, Retail SME", quote: "TaxFilingHub turned our messy books into a real-time dashboard. They've become an extension of our team." },
  { name: "Rohit Verma", role: "Director, Manufacturing Pvt Ltd", quote: "Their GST and ROC compliance has been flawless for three years. We finally sleep peacefully at deadline time." },
  { name: "Priya Mehta", role: "Co-founder, D2C Startup", quote: "From incorporation to fundraising paperwork — they handled every milestone with patience and clarity." },
];

const SERVICES = [
  {
    slug: 'accounting-support',
    title: 'Accounting Support',
    short: 'End-to-end bookkeeping and accounting partner for SMEs and startups.',
    icon: 'BookOpen'
  },
  {
    slug: 'trademark-copyright',
    title: 'Trademark & Copyright',
    short: 'Protect your brand identity with end-to-end IP registration.',
    icon: 'ShieldCheck'
  },
  {
    slug: 'firm-company-registration',
    title: 'Company Registration',
    short: 'Incorporate the right entity for your goals — fast and compliant.',
    icon: 'Building2'
  },
  {
    slug: 'compliance-services',
    title: 'Compliance Services',
    short: 'Stay ahead of every ROC, tax and regulatory deadline.',
    icon: 'FileCheck2'
  },
  {
    slug: 'business-fund-management',
    title: 'Fund Management',
    short: 'Grow profits, reduce costs and arrange the right capital.',
    icon: 'TrendingUp'
  },
  {
    slug: 'direct-taxes',
    title: 'Direct Taxes',
    short: 'Income tax planning, filing and representation for individuals & corporates.',
    icon: 'Receipt'
  },
  {
    slug: 'indirect-taxes',
    title: 'Indirect Taxes (GST)',
    short: 'GST registration, returns, audits and advisory under one roof.',
    icon: 'Landmark'
  },
  {
    slug: 'tax-litigation',
    title: 'Tax Litigation',
    short: 'Expert representation for Direct & Indirect tax controversies.',
    icon: 'Gavel'
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    short: 'Ensure financial transparency and operational efficiency.',
    icon: 'ShieldCheck'
  },
  {
    slug: 'conversion-restructuring',
    title: 'Conversion & Constitution',
    short: 'Seamless business entity conversion and MOA/AOA modifications.',
    icon: 'RefreshCcw'
  },
  {
    slug: 'miscellaneous-services',
    title: 'Misc registrations',
    short: 'DSC, IEC, FSSAI, Society & Trust registrations made easy.',
    icon: 'LayoutGrid'
  },
];

export default function Welcome({ featured_testimonials, recent_posts }: WelcomeProps) {
  return (
    <PublicLayout>
      <Head title="Tax Filing Hub — Tax, GST & Company Compliance Made Simple">
        <meta name="description" content="From accounting and GST to company registration and compliance, Tax Filing Hub gives growing businesses one trusted partner for every financial and legal need." />
      </Head>

      {/* HERO */}
      <section 
        className="relative min-h-[50vh] flex items-center overflow-hidden bg-hero-gradient text-primary-foreground"
        style={{ backgroundImage: 'url("/hero-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1.15fr_1fr] items-center py-6 lg:py-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="gold-rule" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Financial • Legal • Advisory
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              A trusted partner at every <span className="text-gold">stage of your growth.</span>
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              Tax Filing Hub combines technical mastery with a personal touch — helping startups, SMEs and enterprises stay compliant, efficient and ready for what's next.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 font-semibold text-gold-foreground hover:bg-gold/90 transition-smooth"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-7 py-3.5 font-semibold hover:bg-primary-foreground/10 transition-smooth"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-9 w-9 rounded-full bg-gradient-to-br from-gold to-accent border-2 border-primary" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-0.5">Trusted by 500+ businesses across India</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-video rounded-md bg-white/5 border border-primary-foreground/10 overflow-hidden flex items-center justify-center text-primary-foreground/10">
                <img src="/hero-main.png" alt="Tax Filing Hub Hero" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col gap-1 rounded-md bg-background text-foreground p-4 border border-border">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Live</p>
              </div>
              <p className="font-display font-bold text-lg">12,400+</p>
              <p className="text-xs text-muted-foreground">Returns filed this year</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl mb-14">
          <div className="gold-rule mb-5" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
            A complete suite of services for modern businesses.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One trusted firm for everything finance, tax and compliance — so you can focus entirely on growth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col rounded-md border border-border bg-card p-6 transition-all hover:border-gold/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground mb-5 transition-smooth group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-smooth group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-subtle-gradient">
        <div className="container-page py-20 md:py-28 grid gap-14 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-md bg-muted overflow-hidden flex items-center justify-center text-muted-foreground border border-border">
                <img src="/advisory.png" alt="Advisory Team" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block rounded-md bg-primary text-primary-foreground p-6 border border-border max-w-[240px]">
              <p className="font-display text-3xl font-bold text-gold">15+</p>
              <p className="text-sm mt-1 text-primary-foreground/80 leading-relaxed uppercase tracking-wider font-semibold">Years of combined advisory experience</p>
            </div>
          </div>
          <div>
            <div className="gold-rule mb-5" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Tax Filing Hub</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Expertise that feels personal.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We pair the rigor of a large firm with the warmth and accountability of a partner who actually knows your name.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {WHY.map((w) => (
                <div key={w.title} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{w.title}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-smooth"
            >
              About our firm <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center mb-5"><div className="gold-rule" /></div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What clients say</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Stories from the businesses we serve.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {(featured_testimonials && featured_testimonials.length > 0 ? featured_testimonials : TESTIMONIALS_FALLBACK).map((t: any, idx) => (
            <figure key={idx} className="rounded-md border border-border bg-card p-7 transition-smooth hover:border-gold/50 flex flex-col">
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < (t.rating || 5) ? 'fill-current' : 'text-muted-foreground/20'}`} />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed flex-1">"{t.content || t.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center overflow-hidden shrink-0 border border-border">
                    {t.avatar ? (
                        <img src={t.avatar} alt="" className="h-full w-full object-cover" />
                    ) : (
                        <Users className="h-5 w-5 text-gold" />
                    )}
                </div>
                <div>
                    <p className="font-semibold text-primary">{t.client_name || t.name}</p>
                    <p className="text-[10px] uppercase font-bold text-accent tracking-wider">{t.business_name || t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* RECENT POSTS */}
      {recent_posts && recent_posts.length > 0 && (
        <section className="bg-surface py-20 md:py-28">
            <div className="container-page">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-14">
                    <div className="max-w-2xl">
                        <div className="gold-rule mb-5" />
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Knowledge Hub</p>
                        <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
                            Recent Insights & Updates.
                        </h2>
                    </div>
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors pb-1 border-b border-gold"
                    >
                        View all posts <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {recent_posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                            <div className="aspect-[16/10] rounded-md overflow-hidden bg-muted border border-border mb-6">
                                {post.featured_image ? (
                                    <img src={post.featured_image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center text-muted-foreground/20 italic">
                                        No Image
                                    </div>
                                )}
                            </div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">
                                {new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight mb-3">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {post.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Ready to simplify your <span className="text-gold italic">finances?</span></h2>
                <p className="mt-8 text-xl text-primary-foreground/70 leading-relaxed">
                    Speak to one of our advisors about taxes, compliance or company setup. We respond within one business day.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" variant="secondary" className="rounded-md px-10 h-16 text-lg font-bold w-full sm:w-auto border border-white/20" asChild>
                        <Link href="/contact">Request a Call Back</Link>
                    </Button>
                    <a href="tel:+917488447789" className="flex items-center gap-4 text-2xl font-bold text-gold hover:text-white transition-smooth group">
                        <div className="h-12 w-12 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-white transition-smooth">
                            <Phone className="h-6 w-6" />
                        </div>
                        <span>7488447789</span>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </PublicLayout>
  );
}
