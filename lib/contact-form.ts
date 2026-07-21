const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SHORT_LEN = 200;
const MAX_MESSAGE_LEN = 3000;

export interface ContactFormPayload {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  taxId: string;
  message: string;
  product?: string;
}

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isNonEmptyString(value: unknown, maxLen: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLen;
}

export function validateContactForm(body: unknown): { valid: true; data: ContactFormPayload } | { valid: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { valid: false, error: "Cuerpo de la solicitud inválido." };
  }

  const b = body as Record<string, unknown>;

  if (!isNonEmptyString(b.fullName, MAX_SHORT_LEN)) {
    return { valid: false, error: "El nombre completo es requerido." };
  }
  if (!isNonEmptyString(b.email, MAX_SHORT_LEN) || !EMAIL_REGEX.test(b.email.trim())) {
    return { valid: false, error: "El correo electrónico es inválido." };
  }
  if (!isNonEmptyString(b.phone, MAX_SHORT_LEN)) {
    return { valid: false, error: "El teléfono es requerido." };
  }
  if (!isNonEmptyString(b.company, MAX_SHORT_LEN)) {
    return { valid: false, error: "La empresa es requerida." };
  }
  if (!isNonEmptyString(b.taxId, MAX_SHORT_LEN)) {
    return { valid: false, error: "El ID fiscal es requerido." };
  }
  if (b.message !== undefined && typeof b.message === "string" && b.message.length > MAX_MESSAGE_LEN) {
    return { valid: false, error: "El mensaje es demasiado largo." };
  }
  if (b.product !== undefined && (typeof b.product !== "string" || b.product.length > MAX_SHORT_LEN)) {
    return { valid: false, error: "El producto indicado es inválido." };
  }

  return {
    valid: true,
    data: {
      fullName: (b.fullName as string).trim(),
      email: (b.email as string).trim(),
      phone: (b.phone as string).trim(),
      company: (b.company as string).trim(),
      taxId: (b.taxId as string).trim(),
      message: typeof b.message === "string" ? b.message.trim() : "",
      product: typeof b.product === "string" ? b.product.trim() : undefined,
    },
  };
}
