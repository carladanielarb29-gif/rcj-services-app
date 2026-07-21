'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { Typography, Card } from "@material-tailwind/react";
import {
  CheckCircleIcon,
  ClockIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

interface Solicitud {
  id: string;
  numero_solicitud: string;
  estado: "en_proceso" | "ejecutada";
  created_at: string;
}

const BRAND = "#337599";
const BRAND_DARK = "#003366";

function EstadoBadge({ estado }: { estado: Solicitud["estado"] }) {
  const isEjecutada = estado === "ejecutada";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold whitespace-nowrap ${
        isEjecutada
          ? "bg-green-100 text-green-700"
          : "bg-amber-100 text-amber-700"
      }`}
    >
      {isEjecutada ? (
        <CheckCircleIcon className="h-4 w-4" />
      ) : (
        <ClockIcon className="h-4 w-4" />
      )}
      {isEjecutada ? "Ejecutada" : "En proceso"}
    </span>
  );
}

export default function StatusPage() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/solicitudes");
        const body = await res.json();
        if (!res.ok) {
          throw new Error(body.error ?? "No se pudieron obtener las solicitudes.");
        }
        if (!cancelled) {
          setSolicitudes(body.solicitudes);
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
  }, []);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <Typography
          variant="h4"
          className="font-bold"
          style={{ color: BRAND_DARK }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Estado de mis solicitudes
        </Typography>
        <Typography
          className="text-gray-500 mt-1 text-sm sm:text-base"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Consulta el avance de tus solicitudes de calibración.
        </Typography>
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

      {!loading && !error && solicitudes.length === 0 && (
        <Card
          className="flex flex-col items-center gap-3 py-12 px-4 text-center shadow-sm"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <InboxIcon className="h-10 w-10 text-gray-300" />
          <Typography
            className="text-gray-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Todavía no tienes solicitudes registradas.
          </Typography>
        </Card>
      )}

      {!loading && !error && solicitudes.length > 0 && (
        <ul className="flex flex-col gap-3">
          {solicitudes.map((solicitud) => {
            const isEjecutada = solicitud.estado === "ejecutada";

            const cardContent = (
              <Card
                className={`flex-row items-center justify-between gap-3 border border-gray-200 border-l-4 p-4 sm:p-5 shadow-sm transition-all ${
                  isEjecutada
                    ? "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                    : "opacity-80"
                }`}
                style={{ borderLeftColor: isEjecutada ? BRAND : "#d1d5db" }}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div className="flex flex-col min-w-0">
                  <Typography
                    className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    Solicitud
                  </Typography>
                  <Typography
                    className="font-semibold truncate"
                    style={{ color: BRAND_DARK }}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {solicitud.numero_solicitud}
                  </Typography>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                  <EstadoBadge estado={solicitud.estado} />
                  {isEjecutada && (
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </Card>
            );

            return (
              <li key={solicitud.id}>
                {isEjecutada ? (
                  <Link href={`/client/status/${solicitud.id}`} className="block">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
