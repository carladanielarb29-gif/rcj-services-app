'use client'

import { HorizontalCard } from "@/components/cardFeatures";
import { CardProducts } from "@/components/cardProducts";
import RcjCarousel from "@/components/carousel";
import YouTubeEmbed from "@/components/youtubeIframe";
import { chromasDta } from "@/data/chromas";
import { featureDta } from "@/data/feature";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <div className="w-full max-w-6xl mx-auto px-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <RcjCarousel />
      </div>

      {/* Sección 1 */}
      <Typography
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        ¿Quiénes somos?
      </Typography>

      <div className="px-4 sm:px-10">
        {featureDta.map((item, index) => (
          <HorizontalCard key={index} feature={item} />
        ))}
      </div>

      {/* Sección productos */}
      <Typography
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Áreas de servicios especializados que ofrecemos
      </Typography>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {chromasDta.map((item, index) => (
          <CardProducts key={index} product={item} />
        ))}
      </div>

      {/* Videos */}
      <Typography
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold"
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
