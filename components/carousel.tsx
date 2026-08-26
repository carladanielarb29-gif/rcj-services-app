import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function RcjCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);;

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as any}
        autoplay={false}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/t1.jpg" alt="Bienvenido a R.C.J. Services" fill sizes="100vw" className="object-cover" priority />
            <div className='text-overlay'>
              <div className='flex flex-col gap-2 sm:gap-4'>
                <h1 className="text-lg sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  ¡BIENVENIDO A
                </h1>
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md">
                  R.C.J. SERVICES!
                </h2>
                <h1 className="text-xs sm:text-lg md:text-2xl">Metrología y calidad para la vida.</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full h-full'>
            <Image src="/images/t4.jpg" alt="Eventos y promociones de R.C.J. Services" fill sizes="100vw" className="object-cover" />
            <div className='text-overlay'>
              <div className='flex flex-col gap-2 sm:gap-4'>
                <h1 className="text-lg sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">EVENTOS</h1>
                <h1 className="text-xs sm:text-lg md:text-2xl">Conoce nuestros eventos y promociones especiales haciendo click <a href="/eventos" style={{ textDecoration: "underline" }}>aquí</a></h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/i1.jpg" alt="Servicios de calibración de R.C.J. Services" fill sizes="100vw" className="object-cover" />
            <div className='text-overlay'>
              <div className='flex flex-col gap-2 sm:gap-4'>
                <h1 className="text-lg sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">CALIBRACIONES</h1>
                <h1 className="text-xs sm:text-lg md:text-2xl">En R.C.J. Services ofrecemos servicios de calibración de alta calidad.</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/laboratorio1.jpg" alt="Capacitaciones y asesorías de R.C.J. Services" fill sizes="100vw" className="object-cover" />
            <div className='text-overlay'>
              <h1 className="text-lg sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">CAPACITACIONES Y ASESORÍAS</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 10 },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/t1.jpg" alt="Miniatura: ¿Quiénes somos?" fill sizes="(min-width: 640px) 25vw, 33vw" className="object-cover" />
            <h1 className="thumb-caption text-[10px] sm:text-sm lg:text-xl text-white drop-shadow-md">
              ¿QUIÉNES SOMOS?
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/t4.jpg" alt="Miniatura: Eventos" fill sizes="(min-width: 640px) 25vw, 33vw" className="object-cover" />
            <h1 className="thumb-caption text-[10px] sm:text-sm lg:text-xl text-white drop-shadow-md">
              EVENTOS
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/i1.jpg" alt="Miniatura: Calibraciones" fill sizes="(min-width: 640px) 25vw, 33vw" className="object-cover" />
            <h1 className="thumb-caption text-[10px] sm:text-sm lg:text-xl text-white drop-shadow-md">
              CALIBRACIONES
            </h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image src="/images/laboratorio1.jpg" alt="Miniatura: Asesorías" fill sizes="(min-width: 640px) 25vw, 33vw" className="object-cover" />
            <h1 className="thumb-caption text-[10px] sm:text-sm lg:text-xl text-white drop-shadow-md">
              ASESORÍAS
            </h1>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
