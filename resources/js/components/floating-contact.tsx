import { Phone, MessageSquare } from 'lucide-react';

export function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4 sm:hidden hide-on-drawer transition-smooth">
            <a
                href="https://wa.me/917979891922"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-elegant animate-bounce-subtle"
                aria-label="WhatsApp Us"
            >
                <MessageSquare className="h-6 w-6" />
            </a>
            <a
                href="tel:+917979891922"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-elegant group"
                aria-label="Call Now"
            >
                <Phone className="h-6 w-6 transition-transform group-active:scale-90" />
            </a>
        </div>
    );
}
