import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, Calendar, User, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Post {
    id: number;
    title: string;
    slug: string;
    status: 'draft' | 'published';
    published_at: string | null;
    created_at: string;
    author: {
        name: string;
    };
}

interface Props {
    posts: {
        data: Post[];
    };
}

export default function AdminBlogs({ posts }: Props) {
    const deletePost = (id: number) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            router.delete(`/admin/blogs/${id}`);
        }
    };

    return (
        <>
            <Head title="Manage Blogs — Admin" />

            <div className="p-6 md:p-8 space-y-8 min-h-full">
                {/* Header */}
                <div className="bg-primary text-white p-8 border border-border">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="gold-rule" />
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admin</span>
                            </div>
                            <h1 className="font-display text-3xl font-bold tracking-tight">Blog Management</h1>
                            <p className="text-white/70 mt-2">Write and manage articles, news and financial updates.</p>
                        </div>
                        <Button className="bg-gold text-black hover:bg-gold/90 font-bold" asChild>
                            <Link href="/admin/blogs/create">
                                <Plus className="h-5 w-5 mr-2" /> New Article
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Blogs List */}
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <div className="p-5 border-b border-border flex justify-between items-center">
                        <h2 className="font-display font-bold text-primary">All Posts</h2>
                        <span className="text-xs font-bold px-3 py-1 rounded bg-primary/10 text-primary">{posts.data.length} Total</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface text-xs font-bold uppercase tracking-widest text-accent border-b border-border">
                                    <th className="px-6 py-4">Title</th>
                                    <th className="px-6 py-4">Author</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                {posts.data.length > 0 ? posts.data.map(post => (
                                    <tr key={post.id} className="hover:bg-muted/30 transition-smooth group">
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-primary group-hover:text-accent transition-colors">{post.title}</span>
                                                <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                                    <Eye className="h-3 w-3" /> /blog/{post.slug}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2 text-sm">
                                                <div className="h-6 w-6 rounded-full bg-primary/5 flex items-center justify-center">
                                                    <User className="h-3 w-3 text-gold" />
                                                </div>
                                                {post.author.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                                                post.status === 'published' 
                                                ? 'bg-green-50 text-green-700 border-green-200' 
                                                : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                                            }`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {post.published_at 
                                                    ? new Date(post.published_at).toLocaleDateString() 
                                                    : new Date(post.created_at).toLocaleDateString()
                                                }
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-accent" asChild title="View on site">
                                                    <Link href={`/blog/${post.slug}`}>
                                                        <Eye className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-accent" asChild title="Edit">
                                                    <Link href={`/admin/blogs/${post.id}/edit`}>
                                                        <Edit2 className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 hover:text-red-500" onClick={() => deletePost(post.id)} title="Delete">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center text-muted-foreground">
                                            <FileText className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                            <p className="font-display font-semibold text-primary">No blog posts found.</p>
                                            <p className="text-sm mt-1">Start by creating your first article.</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
