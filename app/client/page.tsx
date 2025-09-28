'use client'

import { CardProducts } from "@/components/cardProducts";
import YouTubeEmbed from "@/components/youtubeIframe";
import { clientActions } from "@/data/client-actions";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">

      <Typography
        id="servicios"
        className="text-xl sm:text-xl lg:text-2xl text-center font-bold"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        ¡Bienvenido al portal para clientes de RCJ Services!
      </Typography>


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {clientActions.map((item, index) => (
          <CardProducts key={index} product={item} action={item.action} />
        ))}
      </div>

      {/* Videos */}
      <Typography
        id="info"
        className="text-xl sm:text-xl lg:text-2xl text-center font-bold"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Información de Metrología
      </Typography>

      <div className="w-full max-w-4xl mx-auto px-4">
        <YouTubeEmbed videoId="muweCIH0WmQ" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4">
        <YouTubeEmbed videoId="1T5MtekacO8" />
      </div>

    </div>
  );
}
