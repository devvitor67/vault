"use server"

import { AuthController } from "@/controllers/auth.controller"
import { AppError } from "@/shared/errors/app.errors"
import { auth } from "@/shared/lib/better-auth"
import type { ActionResponse } from "@/shared/schemas/action-response"
import { signInSchema } from "@/shared/schemas/auth"
import { validateInput } from "@/shared/utils/validate-input"

const controller = new AuthController(auth)

export async function signInAction(input: unknown): ActionResponse<{
  redirectTo: string
}> {
  try {
    const data = validateInput(input, signInSchema)

    await controller.login(data)

    return {
      success: true,
      data: {
        redirectTo: "/dashboard"
      }
    }
  } catch (error) {
    if (error instanceof AppError) {
      return {
        success: false,
        code: error.code,
        message: error.message
      }
    }

    console.error(error)

    return {
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: "Erro interno do servidor"
    }
  }
}
