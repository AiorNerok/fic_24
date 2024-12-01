'use client'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
import { JoinForm } from "@/components/use-case/auth/join-form/join-form";

export default function JoinPage() {
    const router = useRouter()
    const session = useSession()

    if (session.status === "authenticated") {
        router.push('/')
    }

    return (
        <div>
            <JoinForm />
        </div>
    )
}