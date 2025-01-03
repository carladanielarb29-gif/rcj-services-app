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

    <div className="flex flex-col gap-24">
      
        <div className="h-[600px] w-[80%] m-auto">
          <RcjCarousel />
        </div>


      <div className="ml-[10%] mr-[10%]">
        {featureDta.map((item, index) => (
          <HorizontalCard  key={index} feature={item}/>
        ))}
      </div>

      <Typography style={{ fontSize: 32, textAlign: "center" }}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Los más vendidos del mes
      </Typography>

      <div className="flex flex-row justify-center gap-24">
        {chromasDta.map((item, index) => (
          <CardProducts key={index} product={item} />
        ))}
      </div>

      <div className="w-[900px] m-auto">
        <YouTubeEmbed videoId="muweCIH0WmQ"/>
      </div>

    </div>

  );
}
