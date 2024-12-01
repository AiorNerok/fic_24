"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/shared/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
} from "@/components/shared/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/ui/select"
const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    chrome: {
        label: "Супермаркеты",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Переводы",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Коммунальные",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Рестораны",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Размлечения",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export const ExpenseCategories = () => {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="items-center pb-0 flex flex-row justify-between">
                <CardTitle>Категории расходов</CardTitle>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Январь" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Январь">Январь</SelectItem>
                        <SelectItem value="Февраль">Февраль</SelectItem>
                        <SelectItem value="Март">Март</SelectItem>
                        <SelectItem value="Апрель">Апрель</SelectItem>
                        <SelectItem value="Май">Май</SelectItem>
                        <SelectItem value="Июнь">Июнь</SelectItem>
                        <SelectItem value="Июль">Июль</SelectItem>
                        <SelectItem value="Август">Август</SelectItem>
                        <SelectItem value="Сентябрь">Сентябрь</SelectItem>
                        <SelectItem value="Октябрь">Октябрь</SelectItem>
                        <SelectItem value="Ноябрь">Ноябрь</SelectItem>
                        <SelectItem value="Декабрь">Декабрь</SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-full"
                >
                    <PieChart>
                        <Pie data={chartData} dataKey="visitors" />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="browser" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
