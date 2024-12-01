import { Header } from "@/components/entities/header/ui/header";
import { Profile } from "@/components/entities/profile/ui/profile";
import { Dashboard } from "@/components/widgets/dashboard/ui";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <div className="">
      <Header>
        <Profile />
      </Header>


      <Dashboard />
    </div>
  );
}
