"use client"

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './dot'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import Pic1 from '@/components/shared/assets/pic1.png'
import Pic2 from '@/components/shared/assets/pic2.png'
import Pic3 from '@/components/shared/assets/pic3.png'
import { SvgIcons } from '@/components/shared/ui/svg-icons'
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }

const SLIDES = [{
    img: Pic1,
    title: 'Планируйте бюджет',
    subtitle: 'Распределяйте доходы и расходы так, чтобы всё было под контролем',
    position: 'bottom'
}, {
    under: SvgIcons.qr,
    img: Pic2,
    title: 'Умный помощник',
    subtitle: 'Подсветит риски и сделает более глубокую аналитику по вашему запросу',
    position: 'top'
},
{
    img: Pic3,
    title: 'Обучайтесь',
    subtitle: 'Эксперты расскажут о финансовой подушке и как пережить кризис',
    position: 'top'
}]

export const GalleryCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 100000000000000000 })])

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
                    {SLIDES.map(({ img, position, subtitle, title, under: Icon }, index) => (
                        <div className={cn("embla__slide h-[500px] relative")} key={index}>
                            <Image className='absolute' src={img} fill alt={title} />
                            <div className={cn("embla__slide__number h-full flex flex-col relative", position == 'top' ? 'justify-start pt-7' : 'justify-end pb-7')}>
                                {Icon && <div className='relative'><Icon /></div>}
                                <h2 className='leading-6 text-sm font-medium font-sans'>{title}</h2>
                                <h4 className='leading-4 text-xs font-normal font-sans w-3/4 text-center'>{subtitle}</h4>
                            </div>
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
        </section >
    )
}
