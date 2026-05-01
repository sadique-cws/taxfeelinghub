import { Head, useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { AppLogo } from '@/components/app-logo';
import { ShieldCheck, User as UserIcon, LogIn, ArrowRight, CheckCircle2 } from 'lucide-react';

type Props = { status?: string; canResetPassword: boolean; canRegister: boolean; };

export default function Login({ status, canResetPassword, canRegister }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '', password: '', remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login', { onFinish: () => reset('password') });
    };



    return (
        <div className="min-h-screen bg-background flex flex-col lg:flex-row">
            <Head title="Log in — Tax Filing Hub" />

            {/* Left Panel - Branding & Visuals */}
            <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] bg-primary relative overflow-hidden flex-col p-12">
                {/* Background Image with Overlay */}
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
                            Streamlining your <span className="text-gold">financial future.</span>
                        </h2>
                        
                        <div className="space-y-4">
                            {[
                                "Secure document management",
                                "Real-time compliance tracking",
                                "Direct advisor communication",
                                "Automated statutory reminders"
                            ].map((text) => (
                                <div key={text} className="flex items-center gap-3 text-white/80">
                                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                                    <span className="text-sm font-medium">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3">Trusted by professionals at</p>
                            <div className="flex gap-6 opacity-30">
                                <ShieldCheck className="h-6 w-6 text-white" />
                                <LogIn className="h-6 w-6 text-white" />
                                <UserIcon className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-md space-y-10">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex justify-center mb-8">
                        <AppLogo className="text-primary" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-display text-3xl font-bold text-primary tracking-tight">Sign In</h1>
                        <p className="text-muted-foreground">Access your advisor portal and documents</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    name="email" 
                                    required 
                                    autoFocus 
                                    value={data.email} 
                                    onChange={e => setData('email', e.target.value)}
                                    className="rounded-xl h-12 border-border bg-surface/50 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                    placeholder="you@example.com" 
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</Label>
                                    {canResetPassword && <TextLink href={request()} className="text-xs font-semibold text-accent hover:text-primary transition-colors">Forgot password?</TextLink>}
                                </div>
                                <PasswordInput 
                                    id="password" 
                                    name="password" 
                                    required 
                                    value={data.password} 
                                    onChange={e => setData('password', e.target.value)}
                                    className="rounded-xl h-12 border-border bg-surface/50 focus-visible:ring-primary focus-visible:border-primary transition-all"
                                    placeholder="••••••••" 
                                />
                                <InputError message={errors.password} />
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Checkbox 
                                id="remember" 
                                name="remember" 
                                checked={data.remember} 
                                onCheckedChange={c => setData('remember', c as boolean)}
                                className="rounded border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary" 
                            />
                            <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">Keep me signed in for 30 days</Label>
                        </div>

                        <Button type="submit" disabled={processing}
                            className="w-full rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-bold h-14 transition-all text-lg group">
                            {processing ? <Spinner /> : <LogIn className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />}
                            Log In to Portal
                        </Button>
                    </form>

                    {canRegister && (
                        <p className="text-center text-sm text-muted-foreground">
                            New to the platform? <TextLink href={register()} className="font-bold text-accent hover:text-primary transition-colors">Create an account</TextLink>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

Login.layout = (page: any) => page;
