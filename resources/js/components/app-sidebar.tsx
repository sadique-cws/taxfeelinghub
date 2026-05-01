import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, FileText, ShieldCheck, Users, Briefcase, MessageSquare, Newspaper, Quote, LifeBuoy } from 'lucide-react';
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
import { AppLogo } from '@/components/app-logo';

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

    if (user && user.role === 'admin') {
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
        mainNavItems.push({
            title: 'Manage Jobs',
            href: '/admin/jobs',
            icon: Briefcase,
        });
        mainNavItems.push({
            title: 'Manage Blog',
            href: '/admin/blogs',
            icon: Newspaper,
        });
        mainNavItems.push({
            title: 'Manage Stories',
            href: '/admin/testimonials',
            icon: Quote,
        });
        mainNavItems.push({
            title: 'Support Tickets',
            href: '/admin/tickets',
            icon: LifeBuoy,
        });
        mainNavItems.push({
            title: 'Manage Inquiries',
            href: '/admin/leads',
            icon: MessageSquare,
        });
    } else if (user) {
        mainNavItems.push({
            title: 'My Documents',
            href: '/dashboard/documents',
            icon: FileText,
        });
        mainNavItems.push({
            title: 'Share Story',
            href: '/dashboard/feedback',
            icon: Quote,
        });
        mainNavItems.push({
            title: 'Support Tickets',
            href: '/dashboard/tickets',
            icon: LifeBuoy,
        });
    }

    return (
        <Sidebar collapsible="icon" variant="sidebar" className="bg-white text-neutral-900">
            <SidebarHeader className="py-5 px-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className="h-auto p-0 hover:bg-transparent">
                            <Link href={dashboard()} prefetch className="flex items-center gap-3">
                                <AppLogo 
                                    className="text-primary" 
                                    subtext={user?.role === 'admin' ? 'Admin Console' : 'Client Portal'} 
                                />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border/50">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
