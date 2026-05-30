"use client"

import { ToastProvider } from "@heroui/react"
import type { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ToastProvider>{children}</ToastProvider>
}
