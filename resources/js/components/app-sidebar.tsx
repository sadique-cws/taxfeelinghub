import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, FileText, ShieldCheck } from 'lucide-react';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';
import { AppLogo as AppLogoFlat } from '@/components/app-logo-flat';

export function AppSidebar() {
    const { auth } = usePage().props as any;
    const user = auth.user;

    const mainNavItems: NavItem[] = [
        {
            title: 'Dashboard',
            href: dashboard(),
            icon: LayoutGrid,
        },
    ];

    if (user.role === 'admin') {
        mainNavItems.push({
            title: 'Manage Documents',
            href: '/admin/documents',
            icon: ShieldCheck,
        });
    } else {
        mainNavItems.push({
            title: 'My Documents',
            href: '/dashboard/documents',
            icon: FileText,
        });
    }

    return (
        <Sidebar collapsible="icon" variant="inset" className="border-r border-slate-200 shadow-none">
            <SidebarHeader className="border-b border-slate-200 py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogoFlat />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="border-t border-slate-200">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
