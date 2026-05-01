<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Post;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the posts for public view.
     */
    public function index()
    {
        $posts = Post::with('author')
            ->where('status', 'published')
            ->orderBy('published_at', 'desc')
            ->paginate(12);

        return Inertia::render('blog', [
            'posts' => $posts
        ]);
    }

    /**
     * Display the specified post.
     */
    public function show($slug)
    {
        $post = Post::with('author')
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('blog-detail', [
            'post' => $post
        ]);
    }

    /**
     * Display a listing of posts for admin management.
     */
    public function adminIndex()
    {
        $posts = Post::with('author')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return Inertia::render('admin/blogs/index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new post.
     */
    public function create()
    {
        return Inertia::render('admin/blogs/create');
    }

    /**
     * Store a newly created post in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:255',
            'status' => 'required|in:draft,published',
            'featured_image' => 'nullable|string',
        ]);

        $validated['slug'] = Str::slug($validated['title']);
        $validated['author_id'] = $request->user()->id;
        
        if ($validated['status'] === 'published') {
            $validated['published_at'] = now();
        }

        Post::create($validated);

        return redirect()->route('admin.blogs')->with('success', 'Post created successfully.');
    }

    /**
     * Show the form for editing the specified post.
     */
    public function edit(Post $post)
    {
        return Inertia::render('admin/blogs/edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified post in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'nullable|string|max:255',
            'status' => 'required|in:draft,published',
            'featured_image' => 'nullable|string',
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        if ($validated['status'] === 'published' && !$post->published_at) {
            $validated['published_at'] = now();
        }

        $post->update($validated);

        return redirect()->route('admin.blogs')->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified post from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('admin.blogs')->with('success', 'Post deleted successfully.');
    }
}
