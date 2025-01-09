'use client';
import { cast } from '@/constants/cast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {  useRef } from 'react';
import { ImageWithFallBack } from '@/components/shared/ImageWithFallBack';
import { getPosterPath } from '@/utils/getPosterPath';
import ArrowRight from '@/public/icons/ArrowRight';
import ArrowLeft from '@/public/icons/ArrowLeft';

const Cast = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="max-w-full mt-10">
      <h3 className="headerBorder relative mb-8">Cast</h3>
      <div className="relative w-full">
        <button
          ref={prevRef}
          className="mdl:size-8 absolute left-8 top-1/2 z-[2] flex size-6 -translate-y-1/2 transform items-center justify-center rounded-md bg-white text-white transition active:scale-90 disabled:opacity-50"
        >
          <ArrowLeft />
        </button>
        <button
          ref={nextRef}
          className="mdl:size-8 absolute right-8 top-1/2 z-[2] flex size-6 -translate-y-1/2 transform items-center justify-center rounded-md bg-white text-white transition active:scale-90 disabled:opacity-50"
        >
          <ArrowRight />
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== 'boolean'
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: 2, 
            },
            640: {
              slidesPerView: 6, 
            },
            1024: {
              slidesPerView: 8, 
            },
            1280: {
              slidesPerView: 10, 
            },
          }}
          className="w-full"
          spaceBetween={15}
          slidesPerView={'auto'}
          grabCursor={true}
        >
          {cast.crew.map((cast) => (
            <SwiperSlide
              key={cast.credit_id}
              className="group relative !h-auto overflow-hidden rounded-md"
            >
              {/* Cast Image */}
              <ImageWithFallBack
                src={getPosterPath(cast.profile_path)}
                alt={cast.name}
                width={200}
                height={250}
                fallbackSrc="/images/placeholder.png"
                className="rounded-md object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Cast Name with smooth transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 group-hover:opacity-100">
                  <h4 className="text-center text-lg font-semibold">
                    {cast.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cast;
