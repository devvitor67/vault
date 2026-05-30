"use client"
import { signInAction } from "@/actions/sign-in.action"
import { signInSchema } from "@/shared/schemas/auth"
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast
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

  const onSubmit = form.handleSubmit(async (data) => {
    const result = await signInAction(data)

    if (!result.success) {
      toast.danger(result.message, {
        description: JSON.stringify({
          code: result.code
        })
      })
      return
    }

    toast.success("Código enviado com sucesso")
    return
  })

  return (
    <Form
      onSubmit={onSubmit}
      method="post"
      className="flex flex-col gap-2 w-full">
      <TextField isInvalid={!!form.formState.errors.phone}>
        <div className="flex flex-col gap-1">
          <Label>Seu número</Label>
          <Input type="tel" {...registerWithMask("phone", "(99) 99999-9999")} />
          <FieldError>{form.formState.errors.phone?.message}</FieldError>
        </div>
      </TextField>
      <TextField isInvalid={!!form.formState.errors.password}>
        <div className="flex flex-col gap-1">
          <Label>Sua senha</Label>
          <Input
            {...form.register("password")}
            type="password"
            placeholder="Mínimo de 6 caracteres"
          />
          <FieldError>{form.formState.errors.password?.message}</FieldError>
        </div>
      </TextField>
      <Button type="submit" className="w-full">
        Continuar
      </Button>
    </Form>
  )
}
