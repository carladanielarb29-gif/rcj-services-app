import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  taxId: string;
  message?: string;
}

export function EmailTemplate({
  fullName,
  email,
  phone,
  company,
  taxId,
  message,
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h2 style={{ color: "#2563eb" }}>📌 Nueva solicitud de cotización</h2>
      <p>
        El usuario <strong>{fullName}</strong> ha solicitado una cotización.
      </p>

      <h3>📋 Información del cliente</h3>
      <ul>
        <li><strong>Nombre completo:</strong> {fullName}</li>
        <li><strong>Correo electrónico:</strong> {email}</li>
        <li><strong>Teléfono:</strong> {phone}</li>
        <li><strong>Empresa:</strong> {company}</li>
        <li><strong>ID Fiscal:</strong> {taxId}</li>
      </ul>

      {message && (
        <>
          <h3>📝 Descripción general de la solicitud:</h3>
          <p>{message}</p>
        </>
      )}

      <p style={{ marginTop: "20px", fontSize: "12px", color: "#666" }}>
        Este correo fue generado automáticamente desde la plataforma de
        solicitudes de cotización.
      </p>
    </div>
  );
}
