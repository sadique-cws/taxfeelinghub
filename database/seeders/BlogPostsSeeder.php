<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class BlogPostsSeeder extends Seeder
{
    public function run(): void
    {
        // Clear existing posts first to avoid duplicates
        DB::table('posts')->delete();

        $posts = [
            [
                'title' => 'Essential GST Compliance Checklist for 2024',
                'excerpt' => 'Stay ahead of deadlines and avoid penalties with our comprehensive GST compliance guide.',
                'content' => '<h2>Understanding GST Compliance</h2><p>GST compliance is not just about filing returns; it is about maintaining accurate records and ensuring that every transaction is accounted for correctly. In 2024, the department has become more vigilant with automated notices.</p><h3>Key Deadlines to Remember</h3><ul><li>GSTR-1: 11th of every month</li><li>GSTR-3B: 20th of every month</li><li>Annual Return (GSTR-9): 31st December</li></ul><p>Make sure you reconcile your GSTR-2B with your purchase register every month to maximize your Input Tax Credit (ITC).</p>',
                'featured_image' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Top 5 Tax Saving Investment Options under Section 80C',
                'excerpt' => 'Reduce your tax liability by up to ₹1.5 Lakh with these popular investment schemes.',
                'content' => '<h2>Saving Tax with Section 80C</h2><p>Section 80C remains the most popular way for individuals to reduce their taxable income. Here are the top 5 options:</p><ol><li><strong>Public Provident Fund (PPF):</strong> Risk-free and tax-free returns.</li><li><strong>ELSS Funds:</strong> Equity exposure with the shortest lock-in period of 3 years.</li><li><strong>National Savings Certificate (NSC):</strong> Fixed income backed by the government.</li><li><strong>Life Insurance Premiums:</strong> Protect your family while saving tax.</li><li><strong>SSY (Sukanya Samriddhi Yojana):</strong> Excellent for parents of a girl child.</li></ol>',
                'featured_image' => 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Why Every Startup Should Consider Private Limited Incorporation',
                'excerpt' => 'From limited liability to easier fundraising, discover why Private Limited is the gold standard.',
                'content' => '<h2>The Power of Incorporation</h2><p>Incorporating as a Private Limited company gives your startup a separate legal identity. This is crucial for credibility and scalability.</p><h3>Major Benefits</h3><ul><li><strong>Limited Liability:</strong> Protect your personal assets from business debts.</li><li><strong>Fundraising:</strong> VCs and Angel investors prefer Private Limited structures.</li><li><strong>Perpetual Succession:</strong> The company continues even if the owners change.</li></ul><p>While compliance is higher compared to a partnership, the long-term benefits far outweigh the costs.</p>',
                'featured_image' => 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'A Guide to MSME Registration (Udyam) and its Benefits',
                'excerpt' => 'Unlocking government subsidies, easier loans, and protection against delayed payments.',
                'content' => '<h2>What is Udyam Registration?</h2><p>Udyam Registration is the new process for registering MSMEs in India. It is completely digital and paperless.</p><h3>Why Register?</h3><ol><li><strong>Collateral Free Loans:</strong> Easier access to credit from banks.</li><li><strong>Protection against Delayed Payments:</strong> Buyers must pay within 45 days.</li><li><strong>Subsidy on Patent Registration:</strong> 50% subsidy on government fees.</li><li><strong>Electricity Bill Concession:</strong> Available in many states for registered units.</li></ol>',
                'featured_image' => 'https://images.unsplash.com/photo-1454165833767-027ee6a7c38e?auto=format&fit=crop&w=1200&q=80',
                'status' => 'published',
                'published_at' => now(),
            ],
            [
                'title' => 'Avoiding Common Mistakes in Income Tax Return (ITR) Filing',
                'excerpt' => 'Don\'t let a small error lead to a big tax notice. Learn how to file correctly.',
                'content' => '<h2>Common ITR Filing Errors</h2><p>Filing your ITR can be stressful, but avoiding these common pitfalls will make it smoother:</p><ul><li><strong>Not Reconciling with Form 26AS:</strong> Always check your TDS entries.</li><li><strong>Choosing the Wrong ITR Form:</strong> ITR-1 vs ITR-4 depends on your income sources.</li><li><strong>Forgetting to Verify:</strong> Your return is not valid until you e-verify it.</li><li><strong>Ignoring Exempt Income:</strong> Reporting agriculture income or PPF interest is mandatory even if tax-free.</li></ul>',
                'featured_image' => 'https://images.unsplash.com/photo-1586282391129-59a998fd03c0?auto=format&fit=crop&w=1200&q=80',
                'status' => 'published',
                'published_at' => now(),
            ],
        ];

        foreach ($posts as $post) {
            Post::create(array_merge($post, [
                'slug' => Str::slug($post['title']),
                'author_id' => 1,
            ]));
        }
    }
}
