'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Typography, Card, Button } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";

interface Equipo {
  id: string;
  nombre: string;
  numero_serie: string | null;
}

interface Solicitud {
  id: string;
  numero_solicitud: string;
  estado: "en_proceso" | "ejecutada";
  created_at: string;
}

const BRAND = "#337599";
const BRAND_DARK = "#003366";
const BRAND_HOVER = "#113c61";

export default function SolicitudDetailPage() {
  const params = useParams<{ id: string }>();
  const [solicitud, setSolicitud] = useState<Solicitud | null>(null);
  const [equipos, setEquipos] = useState<Equipo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`/api/solicitudes/${params.id}`);
        const body = await res.json();
        if (!res.ok) {
          throw new Error(body.error ?? "No se pudo obtener la solicitud.");
        }
        if (!cancelled) {
          setSolicitud(body.solicitud);
          setEquipos(body.equipos);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Ocurrió un error inesperado.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <Link
        href="/client/status"
        className="inline-flex items-center gap-1.5 text-sm font-medium w-fit transition-colors"
        style={{ color: BRAND }}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Volver a mis solicitudes
      </Link>

      <div className="text-center">
        <Typography
          variant="h4"
          className="font-bold"
          style={{ color: BRAND_DARK }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {solicitud ? `Solicitud ${solicitud.numero_solicitud}` : "Solicitud"}
        </Typography>
        {solicitud && (
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            <CheckCircleIcon className="h-4 w-4" />
            Ejecutada
          </span>
        )}
      </div>

      {loading && (
        <div className="flex justify-center py-16">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200"
            style={{ borderTopColor: BRAND }}
          />
        </div>
      )}

      {!loading && error && (
        <Card
          className="flex flex-row items-center gap-3 border border-red-200 bg-red-50 p-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <ExclamationTriangleIcon className="h-6 w-6 shrink-0 text-red-500" />
          <Typography
            className="text-red-700 text-sm sm:text-base"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {error}
          </Typography>
        </Card>
      )}

      {!loading && !error && equipos.length === 0 && (
        <Card
          className="flex flex-col items-center gap-3 py-12 px-4 text-center shadow-sm"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <WrenchScrewdriverIcon className="h-10 w-10 text-gray-300" />
          <Typography
            className="text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Esta solicitud no tiene equipos registrados.
          </Typography>
        </Card>
      )}

      {!loading && !error && equipos.length > 0 && (
        <ul className="flex flex-col gap-3">
          {equipos.map((equipo) => (
            <li key={equipo.id}>
              <Card
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-200 border-l-4 p-4 sm:p-5 shadow-sm"
                style={{ borderLeftColor: BRAND }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#e8f1f6" }}
                  >
                    <WrenchScrewdriverIcon className="h-5 w-5" style={{ color: BRAND }} />
                  </div>
                  <div className="min-w-0">
                    <Typography
                      className="font-semibold truncate"
                      style={{ color: BRAND_DARK }}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {equipo.nombre}
                    </Typography>
                    {equipo.numero_serie && (
                      <Typography
                        className="text-sm text-gray-500"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        N.º serie: {equipo.numero_serie}
                      </Typography>
                    )}
                  </div>
                </div>

                <a
                  href={`/api/solicitudes/${params.id}/equipos/${equipo.id}/certificado`}
                  className="w-full sm:w-auto shrink-0"
                >
                  <Button
                    size="sm"
                    className="flex w-full sm:w-auto items-center justify-center gap-2 normal-case shadow-md"
                    style={{ backgroundColor: BRAND_DARK }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_HOVER)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND_DARK)}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Descargar certificado
                  </Button>
                </a>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
