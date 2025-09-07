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
          <img src="/images/t1.jpg" />
          <div className='text-overlay'>
            <div className='flex flex-col gap-4'>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">¡BIENVENIDO A R.C.J. SERVICES!</h1>
              <h1 className="text-base sm:text-lg md:text-2xl">Metrología y calidad para la vida.</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full'>
            <img src="/images/t4.jpg" />
            <div className='text-overlay'>
              <div className='flex flex-col gap-4'>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">EVENTOS</h1>
                <h1 className="text-base sm:text-lg md:text-2xl">Conoce nuestros eventos y promociones especiales haciendo click <a href="/eventos" style={{ textDecoration: "underline" }}>aquí</a></h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/i1.jpg" />
          <div className='text-overlay'>
            <div className='flex flex-col gap-4'>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">CALIBRACIONES</h1>
              <h1 className="text-base sm:text-lg md:text-2xl">En R.C.J. Services ofrecemos servicios de calibración de alta calidad.</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/laboratorio1.jpg" />
          <div className='text-overlay'>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg">CAPACITACIONES Y ASESORÍAS</h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/t1.jpg" />
          <h1 className="text-overlay text-xs sm:text-sm lg:text-xl text-white drop-shadow-md">
            ¿QUIÉNES SOMOS?
          </h1>

        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/t4.jpg" />
          <h1 className="text-overlay text-xs sm:text-sm lg:text-xl text-white drop-shadow-md">
            EVENTOS
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/i1.jpg" />
          <h1 className="text-overlay text-xs sm:text-sm lg:text-xl text-white drop-shadow-md">
            CALIBRACIONES
          </h1>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/images/laboratorio1.jpg" />
          <h1 className="text-overlay text-xs sm:text-sm lg:text-xl text-white drop-shadow-md">
            ASESORÍAS
          </h1>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
