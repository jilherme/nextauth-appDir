import { getServerSession } from "next-auth";

import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "@/components/buttons";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <pre className="max-w-sm whitespace-normal">{JSON.stringify(session)}</pre>
      </div>
    </main>
  )
}
