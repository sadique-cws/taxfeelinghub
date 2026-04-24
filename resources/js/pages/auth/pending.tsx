import { Head, Link } from '@inertiajs/react';
import { AppLogo as AppLogoFlat } from '@/components/app-logo-flat';
import { Clock, LogOut } from 'lucide-react';

export default function Pending() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
            <Head title="Account Pending Approval" />
            
            <div className="w-full max-w-[420px] space-y-8">
                <div className="flex flex-col items-center">
                    <AppLogoFlat className="mb-4" />
                </div>

                <div className="bg-white border border-slate-200 p-10 text-center">
                    <div className="h-16 w-16 bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto mb-6">
                        <Clock className="h-8 w-8 text-amber-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Account Pending Approval</h1>
                    <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                        Your account has been created successfully. An administrator will review and approve your access shortly. You'll be able to log in once approved.
                    </p>
                </div>

                <div className="border border-slate-200 bg-white p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-4 text-center">What Happens Next?</p>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex gap-3">
                            <span className="h-5 w-5 bg-slate-900 text-white text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                            Admin reviews your registration
                        </li>
                        <li className="flex gap-3">
                            <span className="h-5 w-5 bg-slate-900 text-white text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                            Your account gets approved
                        </li>
                        <li className="flex gap-3">
                            <span className="h-5 w-5 bg-slate-900 text-white text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                            You can access your document portal
                        </li>
                    </ul>
                </div>

                <div className="text-center">
                    <Link 
                        href="/logout" 
                        method="post" 
                        as="button"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900"
                    >
                        <LogOut className="h-3 w-3" />
                        Sign Out
                    </Link>
                </div>
            </div>
        </div>
    );
}

Pending.layout = (page: any) => page;
