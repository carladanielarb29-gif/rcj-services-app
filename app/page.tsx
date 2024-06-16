'use client'


import { CardDefault } from "@/components/card";
import RcjCarousel from "@/components/carousel";
import YouTubeEmbed from "@/components/youtubeIframe";
import { chromasDta } from "@/data/chromas";

export default function Home() {
  return (

    <div className="flex flex-col gap-24">
      
        <div className="h-[600px] w-[80%] m-auto">
          <RcjCarousel />
        </div>

      <div className="flex flex-row justify-center gap-24">
        {chromasDta.map((item, index) => (
          <CardDefault key={index} product={item} />
        ))}
      </div>

      <div className="w-[900px] m-auto">
        <YouTubeEmbed videoId="muweCIH0WmQ"/>
      </div>

    </div>

  );
}
