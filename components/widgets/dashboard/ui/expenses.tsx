"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shared/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/shared/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/ui/select"
const chartData = [
    { month: "Январь", desktop: 18600 },
    { month: "Февраль", desktop: 30500 },
    { month: "Март", desktop: 24037 },
    { month: "Апрель", desktop: 19460 },
    { month: "Май", desktop: 20900 },
    { month: "Июнь", desktop: 21400 },
    { month: "Июль", desktop: 25400 },
    { month: "Август", desktop: 20500 },
    { month: "Сентябрь", desktop: 18900 },
    { month: "Октябрь", desktop: 23400 },
    { month: "Ноябрь", desktop: 17800 },
    { month: "Декабрь", desktop: 32400 },
]

const chartConfig = {
    desktop: {
        label: "Расходы",
        color: "#EF4444",
    },
} satisfies ChartConfig

export const Expenses = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-start">
                <div>
                    <CardTitle>Расходы</CardTitle>
                    <CardDescription>за 2023 год</CardDescription>
                </div>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Все кошельки" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Т-Банк">Т-Банк</SelectItem>
                        <SelectItem value="Сбербанк">Сбербанк</SelectItem>
                        <SelectItem value="Наличные">Наличные</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={3}
                        />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
