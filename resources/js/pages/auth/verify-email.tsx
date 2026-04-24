import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Mail, CheckCircle2, LogOut, Send } from 'lucide-react';
import { AppLogo } from '@/components/app-logo';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/email/verification-notification');
    };

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-6">
            <Head title="Verify Email — Tax Filing Hub" />
            
            <div className="w-full max-w-[480px] space-y-8">
                {/* Branding */}
                <div className="flex justify-center">
                    <AppLogo className="text-primary scale-110" />
                </div>

                {/* Main Card */}
                <div className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col">
                    <div className="bg-primary p-8 text-white text-center">
                        <div className="h-16 w-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-gold mx-auto">
                            <Mail className="h-8 w-8" />
                        </div>
                        <h1 className="font-display text-2xl font-bold tracking-tight">Verify Your Email</h1>
                        <p className="text-white/60 text-sm mt-1">Protect your account and stay compliant</p>
                    </div>

                    <div className="p-8 text-center">
                        <div className="space-y-6 mb-8">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Thanks for joining India's most trusted tax advisory platform. Before you begin, please confirm your email by clicking the link we just sent you.
                            </p>
                            
                            {status === 'verification-link-sent' && (
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-xs font-bold animate-fade-up">
                                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                                    A fresh link has been sent to your email.
                                </div>
                            )}
                        </div>

                        <form onSubmit={submit} className="space-y-4">
                            <Button type="submit" disabled={processing}
                                className="w-full rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-bold h-12 transition-all group">
                                {processing ? <Spinner /> : <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />}
                                Resend Verification Link
                            </Button>

                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="flex items-center justify-center gap-2 w-full text-muted-foreground hover:text-primary text-xs font-bold uppercase tracking-widest transition-colors py-4"
                            >
                                <LogOut className="h-4 w-4" /> Sign Out
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

VerifyEmail.layout = (page: any) => page;
