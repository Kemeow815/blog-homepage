"use client";

import { SettingsModal } from "@/components/sidebar/setting/SettingsModal";
import { SidebarAvatar } from "@/components/sidebar/SidebarAvatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SidebarConfig, SiteConfig } from "@/config";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import * as React from "react";

const Navigation = ({ t }: { t: ReturnType<typeof useTranslations> }) => {
	const pathname = usePathname();
	return (
		<Card className="mx-2 dark:bg-gray-700">
			<CardContent>
				<SidebarMenu className="mt-2">
					<div className="mb-2 flex justify-around">
						<TooltipProvider delayDuration={100}>
							{SidebarConfig.externalLinks.map(item => (
								<Tooltip key={t(item.name)}>
									<TooltipTrigger asChild>
										<Link href={item.href} target="_blank" rel="noopener noreferrer">
											<Button variant="ghost" size="icon" className="dark:text-gray-300 dark:hover:bg-gray-600">
												<Icon icon={item.icon} className="size-5" />
												<span className="sr-only">{t(item.name)}</span>
											</Button>
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>{t(item.name)}</p>
									</TooltipContent>
								</Tooltip>
							))}
						</TooltipProvider>
					</div>
					<Separator className="my-2 dark:bg-gray-600" />
					{SidebarConfig.sections.map(item => (
						<SidebarMenuItem key={t(item.name)} className="mt-1">
							<SidebarMenuButton
								asChild
								isActive={pathname === item.href}
								className="flex h-10 w-full items-center justify-center text-lg dark:text-gray-300 dark:hover:bg-gray-600"
							>
								<Link href={item.href} className="flex items-center">
									<Icon icon={item.icon} className="mr-2 size-6" />
									<span>{t(item.name)}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</CardContent>
		</Card>
	);
};

export default function SidebarLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const t = useTranslations();
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
	return (
		<SidebarProvider>
			<Sidebar className="hidden w-60 border-r md:block">
				<SidebarHeader className="p-4">
					<div className="flex items-center space-x-2">
						<SidebarAvatar />
						<h1 className="text-base font-bold">{t(SiteConfig.title)}</h1>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<Navigation t={t} />
				</SidebarContent>
				<SidebarFooter>
					<div className="mb-4 flex justify-center space-x-2">
						<SettingsModal />
					</div>
					<Separator className="dark:bg-gray-600" />
					<div className="mb-2 mt-5 text-center text-sm dark:text-gray-300 lg:text-base">
						<p>{t(SidebarConfig.copyright.text, { date: new Date().getFullYear() })}</p>
						<p className="text-sm">
							Designed by
							{" "}
							<mark>
								<Link
									href="https://github.com/TNXG/tnxg-homepage"
									target="_blank"
									className="text-[#3388BB] transition-all duration-300 ease-in-out hover:scale-110 hover:text-[#FF5522] dark:text-[#66BBFF] dark:hover:text-[#FF7744]"
								>
									tnxg-homepage
								</Link>
							</mark>
						</p>
					</div>
				</SidebarFooter>
			</Sidebar>

			<Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
				<DrawerTrigger asChild>
					<Button variant="outline" size="icon" className="fixed left-4 top-4 z-10 md:hidden">
						<Icon icon="mingcute:menu-line" className="size-[1.2rem]" />
					</Button>
				</DrawerTrigger>
				<DrawerContent className="dark:bg-gray-800">
					<DrawerHeader>
						<DrawerTitle className="dark:text-white">{t(SiteConfig.title)}</DrawerTitle>
						<DrawerDescription className="dark:text-gray-300">{t(SiteConfig.description)}</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<Navigation t={t} />
					</div>
					<DrawerFooter>
						<div className="flex w-full justify-between">
							<SettingsModal />
							<DrawerClose asChild>
								<Button variant="outline" className="dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">Close</Button>
							</DrawerClose>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

			<SidebarInset className="flex-1 overflow-hidden">
				<div className="h-full overflow-y-auto">{children}</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
