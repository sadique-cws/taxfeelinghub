import { Head, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { AppLogo } from '@/components/app-logo';
import { ShieldCheck, Lock, Mail, RefreshCw } from 'lucide-react';

type Props = {
    token: string;
    email: string;
};

export default function ResetPassword({ token, email }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/reset-password', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-surface flex items-center justify-center p-6">
            <Head title="Set New Password — Tax Filing Hub" />
            
            <div className="w-full max-w-[480px] space-y-8">
                {/* Branding */}
                <div className="flex justify-center">
                    <AppLogo className="text-primary scale-110" />
                </div>

                {/* Main Card */}
                <div className="bg-white border border-border rounded-xl overflow-hidden flex flex-col">
                    <div className="bg-primary p-8 text-white">
                        <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-gold">
                            <RefreshCw className="h-6 w-6" />
                        </div>
                        <h1 className="font-display text-2xl font-bold tracking-tight">Set New Password</h1>
                        <p className="text-white/60 text-sm mt-1">Please create a strong password for your portal</p>
                    </div>

                    <div className="p-8">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="space-y-1.5 opacity-60">
                                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        value={data.email} 
                                        readOnly
                                        className="rounded-xl h-12 bg-surface border-border text-muted-foreground pl-11 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">New Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40 z-10" />
                                    <PasswordInput 
                                        id="password" 
                                        name="password" 
                                        required 
                                        autoFocus
                                        value={data.password} 
                                        onChange={e => setData('password', e.target.value)}
                                        className="rounded-xl h-12 border-border bg-surface/50 pl-11 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="••••••••" 
                                    />
                                </div>
                                <InputError message={errors.password} />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="password_confirmation" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Confirm Password</Label>
                                <div className="relative">
                                    <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40 z-10" />
                                    <PasswordInput 
                                        id="password_confirmation" 
                                        name="password_confirmation" 
                                        required 
                                        value={data.password_confirmation} 
                                        onChange={e => setData('password_confirmation', e.target.value)}
                                        className="rounded-xl h-12 border-border bg-surface/50 pl-11 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="••••••••" 
                                    />
                                </div>
                                <InputError message={errors.password_confirmation} />
                            </div>

                            <Button type="submit" disabled={processing}
                                className="w-full rounded-xl bg-gold hover:bg-[#C5A028] text-gold-foreground font-bold h-12 transition-all group">
                                {processing ? <Spinner /> : <ShieldCheck className="h-4 w-4 mr-2" />}
                                Reset and Sign In
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

ResetPassword.layout = (page: any) => page;
