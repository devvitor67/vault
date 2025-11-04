'use client'

import { authClient } from "@/lib/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { MdOutlineCheckCircle } from "react-icons/md"
import { useRouter } from "next/navigation"
import { z } from "zod"

const formSchema = z.object({
	email: z.email({ error: 'Email obrigatório' }),
	name: z.string({ error: 'Apenas letras são permitidas' }).nonempty({ error: 'Nome obrigatório' }).max(50, { error: 'Limite de 50 caracteres' })
})

type FormData = z.infer<typeof formSchema>

export function AuthForm() {
	const router = useRouter()

	const [status, setStatus] = useState<'sent' | 'default'>('default')

	const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
		resolver: zodResolver(formSchema),
		reValidateMode: 'onChange',
		mode: 'onTouched',
		shouldFocusError: false
	})

	async function sendMagicLink({ email, name }: FormData) {
		setStatus('default')
		const { error } = await authClient.signIn.magicLink({
			email,
			name,
			errorCallbackURL: 'http://10.0.0.122:3000/auth/error',
			callbackURL: 'http://10.0.0.122:3000/auth/success',
			newUserCallbackURL: 'http://10.0.0.122:3000/auth/success'
		})

		if (!error) {
			setStatus('sent')
			return null
		}
		
		router.push('/auth/error')
	}

	return (
		<form method="post" className="flex flex-col gap-4 w-full px-10 sm:max-w-md" onSubmit={handleSubmit(sendMagicLink)} noValidate>
			<div className="flex flex-col gap-1">
				<label className="font-medium" htmlFor="user-name">
					Seu nome
				</label>
				<input className="focus:outline-none focus:ring-2 ring-1 ring-indigo-500 rounded px-3 py-2" type="email" {...register('name')} id="user-name" placeholder="Ex: João da Silva" />
				{errors.name && (
					<span className="text-red-600 text-sm font-semibold">{errors.name.message}</span>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<label className="font-medium" htmlFor="user-email">
					Seu email
				</label>
				<input className="focus:outline-none focus:ring-2 ring-1 ring-indigo-500 rounded px-3 py-2" type="email" {...register('email')} id="user-email" placeholder="exemplo@email.com" />
				{errors.email && (
					<span className="text-red-600 text-sm font-semibold">{errors.email.message}</span>
				)}
			</div>
			{status === "sent" && (
				<div className="rounded bg-green-300 p-3 flex flex-col items-center">
					<span className="text-2xl flex items-center gap-1 text-green-600">
						<MdOutlineCheckCircle />
						<h1 className="text-base sm:text-lg font-bold text-black">Link de acesso enviado</h1>
					</span>
					<p className="text-sm font-medium sm:text-base">Confira seu email para prosseguir</p>
				</div>
			)}
			<button disabled={isSubmitting} type="submit" className="bg-indigo-500 active:bg-indigo-700 rounded py-2.5 font-semibold text-white text-sm disabled:bg-indigo-700">{isSubmitting ? 'Enviando...' : 'Confirmar'}</button>
		</form>
	)
}