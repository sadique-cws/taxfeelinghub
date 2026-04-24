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
import { AppLogo as AppLogoFlat } from '@/components/app-logo-flat';
import { ShieldCheck, User as UserIcon, LogIn } from 'lucide-react';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    const autofill = (email: string) => {
        setData({
            email,
            password: 'password',
            remember: true
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
            <Head title="Log in" />
            
            <div className="w-full max-w-[400px] space-y-8">
                {/* Logo Section - Flat */}
                <div className="flex flex-col items-center">
                    <AppLogoFlat className="mb-2" />
                    <h1 className="text-xl font-bold text-slate-900 mt-4">Secure Portal Login</h1>
                    <p className="text-sm text-slate-500 mt-1 text-center">Authorized access only for clients and advisors.</p>
                </div>

                <div className="bg-white border border-slate-200 p-8 shadow-none rounded-none">
                    <form onSubmit={submit} className="flex flex-col gap-6">
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1" htmlFor="email">Email Address</label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    className="rounded-none border-slate-200 focus:ring-0 h-12"
                                    placeholder="advisor@taxfilinghub.com"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1" htmlFor="password">Password</label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900"
                                        >
                                            Forgot?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                    className="rounded-none border-slate-200 focus:ring-0 h-12"
                                    placeholder="••••••••"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-3 py-2">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onCheckedChange={(checked) => setData('remember', checked as boolean)}
                                    className="rounded-none border-slate-300"
                                />
                                <Label htmlFor="remember" className="text-xs font-bold text-slate-600 uppercase tracking-wider">Keep me signed in</Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full rounded-none bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 shadow-none transition-none"
                                disabled={processing}
                            >
                                {processing ? <Spinner /> : <LogIn className="h-4 w-4 mr-2" />}
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Auto-fill Section - Flat */}
                <div className="border border-slate-200 bg-white p-6 rounded-none">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4 text-center">Quick Access (Demo)</p>
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            type="button"
                            onClick={() => autofill('admin@taxfilinghub.com')}
                            className="flex flex-col items-center justify-center p-4 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-none group"
                        >
                            <ShieldCheck className="h-5 w-5 text-slate-400 mb-2 group-hover:text-slate-900" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Admin</span>
                        </button>
                        <button 
                            type="button"
                            onClick={() => autofill('client@taxfilinghub.com')}
                            className="flex flex-col items-center justify-center p-4 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-none group"
                        >
                            <UserIcon className="h-5 w-5 text-slate-400 mb-2 group-hover:text-slate-900" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Client</span>
                        </button>
                    </div>
                </div>

                {canRegister && (
                    <div className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        New here?{' '}
                        <TextLink href={register()} className="text-slate-900 hover:underline">
                            Register Firm
                        </TextLink>
                    </div>
                )}
            </div>

            {status && (
                <div className="mt-6 text-center text-sm font-bold text-green-600 uppercase tracking-widest">
                    {status}
                </div>
            )}
        </div>
    );
}

Login.layout = (page: any) => page;
