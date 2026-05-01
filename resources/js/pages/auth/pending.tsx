import { Head, Link } from '@inertiajs/react';
import { Clock, LogOut, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AppLogo } from '@/components/app-logo';

export default function Pending() {
    return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-6 relative overflow-hidden">
            <Head title="Account Review — Tax Filing Hub" />
            
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />

            <div className="w-full max-w-[580px] space-y-10 relative z-10">
                {/* Branding */}
                <div className="flex justify-center animate-fade-down">
                    <Link href="/">
                        <AppLogo className="text-primary scale-125" />
                    </Link>
                </div>

                {/* Main Card */}
                <div className="bg-white border border-border rounded-3xl overflow-hidden flex flex-col shadow-elegant animate-fade-up">
                    <div className="bg-primary p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] [background-size:20px_20px]" />
                        
                        <div className="relative z-10">
                            <div className="h-20 w-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 text-gold mx-auto backdrop-blur-sm">
                                <Clock className="h-10 w-10 animate-pulse" />
                            </div>
                            <h1 className="font-display text-4xl font-bold tracking-tight mb-3">Verification in Progress</h1>
                            <p className="text-white/60 text-base max-w-sm mx-auto font-medium">We're reviewing your application to ensure the highest security for your financial data.</p>
                        </div>
                    </div>

                    <div className="p-12">
                        <div className="space-y-10">
                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent text-center">Your Onboarding Status</h3>
                                
                                <div className="space-y-6">
                                    <StatusItem 
                                        number="01" 
                                        title="Identity Verification" 
                                        desc="Our compliance team is cross-checking your provided information." 
                                        status="active"
                                    />
                                    <StatusItem 
                                        number="02" 
                                        title="Secure Portal Provisioning" 
                                        desc="Setting up your private environment for secure document handling." 
                                        status="pending"
                                    />
                                    <StatusItem 
                                        number="03" 
                                        title="Final Activation" 
                                        desc="You'll receive a confirmation email once your account is live." 
                                        status="pending"
                                    />
                                </div>
                            </div>

                            <div className="bg-surface/50 border border-border rounded-2xl p-6 text-center italic text-sm text-muted-foreground leading-relaxed">
                                "Estimated review time: 12-24 hours. Thank you for your patience."
                            </div>

                            <div className="pt-6 flex flex-col items-center gap-6">
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-smooth shadow-soft"
                                >
                                    <LogOut className="h-4 w-4" /> Sign Out from Review
                                </Link>
                                
                                <Link 
                                    href="/" 
                                    className="text-xs font-bold text-accent hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    Return to Homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 animate-fade-up animate-delay-300">
                    <div className="flex items-center justify-center gap-3 text-muted-foreground/60 text-[10px] font-bold uppercase tracking-[0.25em]">
                        <ShieldCheck className="h-4 w-4 text-gold" />
                        256-bit SSL Secure Encryption
                    </div>
                    <p className="text-[10px] text-muted-foreground/40 text-center max-w-xs leading-relaxed">
                        Tax Filing Hub uses enterprise-grade security to protect all client interactions and sensitive documents.
                    </p>
                </div>
            </div>
        </div>
    );
}

function StatusItem({ number, title, desc, status }: { number: string, title: string, desc: string, status: 'active' | 'pending' | 'completed' }) {
    return (
        <div className={`flex items-start gap-5 transition-all duration-500 ${status === 'pending' ? 'opacity-40 grayscale' : 'opacity-100'}`}>
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border transition-colors ${
                status === 'active' ? 'bg-gold border-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' : 'bg-surface border-border text-muted-foreground'
            }`}>
                {number}
            </div>
            <div className="space-y-1">
                <p className="text-sm font-bold text-primary flex items-center gap-2">
                    {title}
                    {status === 'active' && <span className="h-1.5 w-1.5 rounded-full bg-gold animate-ping" />}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

Pending.layout = (page: any) => page;
