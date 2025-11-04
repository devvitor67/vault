import { AuthForm } from "@/components/auth-form"
import { FiBox } from "react-icons/fi"

export default function AuthPage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-dvh min-w-screen bg-gray-100 space-y-8">
			<div className="flex flex-col items-center">
				<span className="text-5xl text-indigo-500">
					<FiBox />
				</span>
				<div className="flex flex-col items-center">
					<strong className="text-lg">Bem-vindo ao <span className="text-indigo-500">Vault</span></strong>
					<p className="font-medium">Senhas seguras. Fim de papo.</p>
				</div>
			</div>
			<AuthForm />
		</main>
	)
}