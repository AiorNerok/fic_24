import { createElement } from 'react'

type CardTemplateProps = {
    title: string;
    count: number;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const CardTemplate = ({ title, count, icon: Icon }: CardTemplateProps) => {
    return (
        <div className="cursor-pointer min-w-56 min-h-24 gap-3 border rounded border-zinc-700 p-6 inline-flex flex-col items-start justify-center">
            <p className='flex items-center justify-between w-full'>
                <span className="">{title}</span> {Icon && createElement(Icon, { width: 24, height: 24 })}
            </p>
            <p className="text-2xl font-semibold font-sans">
                {Intl.NumberFormat('ru-RU').format(count)} ₽
            </p>
        </div>
    )
}