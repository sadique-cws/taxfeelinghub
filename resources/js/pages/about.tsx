import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Award, Heart, Sparkles, Target, ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from '@/components/ui/button';

const VALUES = [
  { icon: Award, title: "Excellence", desc: "Rigorous standards on every engagement, from a single ITR to a multi-entity audit." },
  { icon: Heart, title: "Empathy", desc: "We listen first. Your goals shape the engagement, not a generic checklist." },
  { icon: Target, title: "Accuracy", desc: "Every number, every filing — peer-reviewed before it leaves our desk." },
  { icon: Sparkles, title: "Innovation", desc: "Modern tools and cloud platforms to keep your finances visible in real time." },
];

const TIMELINE = [
  { year: "2012", title: "Founded in Purnia, Bihar", desc: "Established by CA Rajeev Kumar Ranjan to deliver high-quality financial advisory." },
  { year: "2018", title: "Expanded to corporate advisory", desc: "Added company registrations, ROC compliance and audit support." },
  { year: "2021", title: "Launched cloud accounting", desc: "Moved 200+ clients to Tally, Zoho and QuickBooks for real-time insights." },
  { year: "Today", title: "500+ clients across India", desc: "A multi-disciplinary team serving startups, SMEs and large enterprises." },
];

export default function About() {
  return (
    <PublicLayout>
      <Head title="About Tax Filing Hub — Our Story, Mission & Team">
        <meta name="description" content="Meet Tax Filing Hub: a young team of finance, tax and legal professionals supporting businesses across India with personal commitment and deep expertise." />
      </Head>

      <PageHeader
        eyebrow="About us"
        title="A young team of professionals, building trust one client at a time."
        description="We bring together accountants, lawyers and consultants under one roof to give your business clarity, compliance and confidence."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* WHO WE ARE */}
      <section className="container-page py-16 md:py-24 grid gap-16 lg:grid-cols-1 items-center">
        <div className="animate-fade-up">
          <div className="gold-rule mb-5" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-5">Who we are</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            A leading financial & legal advisory firm with deep specialisation in assurance.
          </h2>
          <div className="mt-6 space-y-6 text-muted-foreground text-lg leading-relaxed text-justify">
            <p>
              Tax Filing Hub is a premier financial and legal advisory firm, distinguished by its deep expertise in assurance, taxation, and regulatory compliance. The firm is led by <strong>CA Rajeev Kumar Ranjan</strong>, a highly regarded practicing Chartered Accountant based in Purnia, Bihar, with a professional footprint that extends across India and international jurisdictions.
            </p>
            <p>
              Since establishing his practice in 2012, he has consistently delivered sophisticated, high-quality advisory services designed to create measurable value for clients. Guided by the principle of <strong>“Service with Responsibility,”</strong> he upholds the highest standards of precision, integrity, and professional excellence.
            </p>
            <p>
              With over 15 years of extensive experience, CA Rajeev Kumar Ranjan, along with his accomplished team, offers comprehensive expertise across financial management, taxation, assurance, and strategic advisory. The firm remains at the forefront of the evolving financial and legal ecosystem by proactively tracking legislative amendments, regulatory developments, and policy shifts.
            </p>
            <p>
              The strength of Tax Filing Hub lies in its multidisciplinary team of seasoned professionals, comprising Chartered Accountants, Company Secretaries, Corporate Financial Advisors, Advocates, and Tax Consultants. Leveraging deep domain knowledge and practical insights, the team delivers bespoke solutions spanning bookkeeping, corporate advisory, statutory compliance, and digital financial transformation.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat value="500+" label="Clients" />
            <Stat value="15+" label="Years" />
            <Stat value="25+" label="Experts" />
          </div>
        </div>
        
      </section>

      {/* VALUES */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-up">
            <div className="flex justify-center mb-5"><div className="gold-rule" /></div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
              The values we lead with.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Four principles that quietly shape how we work — every day, with every client.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <div key={v.title} className="rounded-xl border border-border bg-background p-8 animate-fade-up transition-all hover:border-gold/50" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-6">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="container-page py-20 md:py-28">
        <div className="max-w-2xl mb-12 animate-fade-up">
          <div className="gold-rule mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Our journey so far.
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="relative pl-8 border-l-2 border-gold animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gold" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Milestone {i + 1}</p>
              <p className="font-display text-3xl font-bold text-primary mb-1">{t.year}</p>
              <p className="font-bold text-lg text-foreground mb-1">{t.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 animate-fade-up">
          <Button size="lg" className="rounded-lg px-10 h-14 font-bold" asChild>
            <Link href="/services">
                See what we do <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Ready to simplify your <span className="text-gold italic">finances?</span></h2>
                <p className="mt-8 text-xl text-white/70 leading-relaxed">
                    Speak to one of our advisors about taxes, compliance or company setup. We respond within one business day.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" variant="secondary" className="rounded-lg px-10 h-16 text-lg font-bold w-full sm:w-auto border border-white/20" asChild>
                        <Link href="/contact">Request a Call Back</Link>
                    </Button>
                    <a href="tel:+917979891922" className="flex items-center gap-4 text-2xl font-bold text-gold hover:text-white transition-smooth group">
                        <div className="h-12 w-12 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-white transition-smooth">
                            <Phone className="h-6 w-6" />
                        </div>
                        <span>+91 7979891922</span>
                    </a>
                </div>
            </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center group hover:border-gold/30 transition-smooth">
      <p className="font-display text-3xl font-bold text-primary group-hover:text-accent transition-colors">{value}</p>
      <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-widest leading-none">{label}</p>
    </div>
  );
}
