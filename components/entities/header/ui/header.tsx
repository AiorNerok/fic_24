import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/shared/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ArrowLeftRight, Blocks, Calendar, ChartNoAxesCombined } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const Header = ({ children }: PropsWithChildren) => {

    const menu = [
        { link: '#', icon: ChartNoAxesCombined, title: "Дашборд" },
        { link: '#', icon: Calendar, title: 'Планирование' },
        { link: '#', icon: ArrowLeftRight, title: 'Транзакции' },
        { link: '#', icon: Blocks, title: 'Финансовая грамотность' },

    ]

    return (
        <header className="px-4 py-3 border-b border-zinc-700 flex flex-row justify-between items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        menu.map(({ icon: Icon, link, title }, index) => (
                            <NavigationMenuItem key={index}>
                                <Link href={link} legacyBehavior passHref>
                                    <NavigationMenuLink className={cn('text-sm leading-5 font-medium font-sans px-4 py-3 flex items-center justify-center gap-2', navigationMenuTriggerStyle())}>
                                        <Icon width={16} height={16} /> {title}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
            {children}
        </header>
    )
}