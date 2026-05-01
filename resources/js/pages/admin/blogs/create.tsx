import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, FileText, Image as ImageIcon, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';

export default function CreateBlog() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        excerpt: '',
        content: '',
        status: 'draft',
        featured_image: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/blogs');
    };

    return (
        <>
            <Head title="Create New Article — Admin" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <Link 
                        href="/admin/blogs" 
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to list
                    </Link>
                </div>

                <div className="bg-primary text-white p-8 border border-border">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="gold-rule" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">New Content</span>
                    </div>
                    <h1 className="font-display text-3xl font-bold tracking-tight">Create Blog Article</h1>
                    <p className="text-white/70 mt-2">Draft and publish informative content for your audience.</p>
                </div>

                <form onSubmit={submit} className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-primary font-bold uppercase tracking-widest text-[10px]">Article Title</Label>
                                <Input
                                    id="title"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    placeholder="e.g. Understanding GST for Bihar Businesses"
                                    className="h-14 text-lg font-bold border-border focus:border-gold transition-all"
                                />
                                {errors.title && <p className="text-red-500 text-xs font-bold">{errors.title}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="excerpt" className="text-primary font-bold uppercase tracking-widest text-[10px]">Short Excerpt</Label>
                                <Input
                                    id="excerpt"
                                    value={data.excerpt}
                                    onChange={e => setData('excerpt', e.target.value)}
                                    placeholder="Brief summary for the blog listing page..."
                                    className="border-border focus:border-gold"
                                />
                                {errors.excerpt && <p className="text-red-500 text-xs font-bold">{errors.excerpt}</p>}
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="content" className="text-primary font-bold uppercase tracking-widest text-[10px]">Article Content (HTML supported)</Label>
                                    <div className="flex gap-2">
                                        <select 
                                            className="text-[10px] font-bold uppercase tracking-widest border border-border rounded px-2 py-1 bg-surface focus:outline-none focus:ring-1 focus:ring-gold"
                                            onChange={(e) => {
                                                const templates: Record<string, string> = {
                                                    'gst': '<h3>GST Benefits for Businesses</h3>\n<ul>\n<li>Reduced tax burden</li>\n<li>Easy compliance</li>\n<li>Input tax credit</li>\n</ul>',
                                                    'compliance': '<h3>Annual Compliance Checklist</h3>\n<ol>\n<li>Income Tax Return</li>\n<li>GST Annual Return</li>\n<li>ROC Filing</li>\n</ol>',
                                                    'intro': '<p>In this article, we explore the recent changes in the regulatory landscape and what they mean for small business owners in Bihar.</p>'
                                                };
                                                if (e.target.value) {
                                                    setData('content', data.content + templates[e.target.value]);
                                                    e.target.value = '';
                                                }
                                            }}
                                        >
                                            <option value="">Quick Templates</option>
                                            <option value="intro">Introduction Text</option>
                                            <option value="gst">GST Section</option>
                                            <option value="compliance">Compliance List</option>
                                        </select>
                                    </div>
                                </div>
                                
                                {/* Formatting Toolbar */}
                                <div className="flex flex-wrap gap-1 p-2 bg-surface border border-border rounded-t-lg">
                                    {[
                                        { label: 'B', tag: 'b', title: 'Bold' },
                                        { label: 'I', tag: 'i', title: 'Italic' },
                                        { label: 'H2', tag: 'h2', title: 'Heading 2' },
                                        { label: 'H3', tag: 'h3', title: 'Heading 3' },
                                        { label: 'P', tag: 'p', title: 'Paragraph' },
                                        { label: 'List', tag: 'li', title: 'List Item', wrap: 'ul' },
                                    ].map((btn) => (
                                        <button
                                            key={btn.label}
                                            type="button"
                                            onClick={() => {
                                                const el = document.getElementById('content') as HTMLTextAreaElement;
                                                const start = el.selectionStart;
                                                const end = el.selectionEnd;
                                                const text = el.value;
                                                const selected = text.substring(start, end);
                                                const replacement = btn.wrap 
                                                    ? `<${btn.wrap}>\n  <${btn.tag}>${selected || 'Text'}</${btn.tag}>\n</${btn.wrap}>`
                                                    : `<${btn.tag}>${selected || 'Text'}</${btn.tag}>`;
                                                setData('content', text.substring(0, start) + replacement + text.substring(end));
                                            }}
                                            className="px-3 py-1 text-xs font-bold border border-border rounded bg-white hover:bg-gold hover:text-white transition-colors"
                                            title={btn.title}
                                        >
                                            {btn.label}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => setData('content', data.content + '<br />\n')}
                                        className="px-3 py-1 text-xs font-bold border border-border rounded bg-white hover:bg-gold hover:text-white transition-colors"
                                    >
                                        Break
                                    </button>
                                </div>

                                <textarea
                                    id="content"
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    placeholder="Write your article content here..."
                                    className="w-full min-h-[500px] rounded-b-lg border border-t-0 border-border bg-transparent px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all font-mono"
                                />
                                {errors.content && <p className="text-red-500 text-xs font-bold">{errors.content}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-card border border-border rounded-xl p-8 space-y-6 sticky top-8">
                            <h3 className="font-display font-bold text-primary flex items-center gap-2">
                                <Send className="h-4 w-4 text-gold" /> Publishing
                            </h3>
                            
                            <div className="space-y-2">
                                <Label className="text-primary font-bold uppercase tracking-widest text-[10px]">Status</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setData('status', 'draft')}
                                        className={`py-2 text-xs font-bold uppercase tracking-widest rounded-lg border transition-all ${
                                            data.status === 'draft' 
                                            ? 'bg-primary text-white border-primary' 
                                            : 'bg-surface text-muted-foreground border-border hover:bg-muted'
                                        }`}
                                    >
                                        Draft
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setData('status', 'published')}
                                        className={`py-2 text-xs font-bold uppercase tracking-widest rounded-lg border transition-all ${
                                            data.status === 'published' 
                                            ? 'bg-green-600 text-white border-green-600' 
                                            : 'bg-surface text-muted-foreground border-border hover:bg-muted'
                                        }`}
                                    >
                                        Publish
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="featured_image" className="text-primary font-bold uppercase tracking-widest text-[10px]">Featured Image URL</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="featured_image"
                                        value={data.featured_image}
                                        onChange={e => setData('featured_image', e.target.value)}
                                        placeholder="https://..."
                                        className="border-border focus:border-gold"
                                    />
                                    <div className="h-10 w-10 bg-muted rounded border border-border flex items-center justify-center shrink-0">
                                        {data.featured_image ? <img src={data.featured_image} className="h-full w-full object-cover rounded" /> : <ImageIcon className="h-4 w-4 text-muted-foreground" />}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-border">
                                <Button 
                                    type="submit" 
                                    disabled={processing}
                                    className="w-full h-12 bg-gold text-black hover:bg-gold/90 font-bold"
                                >
                                    {processing ? 'Saving...' : <><Save className="h-4 w-4 mr-2" /> Save Article</>}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

CreateBlog.layout = (page: any) => (
    <AppLayout breadcrumbs={[
        { title: 'Blog Management', href: '/admin/blogs' },
        { title: 'New Article', href: '/admin/blogs/create' }
    ]}>
        {page}
    </AppLayout>
);
