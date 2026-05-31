export function toWhatsappPhone(phone: string) {
  const normalized = phone.replace(/\D/g, "")
  return `55${normalized}`
}
