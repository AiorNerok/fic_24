'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu"
import { SvgIcons } from "@/components/shared/ui/svg-icons"
import { Button } from '@/components/shared/ui/button'
import { signOut } from "next-auth/react"
import Link from "next/link"
import { CreditCard, LogOut, Settings2 } from "lucide-react"

export const Profile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button variant={'ghost'} className='p-0 focus-visible:'>
                    <SvgIcons.eynBig />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="flex flex-row gap-2">
                    <div>
                        <SvgIcons.eynBig />
                    </div>
                    <div>
                        Эйнам
                        <Link className="block" href={'mailto:#'}> eynam@example.com</Link>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem disabled>
                        <Settings2 /> Настройки
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <CreditCard /> Кошелек
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut /> Выход
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
