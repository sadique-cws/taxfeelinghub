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
import AppLogoIcon from '@/components/app-logo-icon';
import { ShieldCheck, User as UserIcon, LogIn, ArrowRight } from 'lucide-react';

type Props = { status?: string; canResetPassword: boolean; canRegister: boolean; };

export default function Login({ status, canResetPassword, canRegister }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login', { onFinish: () => reset('password') });
    };

    const autofill = (email: string) => {
        setData({ email, password: 'password', remember: true });
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <Head title="Log in" />

            {/* Left Panel — Brand */}
            <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient text-white flex-col justify-center items-center p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="text-center z-10 max-w-md">
                    <div className="gold-rule mx-auto mb-6" />
                    <h1 className="font-display text-5xl font-bold tracking-tight mb-6">Tax Filing Hub</h1>
                    <p className="text-white/70 text-lg leading-relaxed">
                        Your trusted partner in financial compliance, tax advisory, and business growth.
                    </p>
                    <div className="mt-10 grid grid-cols-3 gap-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="font-display text-2xl font-bold text-gold">500+</p>
                            <p className="text-xs text-white/50 mt-1">Happy Clients</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="font-display text-2xl font-bold text-gold">15+</p>
                            <p className="text-xs text-white/50 mt-1">Years Experience</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="font-display text-2xl font-bold text-gold">99%</p>
                            <p className="text-xs text-white/50 mt-1">Compliance Rate</p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            </div>

            {/* Right Panel — Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 bg-background">
                <div className="w-full max-w-[400px] space-y-8">
                    {/* Mobile Logo */}
                    <div className="flex flex-col items-center lg:hidden mb-4">
                        <AppLogoIcon className="size-10 fill-current text-primary" />
                        <h1 className="font-display text-xl font-bold text-primary mt-3">Tax Filing Hub</h1>
                    </div>

                    <div>
                        <h2 className="font-display text-2xl font-bold text-primary">Welcome back</h2>
                        <p className="text-muted-foreground mt-1">Sign in to access your portal.</p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</Label>
                            <Input id="email" type="email" name="email" required autoFocus value={data.email} onChange={e => setData('email', e.target.value)} className="rounded-xl h-12 border-border" placeholder="you@example.com" />
                            <InputError message={errors.email} />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</Label>
                                {canResetPassword && <TextLink href={request()} className="text-xs text-accent hover:text-primary">Forgot?</TextLink>}
                            </div>
                            <PasswordInput id="password" name="password" required value={data.password} onChange={e => setData('password', e.target.value)} className="rounded-xl h-12 border-border" placeholder="••••••••" />
                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <Checkbox id="remember" name="remember" checked={data.remember} onCheckedChange={c => setData('remember', c as boolean)} className="rounded border-border" />
                            <Label htmlFor="remember" className="text-sm text-muted-foreground">Keep me signed in</Label>
                        </div>

                        <Button type="submit" disabled={processing} className="w-full rounded-xl bg-primary hover:bg-secondary text-white font-bold h-12 shadow-elegant">
                            {processing ? <Spinner /> : <LogIn className="h-4 w-4 mr-2" />}
                            Sign In
                        </Button>
                    </form>

                    {/* Demo Quick Access */}
                    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground mb-4 text-center">Quick Access (Demo)</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" onClick={() => autofill('admin@taxfilinghub.com')} className="flex flex-col items-center justify-center p-4 rounded-xl border border-border hover-lift transition-smooth group">
                                <ShieldCheck className="h-5 w-5 text-primary mb-2 group-hover:text-gold transition-smooth" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Admin</span>
                            </button>
                            <button type="button" onClick={() => autofill('client@taxfilinghub.com')} className="flex flex-col items-center justify-center p-4 rounded-xl border border-border hover-lift transition-smooth group">
                                <UserIcon className="h-5 w-5 text-primary mb-2 group-hover:text-gold transition-smooth" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Client</span>
                            </button>
                        </div>
                    </div>

                    {canRegister && (
                        <p className="text-center text-sm text-muted-foreground">
                            New client? <TextLink href={register()} className="font-semibold text-accent hover:text-primary">Create an account</TextLink>
                        </p>
                    )}
                </div>
            </div>

            {status && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold text-sm">
                    {status}
                </div>
            )}
        </div>
    );
}

Login.layout = (page: any) => page;
