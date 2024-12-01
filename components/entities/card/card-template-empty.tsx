import { Plus } from "lucide-react"

export const CardTemplateEmpty = () => {
    return (
        <div className=" max-w-24 cursor-pointer min-w-56 min-h-24 gap-3 border rounded border-zinc-700 p-6 inline-flex flex-col items-center justify-center">
            <Plus />
        </div>
    )
}