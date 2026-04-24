import { cn } from '@/lib/utils';

interface AppLogoProps {
    className?: string;
    subtext?: string;
}

export function AppLogo({ className, subtext }: AppLogoProps) {
    return (
        <div className={cn("flex items-center gap-2.5 group", className)}>
            <div className="relative flex h-10 w-10 items-center justify-center shrink-0">
                {/* Shield / Icon Background */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute inset-0 h-full w-full text-primary transition-smooth group-hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2L4 5V11C4 16.19 7.41 21.05 12 22C16.59 21.05 20 16.19 20 11V5L12 2Z"
                        fill="currentColor"
                    />
                </svg>
                
                {/* Letter T */}
                <span className="relative z-10 font-display font-bold text-xl text-white leading-none">
                    T
                </span>

                {/* Accent Checkmark / Sparkle */}
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-gold rounded-full border-2 border-white shadow-soft flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5 text-black" stroke="currentColor" strokeWidth="4">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl tracking-tight">
                    Tax Filing<span className="text-gold"> Hub</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
                    {subtext || "Advisors & Consultants"}
                </span>
            </div>
        </div>
    );
}
