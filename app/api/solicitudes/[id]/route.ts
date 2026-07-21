import { getCurrentClientEmail } from "@/lib/current-client";
import { getSolicitudDetailForEmail } from "@/lib/solicitudes";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const email = await getCurrentClientEmail();
  if (!email) {
    return Response.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const detail = await getSolicitudDetailForEmail(params.id, email);
    if (!detail) {
      return Response.json({ error: "Solicitud no encontrada." }, { status: 404 });
    }
    return Response.json(detail);
  } catch (err) {
    console.error("Error fetching solicitud detail:", err);
    return Response.json({ error: "No se pudo obtener la solicitud." }, { status: 500 });
  }
}
