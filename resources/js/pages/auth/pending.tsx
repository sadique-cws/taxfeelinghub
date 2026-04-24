import { Head, Link } from '@inertiajs/react';
import { Clock, LogOut, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AppLogo } from '@/components/app-logo';

export default function Pending() {
    return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-6">
            <Head title="Access Pending — Tax Filing Hub" />
            
            <div className="w-full max-w-[520px] space-y-8">
                {/* Branding */}
                <div className="flex justify-center">
                    <AppLogo className="text-primary scale-110" />
                </div>

                {/* Main Card */}
                <div className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col">
                    <div className="bg-primary p-10 text-white text-center">
                        <div className="h-16 w-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-gold mx-auto">
                            <Clock className="h-8 w-8" />
                        </div>
                        <h1 className="font-display text-3xl font-bold tracking-tight">Account Under Review</h1>
                        <p className="text-white/60 text-sm mt-2">We're verifying your details for secure access</p>
                    </div>

                    <div className="p-10">
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed text-center">
                                Your registration has been received. Our team is currently reviewing your profile to ensure compliance and security. You'll be notified via email once your account is active.
                            </p>

                            <div className="bg-surface border border-border rounded-2xl p-6 space-y-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent text-center mb-4 border-b border-border pb-4">Onboarding Process</p>
                                
                                <div className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                                    <div>
                                        <p className="text-sm font-bold text-primary">Identity Verification</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Admin cross-checks provided information</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                                    <div>
                                        <p className="text-sm font-bold text-primary">Portal Activation</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Secure environment is provisioned for you</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                                    <div>
                                        <p className="text-sm font-bold text-primary">Success Notification</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">You'll receive a welcome email with instructions</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col items-center">
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors"
                                >
                                    <LogOut className="h-4 w-4" /> Sign Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-muted-foreground/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <ShieldCheck className="h-4 w-4" />
                    Government Standard Data Protection
                </div>
            </div>
        </div>
    );
}

Pending.layout = (page: any) => page;
