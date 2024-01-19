import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { FreeMode } from "swiper/modules";

const ImageSwiper = () => {
  return (
    <Swiper
      freeMode={true}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={3}
      modules={[FreeMode]}
      className="lg:hidden sm:w-1/2 sm:mr-4"
    >
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/meiqly-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <img
          className="rounded select-none"
          src="/images/slider/shriem-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/yaseer-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/meiqly-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/afass-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/sudais-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/islam-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/meiqly-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/mosaad-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/meiqly-slide.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="rounded select-none"
          src="/images/slider/sudais-slide.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSwiper;
