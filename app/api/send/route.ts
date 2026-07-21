import { resend } from "@/lib/resend";
import { escapeHtml, validateContactForm } from "@/lib/contact-form";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

export async function POST(req: Request) {
  if (isRateLimited(getClientIp(req))) {
    return Response.json({ error: "Demasiadas solicitudes. Intenta de nuevo más tarde." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Cuerpo de la solicitud inválido." }, { status: 400 });
  }

  const validation = validateContactForm(body);
  if (!validation.valid) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  const { fullName, email, phone, company, taxId, message, product } = validation.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@rcj-services.com",
      replyTo: email,
      subject: "Solicitud de cotización",
      html: `<div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #2563eb;">📌 Nueva solicitud de cotización</h2>
      <p>
        El usuario <strong>${escapeHtml(fullName)}</strong> ha solicitado una cotización.
      </p>

      <h3>📋 Información del cliente</h3>
      <ul>
        <li><strong>Nombre completo:</strong> ${escapeHtml(fullName)}</li>
        <li><strong>Correo electrónico:</strong> ${escapeHtml(email)}</li>
        <li><strong>Teléfono:</strong> ${escapeHtml(phone)}</li>
        <li><strong>Empresa:</strong> ${escapeHtml(company)}</li>
        <li><strong>ID Fiscal:</strong> ${escapeHtml(taxId)}</li>
      </ul>

      <h3>📝 Descripción general de la solicitud:</h3>
      <p><strong>Tipo de solicitud:</strong> ${escapeHtml(product ?? "No especificado")}</p>
      <p>${escapeHtml(message)}</p>

      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        Este correo fue generado automáticamente desde la plataforma de
        solicitudes de cotización.
      </p>
    </div>`,
    });

    if (error) {
      console.error("Resend error sending quote request email:", error);
      return Response.json({ error: "No se pudo enviar el correo." }, { status: 502 });
    }

    return Response.json(data);
  } catch (err) {
    console.error("Unexpected error sending quote request email:", err);
    return Response.json({ error: "Ocurrió un error inesperado." }, { status: 500 });
  }
}
