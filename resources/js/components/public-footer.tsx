import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact' },
    { href: '/login', label: 'Client Login' },
];

const SERVICES = [
    { slug: 'accounting-support', title: 'Accounting Support' },
    { slug: 'trademark-copyright', title: 'Trademark & Copyright' },
    { slug: 'firm-company-registration', title: 'Company Registration' },
    { slug: 'compliance-services', title: 'Compliance Services' },
    { slug: 'accounting-services', title: 'Payroll & HR' },
    { slug: 'business-fund-management', title: 'Fund Management' },
];

const SITE = {
    name: 'Tax Filing Hub',
    email: 'taxfilinghub@gmail.com',
    phone: '+91 7979891922',
    phoneHref: 'tel:+917979891922',
    address: {
        line1: 'Rajeswari Niwas',
        line2: 'Beside PNB Bank Gate, Infront of Big Shop, Bhatta Bazar',
        city: 'Purnia',
        pin: '854301',
        state: 'Bihar'
    }
};

import { AppLogo } from '@/components/app-logo';

export function PublicFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <AppLogo className="mb-6 text-white" />
          <p className="text-sm text-primary-foreground/75 leading-relaxed">
            A young team of professionals offering complete financial, legal & advisory support for every stage of your business growth.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-primary-foreground/75 hover:text-gold transition-smooth"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Services</h4>
          <ul className="space-y-2">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-primary-foreground/75 hover:text-gold transition-smooth"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <span>
                {SITE.address.line1},<br />
                {SITE.address.line2}, {SITE.address.city}-{SITE.address.pin} ({SITE.address.state})
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-gold transition-smooth">{SITE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold transition-smooth break-all">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Areas Section (SEO) */}
      <div className="border-t border-primary-foreground/10 bg-primary/50">
        <div className="container-page py-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60 mb-6 text-center">Service Areas in Bihar</h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              'Purnia', 'Patna', 'Gaya', 'Muzaffarpur', 'Darbhanga', 'Bhagalpur', 'Begusarai', 
              'Katihar', 'Munger', 'Chhapra', 'Samastipur', 'Siwan', 'Motihari', 'Bettiah', 
              'Hajipur', 'Sasaram', 'Arrah', 'Buxar', 'Kishanganj', 'Araria', 'Forbesganj', 
              'Saharsa', 'Madhepura', 'Jehanabad', 'Aurangabad', 'Nawada', 'Jamui', 
              'Lakhisarai', 'Sheikhpura', 'Banka', 'Supaul', 'Khagaria', 'Sitamarhi', 
              'Sheohar', 'Madhubani', 'Gopalganj', 'Arwal', 'Bhabua'
            ].map((city) => (
              <Link 
                key={city} 
                href={`/best-tax-consultant-in-${city.toLowerCase()}`}
                className="text-[11px] text-primary-foreground/40 hover:text-gold transition-smooth"
              >
                Tax Consultant in {city}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-primary-foreground/5 pt-6">
            {['Bhatta Bazar', 'Line Bazar', 'Gulabbagh', 'Madhubani', 'Khuskibagh'].map((area) => (
              <Link 
                key={area} 
                href={`/best-tax-consultant-in-purnia/${area.toLowerCase().replace(' ', '-')}`}
                className="text-[10px] text-primary-foreground/30 hover:text-gold transition-smooth"
              >
                {area} Purnia
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Powered by <a href="https://comestro.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-semibold">Comestro.com</a> — Comestro Techlabs Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}
