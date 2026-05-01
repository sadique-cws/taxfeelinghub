import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Calendar, User, ArrowLeft, Phone, Mail } from "lucide-react";
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

interface BlogDetailProps {
    post: Post;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <PublicLayout>
      <Head title={`${post.title} | Blog — Tax Filing Hub`}>
        <meta name="description" content={post.excerpt} />
      </Head>

      <PageHeader
        eyebrow="Tax Insights"
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
            { label: "Home", href: "/" }, 
            { label: "Blog", href: "/blog" },
            { label: "Article" }
        ]}
      />

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
                <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors mb-10"
                >
                    <ArrowLeft className="h-4 w-4" /> Back to all articles
                </Link>

                <div className="flex items-center gap-6 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center">
                            <User className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-accent">Written by</p>
                            <p className="font-bold text-primary">{post.author.name}</p>
                        </div>
                    </div>
                    <div className="h-10 w-px bg-border hidden sm:block" />
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent">Published on</p>
                        <p className="font-bold text-primary flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gold" />
                            {new Date(post.published_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                </div>

                {post.featured_image && (
                    <div className="aspect-video rounded-2xl overflow-hidden mb-12 border border-border">
                        <img src={post.featured_image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-gold prose-strong:text-primary">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-20 pt-10 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-primary">Share this article:</span>
                        {/* Simple share links could go here */}
                    </div>
                </div>
            </div>

            <aside className="lg:col-span-4 space-y-12">
                <div className="rounded-2xl bg-surface border border-border p-8">
                    <h3 className="font-display text-xl font-bold text-primary mb-6">Need expert advice?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                        If you have questions about the topics covered in this article, our advisors are here to help.
                    </p>
                    <div className="space-y-4">
                        <Button className="w-full rounded-lg h-12 font-bold" asChild>
                            <Link href="/contact">Get a Consultation</Link>
                        </Button>
                        <a href="tel:+917979891922" className="flex items-center justify-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors py-2">
                            <Phone className="h-4 w-4" /> +91 7979891922
                        </a>
                    </div>
                </div>

                <div className="rounded-2xl border border-border p-8">
                    <h3 className="font-display text-xl font-bold text-primary mb-6">Tax Filing Hub</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                        The premier financial and tax advisory hub in Bihar, serving 500+ clients across India.
                    </p>
                    <Link href="/about" className="text-sm font-bold text-gold hover:underline">Learn more about us</Link>
                </div>
            </aside>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">Ready to simplify your <span className="text-gold italic">finances?</span></h2>
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
