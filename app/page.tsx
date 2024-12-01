import { Dashboard } from "@/components/use-case/dashboard/ui/dasboard";
// import { auth } from "@/server/auth"

export default async function Home() {
  // const session = await auth()

  return (
    <div className="">
      <Dashboard />
    </div>
  );
}
