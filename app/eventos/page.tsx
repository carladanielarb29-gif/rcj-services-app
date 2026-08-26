'use client'

import { Typography } from "@material-tailwind/react";
import YouTubeEmbed from "@/components/youtubeIframe";

export default function Eventos() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto px-4 pb-12">
      <Typography
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Eventos y promociones
      </Typography>

      <Typography
        className="text-center text-gray-700"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Próximamente anunciaremos aquí los eventos, capacitaciones y promociones especiales de RCJ Services.
      </Typography>

      <div className="flex flex-col gap-4 mt-4">
        <Typography
          variant="h5"
          className="text-center"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Capacitación: uso correcto del Vernier
        </Typography>

        <YouTubeEmbed videoId="1T5MtekacO8" />

        <Typography
          className="text-center text-gray-700"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Errores presentes en la medición de longitud usando un Vernier o Pie de Rey.
        </Typography>
      </div>
    </div>
  );
}
