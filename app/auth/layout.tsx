'use client';

import { PropsWithChildren } from "react";
import { EmblaOptionsType } from 'embla-carousel'
import { GalleryCarousel } from "@/components/entities/gallery";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Layout({ children }: PropsWithChildren) {

    const session = useSession()
    const router = useRouter()

    if (session.status === "authenticated") {
        router.push('/')
    } else {
        router.push('/auth/login')
    }

    return (
        <div className="flex gap-36 h-screen items-center justify-center">
            <div className="w-96">
                {children}
            </div>
            <div className="w-96">
                <GalleryCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </div>
    )
}