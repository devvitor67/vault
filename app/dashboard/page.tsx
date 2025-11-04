import { SignOutButton } from "@/components/sign-out-button"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function DashboardPage() {
	const user = await auth.api.getSession({
		headers: await headers()
	})

	return (
		<main className="flex flex-col items-center justify-center min-h-dvh min-w-screen bg-gray-100 space-y-2">
			<h1 className="text-lg font-bold text-center text-balance">Você está autenticado como: <span className="text-indigo-500">{user?.user.email ?? user?.user.name ?? 'Desconhecido'}</span></h1>
			<SignOutButton />
		</main>
	)
}