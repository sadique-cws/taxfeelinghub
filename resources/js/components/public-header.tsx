import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact' },
];

const SITE = {
    phone: '+91 7979891922',
    phoneHref: 'tel:+917979891922',
};

import { AppLogo } from '@/components/app-logo';

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { url, props } = usePage();
  const auth = props.auth as any;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-smooth ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-background"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <AppLogo className="text-primary" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-medium transition-smooth rounded-md hover:bg-surface relative ${
                (l.href === '/' ? url === '/' : url.startsWith(l.href))
                  ? "text-primary font-bold bg-surface"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            href={auth.user ? '/dashboard' : '/login'}
            className="text-sm font-bold text-primary hover:text-gold transition-smooth uppercase tracking-widest"
          >
            {auth.user ? 'Dashboard' : 'Client Login'}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-secondary transition-smooth"
          >
            Get Started
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl text-primary hover:bg-surface transition-smooth border border-border"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 border-l-border bg-background">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border">
                <AppLogo className="text-primary" />
              </div>
              <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`flex items-center px-4 py-4 text-lg font-bold rounded-xl transition-smooth ${
                        (l.href === '/' ? url === '/' : url.startsWith(l.href))
                        ? "text-primary bg-surface border-l-4 border-gold"
                        : "text-foreground hover:bg-surface"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                    href={auth.user ? '/dashboard' : '/login'}
                    className="flex items-center px-4 py-4 text-lg font-bold rounded-xl text-foreground hover:bg-surface"
                >
                    {auth.user ? 'Dashboard' : 'Client Login'}
                </Link>
              </nav>
              <div className="p-6 border-t border-border bg-surface/50">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 px-4 py-4 text-lg font-bold text-primary hover:text-accent transition-smooth"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  {SITE.phone}
                </a>
                <Link
                  href="/contact"
                  className="mt-4 flex items-center justify-center rounded-xl bg-primary px-5 py-4 text-base font-bold text-white shadow-elegant hover:bg-secondary transition-smooth"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
