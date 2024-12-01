import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shared/ui/card"
import { Badge } from "@/components/shared/ui/badge"
import { SvgIcons } from "@/components/shared/ui/svg-icons"

const notifications = [
    {
        icon: SvgIcons.tbank,
        title: "Пополнение через Петербургский Филиал АО Юникредит Банка",
        type: "переводы",
        amount: '+1999',
        colorAmount: 'success',
    },
    {
        icon: SvgIcons.tbank,
        title: "Артём Л.",
        type: "переводы",
        amount: '-39',
        colorAmount: null,
    },
    {
        icon: SvgIcons.twitch,
        title: "Подписка Premium",
        type: "другое",
        amount: '-299',
        colorAmount: null,
    },
    {
        icon: SvgIcons.hasky,
        title: "Husky shop",
        type: "лучшие",
        amount: '29900',
        colorAmount: null,
    },
    {
        icon: SvgIcons.tbank,
        title: "Sofia Davis",
        type: "образование",
        amount: '-39',
        colorAmount: null,
    },
]

export const LastTransaction = () => {
    return (
        <Card className="h-full">
            <CardHeader className="pt-6 pb-6">
                <CardTitle className="pb-3">Недавние транзакции</CardTitle>
                <CardDescription className="space-x-2">
                    <Badge variant={"secondary"} className="bg-secondary" >+46,762.89 ₽</Badge>
                    <Badge variant={'destructive'}> -800.20 ₽</Badge>
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="flex flex-col gap-6">
                    {notifications.map(({ amount, icon: Icon, title, type, colorAmount }, idx) => (
                        <div
                            key={idx}
                            className="flex gap-4 items-center"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg">
                                <Icon />
                            </div>
                            <div className="space-y-1 flex-1">
                                <p className="text-sm font-medium leading-none truncate whitespace-nowrap max-w-52">
                                    {title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {type}
                                </p>
                            </div>
                            <div className={cn('text-nowrap', colorAmount ? 'text-green-500' : 'text-zinc-50')}>
                                {amount} ₽
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}