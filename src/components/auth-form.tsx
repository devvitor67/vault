"use client"
import { signInSchema } from "@/schemas/auth"
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from "@heroui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useHookFormMask } from "use-mask-input"

export function AuthForm() {
  const form = useForm({
    resolver: zodResolver(signInSchema),
    reValidateMode: "onChange",
    mode: "onSubmit",
    defaultValues: {
      phone: "",
      password: ""
    }
  })
  const registerWithMask = useHookFormMask(form.register)

  return (
    <Form method="post" className="flex flex-col gap-2 w-full">
      <TextField>
        <div className="flex flex-col gap-1">
          <Label>Seu número</Label>
          <Input
            type="tel"
            {...registerWithMask("phone", "(99) 99999-9999")}
            autoFocus
            placeholder="Ex.: (19) 98312-3965"
          />
          <FieldError>{form.formState.errors.phone?.message}</FieldError>
        </div>
      </TextField>
      <TextField>
        <div className="flex flex-col gap-1">
          <Label>Sua senha</Label>
          <Input type="password" placeholder="Mínimo de 6 caracteres" />
          <FieldError>{form.formState.errors.password?.message}</FieldError>
        </div>
      </TextField>
      <Button className="w-full">Continuar</Button>
    </Form>
  )
}
