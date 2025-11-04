import Link from "next/link"

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-dvh bg-neutral-950 gap-4">
			<Link href="/" className="text-white font-semibold hover:bg-neutral-800 focus:bg-neutral-800 rounded px-3 py-2 transition-all duration-200">Página inicial</Link>
			<Link href="/auth" className="text-white font-semibold hover:bg-neutral-800 focus:bg-neutral-800 rounded px-3 py-2 transition-all duration-200">Página de autenticação</Link>
			<Link href="/dashboard" className="text-white font-semibold hover:bg-neutral-800 focus:bg-neutral-800 rounded px-3 py-2 transition-all duration-200">Página do dashboard (privada)</Link>
			<Link href="/auth/admin" className="text-white font-semibold hover:bg-neutral-800 focus:bg-neutral-800 rounded px-3 py-2 transition-all duration-200">Página de login para administradores</Link>
		</main>
	)
}