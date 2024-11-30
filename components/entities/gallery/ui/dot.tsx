import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import { cn } from '@/lib/utils'

type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
}

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
            if (onButtonClick) onButtonClick(emblaApi)
        },
        [emblaApi, onButtonClick]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}

type PropType = ComponentPropsWithRef<'button'>

export const DotButton: React.FC<PropType> = (props) => {
    const { children, className, ...restProps } = props

    return (
        <button type="button" className={cn('w-3 h-3 rounded-full border', className)} {...restProps}>
            {children}
        </button>
    )
}
