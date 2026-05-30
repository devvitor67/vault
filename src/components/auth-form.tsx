import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from "@heroui/react"

export function AuthForm() {
  return (
    <Form method="post" className="flex flex-col gap-2 w-full">
      <TextField>
        <div className="flex flex-col gap-1">
          <Label>Seu número</Label>
          <Input autoFocus placeholder="Ex.: (19) 98312-3965" />
          <FieldError />
        </div>
      </TextField>
      <Button className="w-full">Continuar</Button>
    </Form>
  )
}
