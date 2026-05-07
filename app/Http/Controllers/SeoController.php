<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class SeoController extends Controller
{
    /**
     * Handle programmatic SEO landing pages for locations.
     */
    public function locationPage($city, $area = null)
    {
        $seoConfig = config('seo.cities');
        $cityKey = strtolower($city);
        
        if (!isset($seoConfig[$cityKey])) {
            abort(404);
        }

        $cityData = $seoConfig[$cityKey];
        $locationName = $area ? Str::title(str_replace('-', ' ', $area)) . ', ' . $cityData['name'] : $cityData['name'];
        
        return Inertia::render('location-landing', [
            'location' => [
                'name' => $locationName,
                'city' => $cityData['name'],
                'area' => $area ? Str::title(str_replace('-', ' ', $area)) : null,
                'description' => $cityData['description'],
            ],
            'services' => config('seo.services'),
        ]);
    }

    /**
     * Generate sitemap.xml.
     */
    public function sitemap()
    {
        $urls = [
            route('home'),
            route('about'),
            route('services'),
            route('blog'),
            route('career'),
            route('contact'),
            // Service pages
            url('/services/accounting-support'),
            url('/services/trademark-copyright'),
            url('/services/firm-company-registration'),
            url('/services/compliance-services'),
            url('/services/accounting-services'),
            url('/services/business-fund-management'),
            url('/services/direct-taxes'),
            url('/services/indirect-taxes'),
            url('/services/miscellaneous-services'),
            url('/services/tax-litigation'),
            url('/services/conversion-restructuring'),
            url('/services/audit-assurance'),
        ];

        // Add dynamic blog posts
        $posts = \App\Models\Post::where('status', 'published')->orderBy('published_at', 'desc')->get();
        foreach ($posts as $post) {
            $urls[] = route('blog.show', $post->slug);
        }

        // Add programmatic SEO pages
        if (config('seo.cities')) {
            foreach (config('seo.cities') as $cityKey => $cityData) {
                $urls[] = url("/best-tax-consultant-in-{$cityKey}");
                if (isset($cityData['areas'])) {
                    foreach ($cityData['areas'] as $area) {
                        $areaSlug = Str::slug($area);
                        $urls[] = url("/best-tax-consultant-in-{$cityKey}/{$areaSlug}");
                    }
                }
            }
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        foreach ($urls as $url) {
            $xml .= '<url>';
            $xml .= '<loc>' . htmlspecialchars($url) . '</loc>';
            $xml .= '<lastmod>' . date('Y-m-d') . '</lastmod>';
            $xml .= '<changefreq>weekly</changefreq>';
            $xml .= '<priority>0.8</priority>';
            $xml .= '</url>';
        }
        $xml .= '</urlset>';

        return response($xml)->header('Content-Type', 'application/xml');
    }
}
