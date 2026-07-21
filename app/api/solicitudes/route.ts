import { getCurrentClientEmail } from "@/lib/current-client";
import { getSolicitudesForEmail } from "@/lib/solicitudes";

export async function GET() {
  const email = await getCurrentClientEmail();
  if (!email) {
    return Response.json({ error: "No autenticado." }, { status: 401 });
  }

  try {
    const solicitudes = await getSolicitudesForEmail(email);
    return Response.json({ solicitudes });
  } catch (err) {
    console.error("Error fetching solicitudes:", err);
    return Response.json({ error: "No se pudieron obtener las solicitudes." }, { status: 500 });
  }
}
