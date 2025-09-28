import { Resend } from 'resend';

const resend = new Resend('re_WRpYNHEy_7PAjrDKUCVHrxBvzTq2eic39');

export async function POST(req: Request) {
    const body = await req.json();
    try {
        console.log("Sending email with body:", body);
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'lccrcjservices@gmail.com',
            subject: 'Presentación de Queja',
            html: `<div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ color: "#2563eb" }}>📌 Presentación de Queja</h2>
      <p>
        El usuario <strong>${body.fullName}</strong> ha presentado una Queja a través de la plataforma de RCJ Services.
      </p>

      <h3>📋 Información del cliente</h3>
      <ul>
        <li><strong>Nombre completo:</strong> ${body.fullName}</li>
        <li><strong>Correo electrónico:</strong> ${body.email}</li>
        <li><strong>Teléfono:</strong> ${body.phone}</li>
        <li><strong>Empresa:</strong> ${body.company}</li>
        <li><strong>ID Fiscal:</strong> ${body.taxId}</li>
      </ul>


        <h3>📝 Descripción general del Queja:</h3>
        <p>${body.message}</p>

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        Este correo fue generado automáticamente desde la plataforma de quejas de RCJ Services.
      </p>
    </div>`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}