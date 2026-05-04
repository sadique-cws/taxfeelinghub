import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import {
  ArrowRight, BookOpen, Building2, FileCheck2, Landmark,
  Receipt, ShieldCheck, TrendingUp, Users, Phone, LayoutGrid, Gavel, RefreshCcw
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from '@/components/ui/button';

const ICONS = {
  BookOpen, ShieldCheck, Building2, FileCheck2, Users, TrendingUp, Landmark, Receipt, LayoutGrid, Gavel, RefreshCcw
} as const;

const SERVICES = [
  {
    slug: 'accounting-support',
    title: 'Accounting Support',
    short: 'End-to-end bookkeeping and accounting partner for SMEs and startups.',
    icon: 'BookOpen',
    highlights: ['Daily bookkeeping', 'Bank reconciliations', 'Financial reporting']
  },
  {
    slug: 'trademark-copyright',
    title: 'Trademark & Copyright',
    short: 'Protect your brand identity with end-to-end IP registration.',
    icon: 'ShieldCheck',
    highlights: ['IP registration', 'Trademark search', 'Prosecution support']
  },
  {
    slug: 'firm-company-registration',
    title: 'Company Registration',
    short: 'Incorporate the right entity for your goals — fast and compliant.',
    icon: 'Building2',
    highlights: ['Pvt Ltd / LLP', 'MSME Registration', 'Digital Signatures']
  },
  {
    slug: 'conversion-restructuring',
    title: 'Conversion & Constitution',
    short: 'Seamless business entity conversion and MOA/AOA modifications.',
    icon: 'RefreshCcw',
    highlights: ['Partnership to LLP', 'Private to Public', 'Constitutional Mods']
  },
  {
    slug: 'compliance-services',
    title: 'Compliance Services',
    short: 'Stay ahead of every ROC, tax and regulatory deadline.',
    icon: 'FileCheck2',
    highlights: ['ROC Annual Returns', 'TDS & GST Filings', 'Secretarial Compliance']
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    short: 'Ensure financial transparency and operational efficiency.',
    icon: 'ShieldCheck',
    highlights: ['Statutory Audit', 'Internal Audit', 'Management Audit']
  },
  {
    slug: 'tax-litigation',
    title: 'Tax Litigation',
    short: 'Expert representation for Direct & Indirect tax controversies.',
    icon: 'Gavel',
    highlights: ['ITAT / GSTAT Appeals', 'Investigation Defense', 'High Court Writs']
  },
  {
    slug: 'miscellaneous-services',
    title: 'Misc registrations',
    short: 'DSC, IEC, FSSAI, Society & Trust registrations made easy.',
    icon: 'LayoutGrid',
    highlights: ['Digital Signature', 'FSSAI License', 'Import-Export Code']
  },
  {
    slug: 'business-fund-management',
    title: 'Fund Management',
    short: 'Grow profits, reduce costs and arrange the right capital.',
    icon: 'TrendingUp',
    highlights: ['Project Reports', 'CMA Data', 'Loan Advisory']
  },
  {
    slug: 'direct-taxes',
    title: 'Direct Taxes',
    short: 'Income tax planning, filing and representation for individuals & corporates.',
    icon: 'Receipt',
    highlights: ['ITR Filing', 'Tax Planning', 'TDS Compliance']
  },
  {
    slug: 'indirect-taxes',
    title: 'Indirect Taxes (GST)',
    short: 'GST registration, returns, audits and advisory under one roof.',
    icon: 'Landmark',
    highlights: ['GST Returns', 'Input Credit Opt.', 'GST Audits']
  },
];

export default function Services() {
  return (
    <PublicLayout>
      <Head title="Services — Accounting, Tax, GST & Compliance | Tax Filing Hub">
        <meta name="description" content="Explore Tax Filing Hub's complete suite of services: accounting, GST, income tax, company registration, trademark, payroll and business advisory." />
      </Head>

      <PageHeader
        eyebrow="Our Services"
        title="A complete suite of services for every business need."
        description="From day-zero incorporation to long-term tax strategy, we cover the full spectrum so you don't have to coordinate between five different vendors."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-gold/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white mb-6 transition-smooth group-hover:bg-gold group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                <ul className="mt-6 space-y-2">
                  {s.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="text-[11px] font-bold uppercase tracking-widest text-primary/60 flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider group-hover:text-primary transition-colors">
                  Details
                  <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
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
