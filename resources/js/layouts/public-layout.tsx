import { ReactNode } from 'react';
import { PublicHeader } from '@/components/public-header';
import { PublicFooter } from '@/components/public-footer';

interface PublicLayoutProps {
    children: ReactNode;
}

import { FloatingContact } from '@/components/floating-contact';

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <PublicHeader />
            <main className="flex-grow">
                {children}
            </main>
            <FloatingContact />
            <PublicFooter />
        </div>
    );
}
