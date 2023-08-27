import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      className="mySwiper h-[300px]"
    >
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
      <SwiperSlide className="w-full bg-red-500">Slide 1</SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
