"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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
import { Tabs, TabsList, TabsTrigger } from "@/components/shared/ui/tabs"

const chartData = [
    { month: "Январь", income: 18600, expenses: 8000 },
    { month: "Февраль", income: 30005, expenses: 20000 },
    { month: "Март", income: 20037, expenses: 12000 },
    { month: "Апрель", income: 7003, expenses: 19000  },
    { month: "Май", income: 20900, expenses: 13000 },
    { month: "Июнь", income: 21400, expenses: 14000 },
    { month: "Июль", income: 18600, expenses: 8000  },
    { month: "Август", income: 30500, expenses: 20000 },
    { month: "Сентябрь", income: 23700, expenses: 12000 },
    { month: "Октябрь", income: 7300, expenses: 19000  },
    { month: "Ноябрь", income: 20900, expenses: 13000 },
    { month: "Декабрь", income: 21400, expenses: 14000 },
]

const chartConfig = {
    income: {
        label: "Доход",
        color: "hsl(var(--chart-1))",
    },
    expenses: {
        label: "Расход",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export const ComparisonChart = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Доходы / расходы</CardTitle>
                </div>
                <div>
                    <Tabs defaultValue='3month'>
                        <TabsList >
                            <TabsTrigger value="currentMonth">Текущий месяц</TabsTrigger>
                            <TabsTrigger value="3month">3 месяца</TabsTrigger>
                            <TabsTrigger value="6month">6 месяцев</TabsTrigger>
                            <TabsTrigger value="12month">1 год</TabsTrigger>
                            <TabsTrigger value="all">За все время</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer className="max-h-[492px] w-full" config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}

                    >
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
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="income"
                            type="monotone"
                            stroke="#22C55E"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="expenses"
                            type="monotone"
                            stroke="#EF4444"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Чистый доход: 46,762.89 ₽ <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            30% дохода было потрачено в этом месяце. 12% — в прошлом.
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
