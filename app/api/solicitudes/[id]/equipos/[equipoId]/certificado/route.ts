import { getCurrentClientEmail } from "@/lib/current-client";
import { getCertificadoPathForEmail } from "@/lib/solicitudes";
import { getSupabaseAdmin } from "@/lib/supabase";

const SIGNED_URL_TTL_SECONDS = 60;

export async function GET(
  _req: Request,
  { params }: { params: { id: string; equipoId: string } }
) {
  const email = await getCurrentClientEmail();
  if (!email) {
    return Response.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const certificadoPath = await getCertificadoPathForEmail(params.id, params.equipoId, email);
    if (!certificadoPath) {
      return Response.json({ error: "Certificado no encontrado." }, { status: 404 });
    }

    const filename = certificadoPath.split("/").pop() ?? "certificado.pdf";
    const { data, error } = await getSupabaseAdmin().storage
      .from("certificados")
      .createSignedUrl(certificadoPath, SIGNED_URL_TTL_SECONDS, { download: filename });

    if (error || !data) {
      console.error("Error creating signed URL for certificado:", error);
      return Response.json({ error: "No se pudo generar el enlace de descarga." }, { status: 502 });
    }

    return Response.redirect(data.signedUrl);
  } catch (err) {
    console.error("Error downloading certificado:", err);
    return Response.json({ error: "Ocurrió un error inesperado." }, { status: 500 });
  }
}
