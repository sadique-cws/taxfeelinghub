import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { ArrowRight, Briefcase, Coffee, GraduationCap, HeartHandshake, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const PERKS = [
  { icon: GraduationCap, title: "Constant Learning", desc: "Sponsored certifications, in-house workshops and exposure across industries." },
  { icon: HeartHandshake, title: "Collaborative Culture", desc: "Healthy, friendly competition and a team that actually shares knowledge." },
  { icon: Briefcase, title: "Meaningful Work", desc: "Real ownership on real engagements — not endless data entry." },
  { icon: Coffee, title: "Work-Life Balance", desc: "Reasonable hours, flexible Saturdays and respect for your personal time." },
];

const OPENINGS = [
  { title: "Senior Tax Associate", type: "Full-time", location: "Purnia, Bihar", desc: "Lead direct & indirect tax engagements for SME and corporate clients. 3+ years of experience required." },
  { title: "Audit & Assurance Executive", type: "Full-time", location: "Purnia, Bihar", desc: "Plan and execute statutory and internal audits. CA Inter / Final candidates welcome." },
  { title: "Company Secretary (CS)", type: "Full-time", location: "Purnia, Bihar / Remote", desc: "Handle ROC compliance, board meetings and corporate secretarial work for our growing client base." },
  { title: "Articled Trainee (CA)", type: "Internship", location: "Purnia, Bihar", desc: "3-year articleship across audit, tax and advisory verticals. Mentorship guaranteed." },
];

export default function Career() {
  return (
    <PublicLayout>
      <Head title="Careers at Tax Filing Hub — Join a Young Team of Professionals">
        <meta name="description" content="Build your career at Tax Filing Hub. Constant learning, healthy collaboration and meaningful work for accountants, lawyers and consultants." />
      </Head>

      <PageHeader
        eyebrow="Careers"
        title="Build your career with a team that learns together."
        description="At Tax Filing Hub you'll constantly be learning, your ideas will be welcomed, and you'll work in a healthy, competitive atmosphere of collaboration and teamwork."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />

      {/* PERKS */}
      <section className="container-page py-20">
        <div className="max-w-2xl mb-14 animate-fade-up">
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
            Why join us
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            We're not the biggest firm — but we're one of the best places to grow if you care about craft and clients in equal measure.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-8 shadow-card hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white mb-6">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPENINGS */}
      <section className="bg-surface border-y border-border">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-2xl mb-16 animate-fade-up">
            <div className="gold-rule mb-5" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary tracking-tight">
              Open positions
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Don't see your role? Send us your CV anyway — we're always looking for great people.
            </p>
          </div>

          <div className="space-y-6">
            {OPENINGS.map((job, i) => (
              <div
                key={job.title}
                className="group flex flex-col md:flex-row md:items-center gap-8 rounded-2xl border border-border bg-background p-8 md:p-10 hover-lift shadow-card animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="font-display text-2xl font-bold text-primary">{job.title}</h3>
                    <span className="inline-block rounded-full bg-gold/10 text-gold-foreground border border-gold/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{job.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary/60 uppercase tracking-widest">
                    <MapPin className="h-4 w-4 text-gold" /> {job.location}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white hover:bg-secondary transition-smooth shadow-elegant"
                >
                  Apply Now <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="container-page py-24 md:py-32">
        <div className="rounded-3xl bg-hero-gradient text-white p-12 md:p-20 text-center shadow-elegant relative overflow-hidden animate-fade-up">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="relative z-10">
            <Send className="h-14 w-14 text-gold mx-auto mb-8" />
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Send us your CV
            </h2>
            <p className="mt-6 text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
              Email your resume and a short note about yourself to our team. We read every application.
            </p>
            <div className="mt-12">
              <a
                href="mailto:taxfilinghub@gmail.com?subject=Career Application"
                className="inline-flex items-center gap-3 rounded-xl bg-gold px-10 py-5 text-lg font-bold text-black hover:opacity-90 transition-smooth shadow-elegant group"
              >
                taxfilinghub@gmail.com <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
