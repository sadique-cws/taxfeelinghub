import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';

export default function NotFound() {
    return (
        <PublicLayout>
            <Head title="404 - Page Not Found" />
            
            <main className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-24">
                <div className="max-w-md text-center animate-fade-up">
                    <div className="gold-rule mx-auto mb-6" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Error 404</p>
                    <h1 className="mt-6 font-display text-5xl md:text-6xl font-bold text-primary tracking-tight">
                        Page not found
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        The page you're looking for doesn't exist or has been moved to a new location.
                    </p>
                    <div className="mt-10">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-elegant hover:bg-secondary transition-smooth group"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        </PublicLayout>
    );
}
