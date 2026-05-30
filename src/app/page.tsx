import { AuthForm } from "@/components/auth-form"

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <div className="flex flex-col gap-4 m-auto">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold">Acesse sua conta</h1>
          <h2 className="text-base font-medium">
            Digite seu número de celular para receber o código
          </h2>
        </div>
        <AuthForm />
      </div>
    </main>
  )
}
