'use client'

import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
import { MdOutlineCheckCircle } from "react-icons/md"

export default function AuthSuccessPage() {
	const [seconds, setSeconds] = useState<number>(5)
	const { push } = useRouter()

	useEffect(() => {
		if (seconds <= 0) {
			push('/dashboard')
			return
		}

		const interval = setInterval(() => {
			setSeconds(prev => prev - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [seconds, push])

	return (
		<main className="flex flex-col items-center justify-center min-h-dvh bg-gray-100">
			<div className="flex flex-col gap-1 items-center">
				<span className="text-5xl text-green-600">
					<MdOutlineCheckCircle />
				</span>
				<div className="flex flex-col items-center">
					<strong className="text-lg">Autenticação bem-sucedida</strong>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-lg text-center text-balance font-medium text-black/70">Aguarde o redirecionamento ({seconds})</p>
			</div>
		</main>
	)
}