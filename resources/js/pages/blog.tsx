import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Calendar, User, ArrowRight, Phone } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from '@/components/ui/button';

interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image?: string;
    published_at: string;
    author: {
        name: string;
    };
}

interface BlogProps {
    posts: {
        data: Post[];
        links: any;
    };
}

export default function Blog({ posts }: BlogProps) {
  const allPosts = posts.data;

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
        {allPosts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-display font-bold text-primary">No blog posts found.</h2>
            <p className="mt-4 text-muted-foreground">Check back soon for more insights.</p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Featured */}
              {allPosts[0] && (
                <article className="lg:row-span-2 group rounded-xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:border-gold/50 animate-fade-up">
                  <div className="aspect-[4/3] bg-primary relative overflow-hidden">
                    {allPosts[0].featured_image ? (
                      <img src={allPosts[0].featured_image} alt={allPosts[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)] [background-size:24px_24px]" />
                    )}
                    <div className="absolute bottom-8 left-8">
                      <span className="inline-block rounded bg-gold text-black px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                        Latest
                      </span>
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                      <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(allPosts[0].published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                    <Link href={`/blog/${allPosts[0].slug}`}>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary group-hover:text-accent transition-smooth leading-tight">
                            {allPosts[0].title}
                        </h2>
                    </Link>
                    <p className="mt-6 text-muted-foreground leading-relaxed text-lg flex-1">{allPosts[0].excerpt}</p>
                    <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                      <span className="text-sm font-bold text-primary flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center">
                          <User className="h-5 w-5 text-gold" />
                        </div>
                        {allPosts[0].author.name}
                      </span>
                      <Link href={`/blog/${allPosts[0].slug}`} className="text-sm font-bold text-accent uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-primary transition-colors">
                        Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* Side cards */}
              {allPosts.slice(1, 3).map((p, i) => (
                <BlogCard key={p.id} post={p} index={i + 1} />
              ))}
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {allPosts.slice(3).map((p, i) => (
                <BlogCard key={p.id} post={p} compact index={i + 3} />
              ))}
            </div>
          </>
        )}

        <div className="mt-20 text-center animate-fade-up">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-8 py-4 font-bold text-primary hover:bg-surface transition-smooth"
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

function BlogCard({ post, compact = false, index = 0 }: { post: Post; compact?: boolean; index?: number }) {
  return (
    <article 
        className="group rounded-xl border border-border bg-card p-8 md:p-10 transition-all hover:border-gold/50 flex flex-col animate-fade-up"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-6">
        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
      </div>
      <Link href={`/blog/${post.slug}`}>
        <h3 className={`font-display font-bold text-primary group-hover:text-accent transition-smooth leading-tight ${compact ? "text-xl" : "text-2xl"}`}>
            {post.title}
        </h3>
      </Link>
      <p className="mt-4 text-muted-foreground leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
      <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
        <span className="text-sm font-bold text-primary flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center">
            <User className="h-4 w-4 text-gold" />
          </div>
          {post.author.name}
        </span>
        <Link href={`/blog/${post.slug}`} className="text-sm font-bold text-accent uppercase tracking-widest inline-flex items-center gap-2 group-hover:text-primary transition-colors">
          Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
