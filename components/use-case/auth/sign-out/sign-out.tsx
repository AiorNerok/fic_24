'use client'

import { signOut } from '@/server/auth'
import { Button } from "@/components/shared/ui/button"

export const SignOutUser = () => {
    return (
        <Button onClick={() => signOut()}>
            Выйти
        </Button>
    )
}