import { Head, Link, useForm } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";

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
        title="Let's talk about your business."
        description="Whether it's a quick question or a long-term engagement, our team is ready to help. We respond within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page py-20">
        {/* Info cards — top row, responsive grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          <InfoCard
            icon={MapPin}
            title="Visit us"
            lines={[
              `${SITE.address.line1},`,
              `${SITE.address.line2},`,
              `${SITE.address.city}-${SITE.address.pin} (${SITE.address.state})`,
            ]}
          />
          <InfoCard
            icon={Phone}
            title="Call us"
            lines={[SITE.phone, "Mon–Sat, 10:00–19:00 IST"]}
            actionHref={SITE.phoneHref}
          />
          <InfoCard
            icon={Mail}
            title="Email us"
            lines={[SITE.email, "We reply within one business day"]}
            actionHref={`mailto:${SITE.email}`}
          />
          <div className="rounded-xl bg-primary text-white p-6 h-full border border-white/10 animate-fade-up">
            <Clock className="h-5 w-5 text-gold mb-3" />
            <p className="font-display font-semibold text-lg">Office Hours</p>
            <ul className="mt-3 space-y-1.5 text-sm text-white/80">
              <li className="flex justify-between"><span>Mon – Fri</span><span>10:00 – 19:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>10:00 – 16:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-xl border border-border bg-card p-8 md:p-10 animate-fade-up">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">Request a call back</h2>
            <p className="mt-2 text-muted-foreground">
              Submit your details and one of our financial advisors will be in touch shortly.
            </p>

            {wasSuccessful ? (
              <div className="mt-8 rounded-xl border border-gold/40 bg-gold/10 p-8 text-center animate-fade-up">
                <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">Thank you for reaching out. Our team will contact you within one business day.</p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-5"
                onSubmit={submit}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required value={data.name} onChange={e => setData('name', e.target.value)} error={errors.name} />
                  <Field label="Email" name="email" type="email" required value={data.email} onChange={e => setData('email', e.target.value)} error={errors.email} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" name="phone" type="tel" required value={data.phone} onChange={e => setData('phone', e.target.value)} error={errors.phone} />
                  <Field label="Subject" name="subject" value={data.subject} onChange={e => setData('subject', e.target.value)} error={errors.subject} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-display uppercase tracking-widest text-[10px]">
                    How can we help?<span className="text-gold ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={data.message}
                    onChange={e => setData('message', e.target.value)}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
                    placeholder="Tell us briefly about your business and what you need help with…"
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 font-bold text-white hover:bg-secondary transition-smooth group disabled:opacity-50"
                >
                  {processing ? "Sending..." : "Send Message"} <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          {/* Side panel */}
          <aside className="lg:col-span-2 space-y-5 animate-fade-up">
            <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-72">
              <iframe
                title="Tax Filing Hub office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.pin}`)}&output=embed`}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-xl bg-primary text-white p-8 border border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-6">Why Tax Filing Hub</p>
              <ul className="space-y-4 text-base text-white/80">
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" /> Direct access to senior advisors</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" /> Transparent pricing, no hidden fees</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" /> Pan-India compliance coverage</li>
                <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" /> Response within one business day</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </PublicLayout>
  );
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
