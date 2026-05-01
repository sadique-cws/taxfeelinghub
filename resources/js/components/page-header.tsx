import { Link } from '@inertiajs/react';

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    eyebrow: string;
    title: string;
    description: string;
    breadcrumbs: Breadcrumb[];
}

export function PageHeader({ eyebrow, title, description, breadcrumbs }: PageHeaderProps) {
    return (
        <section className="bg-surface py-8 lg:py-12 border-b border-border">
            <div className="container-page">
                <nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-4">
                    {breadcrumbs.map((crumb, i) => (
                        <div key={i} className="flex items-center gap-2">
                            {crumb.href ? (
                                <Link href={crumb.href} className="hover:text-primary transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-primary font-bold">{crumb.label}</span>
                            )}
                            {i < breadcrumbs.length - 1 && (
                                <span className="text-muted-foreground/40">/</span>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="max-w-4xl">
                    <div className="gold-rule mb-5" />
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">{eyebrow}</p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary font-display leading-tight">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
}
