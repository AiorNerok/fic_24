'use client';

import { PropsWithChildren } from "react";
import { EmblaOptionsType } from 'embla-carousel'
import { GalleryCarousel } from "@/components/entities/gallery";


export default function Layout({ children }: PropsWithChildren) {

    return (
        <div className="flex gap-36 h-screen items-center justify-center">
            <div className="w-96">
                {children}
            </div>
            <div className="w-96">
                <GalleryCarousel />
            </div>
        </div>
    )
}