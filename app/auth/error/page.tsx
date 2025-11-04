import Link from "next/link"
import { MdOutlineError } from "react-icons/md"

export default function AuthErrorPage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-dvh bg-gray-100">
			<div className="flex flex-col gap-1 items-center">
				<span className="text-5xl text-red-600">
					<MdOutlineError />
				</span>
				<div className="flex flex-col items-center">
					<strong className="text-lg">Erro de autenticação</strong>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<strong className="text-lg text-center text-balance font-medium text-black/70">Tente solicitar o link de acesso novamente ou contate o suporte.</strong>
				<ul className="flex flex-col gap-2 items-center">
					<li className="flex items-center gap-2 active:underline underline-offset-4 hover:underline">
						<Link href="/auth" className="font-semibold">Tentar novamente</Link>
					</li>
				</ul>
			</div>
		</main>
	)
}