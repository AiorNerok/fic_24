import { redirect } from "next/navigation";
import { LoginForm } from "@/components/use-case/auth";
import { auth } from "@/server/auth";

export default async function LoginPage() {
    const session = await auth();

    if (session) {
        redirect("/");
    }

    return (
        <LoginForm />
    )
}