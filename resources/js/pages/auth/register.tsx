import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { AppLogo } from '@/components/app-logo';
import { UserPlus, User, Mail, Lock, ShieldCheck, CheckCircle2, Phone, ArrowLeft } from 'lucide-react';

import { useEffect } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    // Real-time validation
    useEffect(() => {
        // Name validation
        if (data.name.length > 0 && data.name.length < 3) {
            setError('name', 'Name must be at least 3 characters');
        } else {
            clearErrors('name');
        }
    }, [data.name]);

    useEffect(() => {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.email.length > 0 && !emailRegex.test(data.email)) {
            setError('email', 'Please enter a valid email address');
        } else {
            clearErrors('email');
        }
    }, [data.email]);

    useEffect(() => {
        // Phone validation
        const phoneRegex = /^[0-9+()-\s]*$/;
        if (data.phone.length > 0 && !phoneRegex.test(data.phone)) {
            setError('phone', 'Please enter a valid phone number');
        } else if (data.phone.length > 0 && data.phone.length < 10) {
            setError('phone', 'Phone number is too short');
        } else {
            clearErrors('phone');
        }
    }, [data.phone]);

    useEffect(() => {
        // Password validation
        if (data.password.length > 0 && data.password.length < 8) {
            setError('password', 'Password must be at least 8 characters');
        } else {
            clearErrors('password');
        }
    }, [data.password]);

    useEffect(() => {
        // Password confirmation
        if (data.password_confirmation.length > 0 && data.password_confirmation !== data.password) {
            setError('password_confirmation', 'Passwords do not match');
        } else {
            clearErrors('password_confirmation');
        }
    }, [data.password_confirmation, data.password]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Final check before submission
        if (Object.keys(errors).length > 0) return;

        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="h-screen bg-background flex flex-col lg:flex-row overflow-hidden">
            <Head title="Create Account — Tax Filing Hub" />

            {/* Left Panel - Visuals */}
            <div className="hidden lg:flex lg:w-[35%] xl:w-[30%] bg-primary relative overflow-hidden flex-col p-10">
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
                    <div className="bg-white/10 border border-white/20 p-5 rounded-xl self-start">
                        <AppLogo className="text-white scale-90 origin-left" />
                    </div>

                    <div className="mt-auto space-y-6 animate-fade-up">
                        <h2 className="font-display text-3xl xl:text-4xl font-bold text-white leading-tight">
                            Start your <span className="text-gold">compliance journey.</span>
                        </h2>
                        
                        <div className="space-y-3">
                            {[
                                "Fast account activation",
                                "Expert advisory access",
                                "End-to-end tax support",
                                "Corporate-grade security"
                            ].map((text) => (
                                <div key={text} className="flex items-center gap-2.5 text-white/80">
                                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                                    <span className="text-xs font-medium">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/10 text-white/40 text-[9px] font-bold uppercase tracking-[0.2em]">
                            Trusted by 500+ Businesses
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 bg-white overflow-y-auto">
                <div className="w-full max-w-xl space-y-6">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-4">
                        <AppLogo className="text-primary scale-90" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-primary transition-colors w-fit mb-2">
                            <ArrowLeft className="h-3 w-3" /> Back to Home
                        </Link>
                        <h1 className="font-display text-2xl font-bold text-primary tracking-tight">Create Account</h1>
                        <p className="text-xs text-muted-foreground">Join India's most trusted tax advisory platform</p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                                    <Input 
                                        id="name" 
                                        type="text" 
                                        name="name" 
                                        required 
                                        autoFocus 
                                        value={data.name} 
                                        onChange={e => setData('name', e.target.value)}
                                        className="rounded-xl h-10 border-border bg-surface/50 pl-10 text-sm focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="John Doe" 
                                    />
                                </div>
                                <InputError message={errors.name} className="text-[10px]" />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        required 
                                        value={data.email} 
                                        onChange={e => setData('email', e.target.value)}
                                        className="rounded-xl h-10 border-border bg-surface/50 pl-10 text-sm focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="john@example.com" 
                                    />
                                </div>
                                <InputError message={errors.email} className="text-[10px]" />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                                    <Input 
                                        id="phone" 
                                        type="tel" 
                                        name="phone" 
                                        required 
                                        value={data.phone} 
                                        onChange={e => setData('phone', e.target.value)}
                                        className="rounded-xl h-10 border-border bg-surface/50 pl-10 text-sm focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="+91 00000 00000" 
                                    />
                                </div>
                                <InputError message={errors.phone} className="text-[10px]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="password" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Create Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40 z-10" />
                                    <PasswordInput 
                                        id="password" 
                                        name="password" 
                                        required 
                                        value={data.password} 
                                        onChange={e => setData('password', e.target.value)}
                                        className="rounded-xl h-10 border-border bg-surface/50 pl-10 text-sm focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="••••••••" 
                                    />
                                </div>
                                <InputError message={errors.password} className="text-[10px]" />
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="password_confirmation" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Confirm Password</Label>
                                <div className="relative">
                                    <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40 z-10" />
                                    <PasswordInput 
                                        id="password_confirmation" 
                                        name="password_confirmation" 
                                        required 
                                        value={data.password_confirmation} 
                                        onChange={e => setData('password_confirmation', e.target.value)}
                                        className="rounded-xl h-10 border-border bg-surface/50 pl-10 text-sm focus-visible:ring-primary focus-visible:border-primary transition-all"
                                        placeholder="••••••••" 
                                    />
                                </div>
                                <InputError message={errors.password_confirmation} className="text-[10px]" />
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button type="submit" disabled={processing}
                                className="w-full rounded-xl bg-gold hover:bg-[#C5A028] text-gold-foreground font-bold h-12 transition-all text-base group">
                                {processing ? <Spinner /> : <UserPlus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />}
                                Register Account
                            </Button>
                        </div>
                    </form>

                    <div className="pt-4 border-t border-border text-center">
                        <p className="text-xs text-muted-foreground">
                            Already registered? <TextLink href={login()} className="font-bold text-accent hover:text-primary transition-colors">Log in to your portal</TextLink>
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-4 opacity-40 grayscale">
                        <ShieldCheck className="h-5 w-5" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">ISO 27001 Certified Security</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

Register.layout = (page: any) => page;
