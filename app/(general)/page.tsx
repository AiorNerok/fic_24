import { Header } from "@/components/entities/header/ui/header";
import { Profile } from "@/components/entities/profile/ui/profile";
import { Button } from "@/components/shared/ui/button";
import { Dashboard } from "@/components/widgets/dashboard/ui";
import { auth, signOut } from "@/server/auth";
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
