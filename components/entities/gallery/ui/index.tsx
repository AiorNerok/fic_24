"use client"

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

export const GalleryCarousel = ({ slides, options }: PropType) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    return (
        <section className="embla relative">
            <div className="embla__viewport border rounded-2xl" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">{index + 1}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-zinc-800/70 absolute bottom-4 left-1/2 -translate-x-1/2 p-3 rounded-full flex gap-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={cn('w-3 h-3', index === selectedIndex ? 'bg-zinc-200' : 'bg-zinc-500')}
                    />
                ))}
            </div>
        </section>
    )
}
