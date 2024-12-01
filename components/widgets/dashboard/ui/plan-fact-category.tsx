"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
import { Tabs, TabsList, TabsTrigger } from "@/components/shared/ui/tabs"

const chartData = [
    { month: "Январь", plan: 10086, fact: 16400 },
    { month: "Февраль", plan: 30005, fact: 20000 },
    { month: "Март", plan: 23700, fact: 15000 },
    { month: "Апрель", plan: 7300, fact: 3800 },
    { month: "Май", plan: 20900, fact: 15900 },
    { month: "Июнь", plan: 20014, fact: 17000 },
    { month: "Июль", plan: 20104, fact: 18020 },
    { month: "Август", plan: 20014, fact: 20022 },
    { month: "Сентябрь", plan: 14004, fact: 22020 },
    { month: "Октябрь", plan: 24004, fact: 19000 },
    { month: "Ноябрь", plan: 19500, fact: 21022 },
    { month: "Декабрь", plan: 25000, fact: 25011 },
]

const chartConfig = {
    plan: {
        label: "План",
        color: "hsl(var(--chart-1))",
    },
    fact: {
        label: "Факт",
        color: "hsl(var(--chart-2))"
    }
} satisfies ChartConfig

export const PlanFactCategory = () => {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row items-center justify-between">
                    <CardTitle>План / факт по категориям</CardTitle>
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
                </div>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="plan"
                            type="linear"
                            stroke="#FAFAFA"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="fact"
                            type="linear"
                            stroke="#525252"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <Tabs defaultValue='Переводы'>
                    <TabsList >
                        <TabsTrigger value="Супермаркеты">Супермаркеты</TabsTrigger>
                        <TabsTrigger value="Переводы">Переводы</TabsTrigger>
                        <TabsTrigger value="Коммунальные услуги">Коммунальные услуги</TabsTrigger>
                        <TabsTrigger value="Рестораны">Рестораны</TabsTrigger>
                        <TabsTrigger value="Размлечения">Размлечения</TabsTrigger>
                    </TabsList>
                </Tabs>
            </CardFooter>
        </Card>
    )
}
