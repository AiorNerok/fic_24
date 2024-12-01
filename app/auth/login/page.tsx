'use client'

import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
import { LoginForm } from "@/components/use-case/auth";

export default function LoginPage() {
    const router = useRouter()
    const session = useSession()

    if (session.status === "authenticated") {
        router.push('/')
    }

    return (
        <LoginForm />
    )
}