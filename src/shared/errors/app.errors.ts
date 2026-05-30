export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string
  ) {
    super(message)
  }
}

export class ExternalServiceError extends AppError {
  constructor(message: string = "Erro no serviço externo") {
    super(502, "EXTERNAL_SERVICE_ERROR", message)
  }
}

export class BetterAuthError extends AppError {
  constructor(statusCode: number, message: string) {
    super(statusCode, "BETTER_AUTH_ERROR", message)
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Acesso negado") {
    super(401, "UNAUTHORIZED", message)
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message: string = "Não possui permissão para realizar essa ação"
  ) {
    super(403, "FORBIDDEN", message)
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = "Erro interno no servidor") {
    super(500, "INTERNAL_SERVER_ERROR", message)
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Requisição inválida") {
    super(400, "BAD_REQUEST", message)
  }
}
