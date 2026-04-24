import { Head, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { AppLogo } from '@/components/app-logo';
import { KeyRound, Mail, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/forgot-password');
    };

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-6">
            <Head title="Recover Password — Tax Filing Hub" />
            
            <div className="w-full max-w-[480px] space-y-8">
                {/* Branding */}
                <div className="flex justify-center">
                    <AppLogo className="text-primary scale-110" />
                </div>

                {/* Main Card */}
                <div className="bg-white border border-border rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-primary p-8 text-white">
                        <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-gold">
                            <KeyRound className="h-6 w-6" />
                        </div>
                        <h1 className="font-display text-2xl font-bold tracking-tight">Recover Password</h1>
                        <p className="text-white/60 text-sm mt-1">We'll help you get back into your account</p>
                    </div>

                    <div className="p-8">
                        {status ? (
                            <div className="text-center space-y-6 py-4">
                                <div className="h-16 w-16 rounded bg-green-50 border border-green-100 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-display text-xl font-bold text-primary">Check your inbox</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{status}</p>
                                </div>
                                <Button variant="outline" className="w-full h-12 border-border text-primary hover:bg-surface font-bold" asChild>
                                    <a href={login()}>Return to Login</a>
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={submit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Registered Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                                        <Input 
                                            id="email" 
                                            type="email" 
                                            name="email" 
                                            required 
                                            autoFocus 
                                            value={data.email} 
                                            onChange={e => setData('email', e.target.value)}
                                            className="rounded-xl h-12 border-border bg-surface/50 pl-11 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                            placeholder="you@example.com" 
                                        />
                                    </div>
                                    <InputError message={errors.email} />
                                </div>

                                <Button type="submit" disabled={processing}
                                    className="w-full rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-bold h-12 transition-all group">
                                    {processing ? <Spinner /> : <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />}
                                    Send Reset Link
                                </Button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="text-center">
                    <TextLink href={login()} className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
                        <ArrowLeft className="h-3.5 w-3.5" /> Back to Log in
                    </TextLink>
                </div>
            </div>
        </div>
    );
}

ForgotPassword.layout = (page: any) => page;
