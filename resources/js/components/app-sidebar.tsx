import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, FileText, ShieldCheck, Users } from 'lucide-react';
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
import AppLogoIcon from '@/components/app-logo-icon';

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
        mainNavItems.push({
            title: 'Manage Clients',
            href: '/admin/clients',
            icon: Users,
        });
    } else {
        mainNavItems.push({
            title: 'My Documents',
            href: '/dashboard/documents',
            icon: FileText,
        });
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader className="py-5 px-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                                    <AppLogoIcon className="size-5 fill-current" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-display text-sm font-bold text-primary">Tax Filing Hub</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                        {user.role === 'admin' ? 'Admin Console' : 'Client Portal'}
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
