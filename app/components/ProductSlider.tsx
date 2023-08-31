"use client";
import React from "react";
import "swiper/css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductSlider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="mb-12"
    >
      <div className="w-full px-2">
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/ac871484-8738-44cf-abbd-4d347ad536e9/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <div className="flex justify-between mt-2">
          <h1>Nike Revolution 6 FlyEase</h1>
          <span>₹ 3 695</span>
        </div>
        <h1 className="text-gray-500">Men's Easy On/Off Road Running Shoes</h1>
      </div>
      <div className="w-full px-2">
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/a5acfc22-bbb0-4630-ba26-a6593d45ebc5/jordan-1-mid-younger-shoes-FKKgKz.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <div className="flex justify-between mt-2">
          <h1>Nike Revolution 6 FlyEase</h1>
          <span>₹ 3 695</span>
        </div>
        <h1 className="text-gray-500">Men's Easy On/Off Road Running Shoes</h1>
      </div>
      <div className="w-full px-2">
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/889d7ede-9a1a-4127-9aae-450a84a355ea/legend-essential-3-next-nature-workout-shoes-sJBRlm.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <div className="flex justify-between mt-2">
          <h1>Nike Revolution 6 FlyEase</h1>
          <span>₹ 3 695</span>
        </div>
        <h1 className="text-gray-500">Men's Easy On/Off Road Running Shoes</h1>
      </div>
      <div className="w-full px-2">
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/81183b86-63a5-47b0-bc6b-cf54b456a858/nikecourt-legacy-older-shoes-dBCJpZ.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <div className="flex justify-between mt-2">
          <h1>Nike Revolution 6 FlyEase</h1>
          <span>₹ 3 695</span>
        </div>
        <h1 className="text-gray-500">Men's Easy On/Off Road Running Shoes</h1>
      </div>
      <div className="w-full px-2">
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/f9aec2b4-e2b6-45bf-b0cd-99574d0266cd/revolution-6-road-running-shoes-vjrrwc.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <div className="flex justify-between mt-2">
          <h1>Nike Revolution 6 FlyEase</h1>
          <span>₹ 3 695</span>
        </div>
        <h1 className="text-gray-500">Men's Easy On/Off Road Running Shoes</h1>
      </div>
    </Carousel>
  );
};

export default ProductSlider;
