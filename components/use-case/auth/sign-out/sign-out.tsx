import { signOut } from '@/server/auth'
import { Button } from "@/components/shared/ui/button"

export const SignOut = () => {
    return (
        <Button onClick={() => signOut()}>
            Выйти
        </Button>
    )
}