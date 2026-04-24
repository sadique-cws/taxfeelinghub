import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Calendar, User, ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from '@/components/ui/button';

const POSTS = [
  { id: 1, title: "Understanding the new e-Way Bill rules for Bihar", excerpt: "A practical breakdown of the intra-state e-Way Bill system and what manufacturers and traders need to do today.", author: "Rajeev Ranjan", date: "Apr 2025", category: "GST", tag: "Compliance" },
  { id: 2, title: "ITR filing checklist for salaried individuals (FY 2024-25)", excerpt: "Documents, deadlines and common deductions you shouldn't miss while filing your income tax return this year.", author: "TaxFilingHub Team", date: "Mar 2025", category: "Income Tax", tag: "Personal Finance" },
  { id: 3, title: "Private Limited vs LLP: which entity should your startup choose?", excerpt: "Cost, compliance and fundraising — a side-by-side comparison to help you pick the right structure from day one.", author: "Rajeev Ranjan", date: "Feb 2025", category: "Registration", tag: "Startups" },
  { id: 4, title: "GST input tax credit: the rules every business owner should know", excerpt: "How ITC works, the conditions for claiming it, and the most common mistakes that lead to notices.", author: "TaxFilingHub Team", date: "Feb 2025", category: "GST", tag: "Compliance" },
  { id: 5, title: "MSME registration in 2025: benefits beyond the certificate", excerpt: "Loan subsidies, tax breaks and government tenders — why MSME registration is still one of the best free upgrades.", author: "Rajeev Ranjan", date: "Jan 2025", category: "MSME", tag: "Growth" },
  { id: 6, title: "ROC annual filing: a stress-free guide for Pvt Ltd companies", excerpt: "AOC-4, MGT-7, board meetings — a calendar-based walkthrough of every annual ROC obligation.", author: "TaxFilingHub Team", date: "Jan 2025", category: "Compliance", tag: "Corporate" },
];

export default function Blog() {
  return (
    <PublicLayout>
      <Head title="Blog — Tax, GST & Compliance Insights | Tax Filing Hub">
        <meta name="description" content="Practical articles on income tax, GST, ROC compliance, business setup and finance — written by Tax Filing Hub's advisory team." />
      </Head>

      <PageHeader
        eyebrow="Insights"
        title="Practical knowledge for growing businesses."
        description="Tax updates, compliance walkthroughs and finance strategies — written in plain English by our advisory team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="container-page py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured */}
          <article className="lg:row-span-2 group rounded-3xl border border-border bg-card overflow-hidden hover-lift flex flex-col shadow-card animate-fade-up">
            <div className="aspect-[4/3] bg-hero-gradient relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at:30%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute bottom-8 left-8">
                <span className="inline-block rounded-full bg-gold text-black px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-soft">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-10 flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                <span>{POSTS[0].category}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-border" />
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {POSTS[0].date}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-smooth leading-tight">
                {POSTS[0].title}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg flex-1">{POSTS[0].excerpt}</p>
              <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                <span className="text-sm font-bold text-primary flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <User className="h-5 w-5 text-gold" />
                  </div>
                  {POSTS[0].author}
                </span>
                <span className="text-sm font-bold text-accent uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-primary transition-colors">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>

          {/* Side cards */}
          {POSTS.slice(1, 3).map((p, i) => (
            <BlogCard key={p.id} post={p} index={i + 1} />
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {POSTS.slice(3).map((p, i) => (
            <BlogCard key={p.id} post={p} compact index={i + 3} />
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-up">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-xl border border-border bg-card px-8 py-4 font-bold text-primary hover:bg-surface transition-smooth shadow-soft"
          >
            Subscribe for monthly updates <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Ready to simplify your <span className="text-gold italic">finances?</span></h2>
                <p className="mt-8 text-xl text-white/70 leading-relaxed">
                    Speak to one of our advisors about taxes, compliance or company setup. We respond within one business day.
                </p>
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button size="lg" variant="secondary" className="rounded-xl px-10 h-16 text-lg font-bold w-full sm:w-auto shadow-elegant" asChild>
                        <Link href="/contact">Request a Call Back</Link>
                    </Button>
                    <a href="tel:+917488447789" className="flex items-center gap-4 text-2xl font-bold text-gold hover:text-white transition-smooth group">
                        <div className="h-12 w-12 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-white transition-smooth">
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

function BlogCard({ post, compact = false, index = 0 }: { post: typeof POSTS[number]; compact?: boolean; index?: number }) {
  return (
    <article 
        className="group rounded-3xl border border-border bg-card p-8 md:p-10 hover-lift shadow-card flex flex-col animate-fade-up"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-6">
        <span>{post.category}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span>{post.date}</span>
      </div>
      <h3 className={`font-display font-bold text-primary group-hover:text-accent transition-smooth leading-tight ${compact ? "text-xl" : "text-2xl"}`}>
        {post.title}
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
      <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
        <span className="text-sm font-bold text-primary flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center">
            <User className="h-4 w-4 text-gold" />
          </div>
          {post.author}
        </span>
        <span className="text-sm font-bold text-accent uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-primary transition-colors">
          Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
