'use client'

import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function SignOutButton() {
	const router = useRouter()

	async function signOut() {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push('/auth')
				}
			}
		})
	}
	return (
		<button className="px-3 py-2 bg-red-600 rounded font-semibold text-sm text-white" onClick={signOut}>
			Finalizar sessão
		</button>
	)

}