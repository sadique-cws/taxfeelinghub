<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stories = [
            [
                'client_name' => 'Amit Sharma',
                'business_name' => 'Sharma Logistics Pvt Ltd',
                'content' => 'Tax Filing Hub transformed how we handle our GST compliance. Their team is professional and always ahead of deadlines. We can now focus on growing our fleet without worrying about tax notices.',
                'rating' => 5,
                'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'client_name' => 'Priya Kumari',
                'business_name' => 'Kumari Textiles & Crafts',
                'content' => 'Starting my small business in Patna was daunting, but the advisors here made the MSME registration and Trademark filing seamless. They are truly the best financial partners for startups in Bihar.',
                'rating' => 5,
                'avatar' => 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'client_name' => 'Dr. Rajesh Singh',
                'business_name' => 'City Care Multispeciality Hospital',
                'content' => 'Their expertise in hospital accounting and audit has been invaluable. Tax Filing Hub provides a level of detail and precision that we haven\'t found anywhere else.',
                'rating' => 5,
                'avatar' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',
                'is_featured' => true,
                'status' => 'published',
            ],
            [
                'client_name' => 'Suresh Mehra',
                'business_name' => 'Mehra Infra Projects',
                'content' => 'We\'ve been with Tax Filing Hub for 3 years now. Their assistance during our Income Tax scrutiny was remarkable. Professional, ethical, and highly knowledgeable.',
                'rating' => 4,
                'avatar' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
                'is_featured' => false,
                'status' => 'published',
            ],
        ];

        foreach ($stories as $story) {
            Testimonial::create($story);
        }
    }
}
