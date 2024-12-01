import { CardTemplate } from "@/components/entities/card/card-template"
import { Button } from "@/components/shared/ui/button"
import { Coins, Settings2 } from "lucide-react"
import { SvgIcons } from "@/components/shared/ui/svg-icons"
import { CardTemplateEmpty } from "@/components/entities/card/card-template-empty"
import { Expenses } from './expenses'
import { LastTransaction } from "./last-transaction"
import { ComparisonChart } from "./comparison-chart"
import { PlanFactCategory } from "./plan-fact-category"
import { ExpenseCategories } from "./expense-categories"

export const Dashboard = () => {
    return (
        <div className="px-8 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="leading-9 text-3xl font-bold font-sans">Мои финансы</h2>
                <Button variant={'outline'} className="p-3">
                    <Settings2 width={16} height={16} />
                </Button>
            </div>
            <div className="flex gap-4">
                <CardTemplate count={34424} title="Т-Банк" icon={SvgIcons.tbank} />
                <CardTemplate count={13000} title="Сбербанк" icon={SvgIcons.sber} />
                <CardTemplate count={13000} title="Наличные" icon={Coins} />
                <CardTemplateEmpty />
            </div>
            <div className="flex flex-row gap-4">
                <div className="flex-[3]">
                    <Expenses />
                </div>
                <div className="flex-[2]">
                    <LastTransaction />
                </div>
            </div>
            <div className="w-full">
                <ComparisonChart />
            </div>
            <div className="flex gap-4 flex-row">
                <div className="flex-[3]">
                    <PlanFactCategory />
                </div>
                <div className="flex-[2]">
                    <ExpenseCategories />
                </div>
            </div>
        </div>
    )
}