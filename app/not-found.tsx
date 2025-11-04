import Link from "next/link"
import { FiBox } from "react-icons/fi"

export default function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center min-h-dvh bg-gray-100">
			<div className="flex flex-col gap-1 items-center">
				<span className="text-5xl text-indigo-500">
					<FiBox />
				</span>
				<div className="flex flex-col items-center">
					<strong className="text-lg text-red-600">Erro 404</strong>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<strong className="text-lg font-medium text-black/70">Esta página foi removida ou não existe</strong>
				<ul className="flex flex-col gap-2 items-center">
					<li className="flex items-center gap-2 active:underline underline-offset-4 hover:underline">
						<Link href="/" className="font-semibold"><span className="text-indigo-500">Ir para </span>página inicial</Link>
					</li>
					<li className="flex items-center gap-2 active:underline underline-offset-4 hover:underline">
						<Link href="/auth" className="font-semibold"><span className="text-indigo-500">Ir para </span>autenticação</Link>
					</li>
				</ul>
			</div>
		</main>
	)
}