import "server-only";
import { getSupabaseAdmin } from "@/lib/supabase";

export interface Solicitud {
  id: string;
  numero_solicitud: string;
  estado: "en_proceso" | "ejecutada";
  created_at: string;
}

export interface Equipo {
  id: string;
  nombre: string;
  numero_serie: string | null;
}

export async function getSolicitudesForEmail(email: string): Promise<Solicitud[]> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("solicitudes")
    .select("id, numero_solicitud, estado, created_at")
    .eq("client_email", email)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch solicitudes: ${error.message}`);
  }

  return data ?? [];
}

export async function getSolicitudDetailForEmail(
  solicitudId: string,
  email: string
): Promise<{ solicitud: Solicitud; equipos: Equipo[] } | null> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data: solicitud, error: solicitudError } = await supabaseAdmin
    .from("solicitudes")
    .select("id, numero_solicitud, estado, created_at")
    .eq("id", solicitudId)
    .eq("client_email", email)
    .eq("estado", "ejecutada")
    .maybeSingle();

  if (solicitudError) {
    throw new Error(`Failed to fetch solicitud: ${solicitudError.message}`);
  }
  if (!solicitud) {
    return null;
  }

  const { data: equipos, error: equiposError } = await supabaseAdmin
    .from("items_solicitud")
    .select("id, nombre, numero_serie")
    .eq("solicitud_id", solicitud.id)
    .order("nombre", { ascending: true });

  if (equiposError) {
    throw new Error(`Failed to fetch equipos: ${equiposError.message}`);
  }

  return { solicitud, equipos: equipos ?? [] };
}

export async function getCertificadoPathForEmail(
  solicitudId: string,
  equipoId: string,
  email: string
): Promise<string | null> {
  const supabaseAdmin = getSupabaseAdmin();
  const { data: solicitud, error: solicitudError } = await supabaseAdmin
    .from("solicitudes")
    .select("id")
    .eq("id", solicitudId)
    .eq("client_email", email)
    .eq("estado", "ejecutada")
    .maybeSingle();

  if (solicitudError) {
    throw new Error(`Failed to fetch solicitud: ${solicitudError.message}`);
  }
  if (!solicitud) {
    return null;
  }

  const { data: equipo, error: equipoError } = await supabaseAdmin
    .from("items_solicitud")
    .select("certificado_path")
    .eq("id", equipoId)
    .eq("solicitud_id", solicitudId)
    .maybeSingle();

  if (equipoError) {
    throw new Error(`Failed to fetch equipo: ${equipoError.message}`);
  }

  return equipo?.certificado_path ?? null;
}
