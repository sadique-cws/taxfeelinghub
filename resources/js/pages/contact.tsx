import { Head, Link, useForm } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";

const SITE = {
    name: 'Tax Filing Hub',
    email: 'Taxfillinghub@gmail.com',
    phone: '7488447789, 8935949475, 9155982424',
    phoneHref: 'tel:+917488447789',
    address: {
        line1: 'Rishika Mansion, 1st Floor',
        line2: 'Near Awantika Hotel, Bhatta Bazar',
        city: 'Purnia',
        pin: '854301',
        state: 'Bihar'
    }
};

export default function Contact() {
  const { data, setData, post, processing, wasSuccessful, errors } = useForm({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      preserveScroll: true,
    });
  };

  return (
    <PublicLayout>
      <Head title="Contact Tax Filing Hub — Get Expert Tax & Financial Advice">
        <meta name="description" content="Talk to Tax Filing Hub. Reach our office in Purnia, Bihar or send us a message — we respond within one business day." />
      </Head>

      <PageHeader
        eyebrow="Contact"
        title="Let's talk business."
        description="Submit your details and one of our financial advisors will be in touch shortly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Main Form - Now on the left and more prominent */}
          <div className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 md:p-12 animate-fade-up relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">Request a Call Back</h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Expert advice is just a message away.
            </p>

            {wasSuccessful ? (
              <div className="mt-10 rounded-xl border border-gold/40 bg-gold/5 p-10 text-center animate-fade-up">
                <CheckCircle2 className="h-16 w-16 text-gold mx-auto" />
                <h3 className="mt-6 font-display text-2xl font-bold text-primary">Message sent!</h3>
                <p className="mt-3 text-muted-foreground text-lg">Thank you for reaching out. We'll contact you within one business day.</p>
              </div>
            ) : (
              <form className="mt-10 grid gap-6" onSubmit={submit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full name" name="name" required value={data.name} onChange={e => setData('name', e.target.value)} error={errors.name} />
                  <Field label="Phone" name="phone" type="tel" required value={data.phone} onChange={e => setData('phone', e.target.value)} error={errors.phone} />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email Address" name="email" type="email" required value={data.email} onChange={e => setData('email', e.target.value)} error={errors.email} />
                  <Field label="Subject" name="subject" value={data.subject} onChange={e => setData('subject', e.target.value)} error={errors.subject} placeholder="e.g. GST Filing" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-primary mb-3 uppercase tracking-widest">
                    Your Requirements<span className="text-gold ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={data.message}
                    onChange={e => setData('message', e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-gold transition-all"
                    placeholder="Tell us briefly about your business needs..."
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-10 py-5 font-bold text-white hover:bg-secondary transition-all group disabled:opacity-50 text-lg shadow-lg hover:shadow-primary/20"
                >
                  {processing ? "Sending..." : "Submit Inquiry"} <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Quick Contact & Info - On the right */}
          <div className="lg:col-span-5 space-y-8 animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="grid gap-6">
              <ContactLink 
                icon={Phone} 
                title="Speak with an Advisor" 
                detail={SITE.phone} 
                sub="Mon–Sat, 10:00–19:00 IST"
                href={SITE.phoneHref}
              />
              <ContactLink 
                icon={Mail} 
                title="General Inquiries" 
                detail={SITE.email} 
                sub="Average response: 2 hours"
                href={`mailto:${SITE.email}`}
              />
              <ContactLink 
                icon={MapPin} 
                title="Office Location" 
                detail={`${SITE.address.city}, ${SITE.address.state}`} 
                sub={`${SITE.address.line1}, ${SITE.address.line2}`}
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64 shadow-sm group">
              <iframe
                title="Tax Filing Hub office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pin}`)}&output=embed`}
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </div>

            <div className="rounded-2xl bg-surface border border-border p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">Why Work With Us</h3>
              <ul className="space-y-4">
                {[
                  "Direct access to senior tax advisors",
                  "Transparent pricing, no hidden fees",
                  "Response within one business day",
                  "Expertise in Bihar local compliances"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-primary font-medium">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function ContactLink({ icon: Icon, title, detail, sub, href }: any) {
  const Card = (
    <div className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:border-gold/50 transition-all group">
      <div className="h-12 w-12 rounded-xl bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0 shadow-sm">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{title}</p>
        <p className="text-lg font-bold text-primary leading-tight">{detail}</p>
        <p className="text-xs text-muted-foreground mt-1 font-medium">{sub}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{Card}</a> : Card;
}

function InfoCard({
  icon: Icon, title, lines, actionHref,
}: {
  icon: React.ElementType; title: string; lines: string[]; actionHref?: string;
}) {
  const Content = (
    <div className="rounded-xl border border-border bg-card p-6 h-full transition-all hover:border-gold/50 group">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white mb-6 group-hover:bg-gold group-hover:text-black transition-smooth">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-display font-bold text-xl text-primary">{title}</p>
      <div className="mt-3 text-sm text-muted-foreground space-y-1.5 leading-relaxed">
        {lines.map((l, i) => <p key={i}>{l}</p>)}
      </div>
    </div>
  );
  return actionHref ? <a href={actionHref} className="block">{Content}</a> : Content;
}

function Field({ 
    label, name, type = "text", required, value, onChange, error 
}: { 
    label: string; name: string; type?: string; required?: boolean; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold text-primary mb-2 font-display uppercase tracking-widest text-[10px]">
        {label}{required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
      />
      {error && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{error}</p>}
    </div>
  );
}
