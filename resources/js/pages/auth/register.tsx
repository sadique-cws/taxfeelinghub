import { Head, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { AppLogo } from '@/components/app-logo';
import { UserPlus, User, Mail, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-background flex flex-col lg:flex-row">
            <Head title="Create Account — Tax Filing Hub" />

            {/* Left Panel - Visuals */}
            <div className="hidden lg:flex lg:w-[40%] bg-primary relative overflow-hidden flex-col p-12">
                <div 
                    className="absolute inset-0 z-0 opacity-40 mix-blend-overlay scale-110"
                    style={{ 
                        backgroundImage: `url('/Users/comestro/.gemini/antigravity/brain/7be21d6f-0602-4210-90b8-88fb5d3d44f0/tax_portal_hero_split_1777036199310.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className="absolute inset-0 bg-primary/95 z-10" />

                <div className="relative z-20 flex flex-col h-full">
                    <div className="bg-white/10 border border-white/20 p-6 rounded-xl self-start">
                        <AppLogo className="text-white" />
                    </div>

                    <div className="mt-auto space-y-8 animate-fade-up">
                        <h2 className="font-display text-4xl xl:text-5xl font-bold text-white leading-tight">
                            Start your <span className="text-gold">compliance journey.</span>
                        </h2>
                        
                        <div className="space-y-4">
                            {[
                                "Fast account activation",
                                "Expert advisory access",
                                "End-to-end tax support",
                                "Corporate-grade security"
                            ].map((text) => (
                                <div key={text} className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                                    <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                            Trusted by 500+ Businesses
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-20 bg-white">
                <div className="w-full max-w-xl space-y-10">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-8">
                        <AppLogo className="text-primary" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-display text-3xl font-bold text-primary tracking-tight">Create Account</h1>
                        <p className="text-muted-foreground">Join India's most trusted tax advisory platform</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                                    <Input 
                                        id="name" 
                                        type="text" 
                                        name="name" 
                                        required 
                                        autoFocus 
                                        value={data.name} 
                                        onChange={e => setData('name', e.target.value)}
                                        className="rounded-xl h-12 border-border bg-surface/50 pl-11 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <InputError message={errors.name} />
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        required 
                                        value={data.email} 
                                        onChange={e => setData('email', e.target.value)}
                                        className="rounded-xl h-12 border-border bg-surface/50 pl-11 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="john@example.com" 
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Create Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40 z-10" />
                                    <PasswordInput 
                                        id="password" 
                                        name="password" 
                                        required 
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
                        </div>

                        <div className="pt-4">
                            <Button type="submit" disabled={processing}
                                className="w-full rounded-xl bg-gold hover:bg-[#C5A028] text-gold-foreground font-bold h-14 transition-all text-lg group">
                                {processing ? <Spinner /> : <UserPlus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />}
                                Register Account
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 pt-8 border-t border-border text-center">
                        <p className="text-sm text-muted-foreground">
                            Already registered? <TextLink href={login()} className="font-bold text-accent hover:text-primary transition-colors">Log in to your portal</TextLink>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
                        <ShieldCheck className="h-6 w-6" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">ISO 27001 Certified</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

Register.layout = (page: any) => page;
