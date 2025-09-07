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

      <div className="h-[600px] w-[80%] m-auto">
        <RcjCarousel />
      </div>


      <Typography style={{ fontSize: 32, textAlign: "center" }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        ¿Quiénes somos?
      </Typography>

      <div className="ml-[10%] mr-[10%]">
        {featureDta.map((item, index) => (
          <HorizontalCard key={index} feature={item} />
        ))}
      </div>

      <Typography style={{ fontSize: 32, textAlign: "center" }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Áres de servicios especializados que ofrecemos:
      </Typography>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-auto">
        {chromasDta.map((item, index) => (
          <CardProducts key={index} product={item} />
        ))}
      </div>


      <Typography style={{ fontSize: 32, textAlign: "center" }} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Información de Metrología:
      </Typography>

      <div className="w-[900px] m-auto">
        <YouTubeEmbed videoId="muweCIH0WmQ" />
      </div>
      
      <div className="w-[900px] m-auto">
        <YouTubeEmbed videoId="1T5MtekacO8" />
      </div>
    </div>
  );
}
