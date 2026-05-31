export type ActionResponse<T = void> = Promise<
  | {
      success: true
      data?: T
    }
  | {
      success: false
      code: string
      message: string
    }
>
