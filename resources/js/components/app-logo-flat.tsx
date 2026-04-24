import { cn } from '@/lib/utils';

interface AppLogoProps {
    className?: string;
}

export function AppLogo({ className }: AppLogoProps) {
    return (
        <div className={cn("flex items-center gap-2.5", className)}>
            <div className="relative flex h-10 w-10 items-center justify-center shrink-0 bg-slate-900">
                <span className="font-display font-bold text-xl text-white leading-none">
                    T
                </span>
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-gold border border-slate-900 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5 text-slate-900" stroke="currentColor" strokeWidth="4">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-tight text-slate-900 uppercase">
                    Tax Filing<span className="text-gold"> Hub</span>
                </span>
            </div>
        </div>
    );
}
