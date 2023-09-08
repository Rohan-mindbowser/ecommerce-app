"use client";
import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsSlider = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/ac871484-8738-44cf-abbd-4d347ad536e9/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/a5acfc22-bbb0-4630-ba26-a6593d45ebc5/jordan-1-mid-younger-shoes-FKKgKz.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
        <Image
          src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/889d7ede-9a1a-4127-9aae-450a84a355ea/legend-essential-3-next-nature-workout-shoes-sJBRlm.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          alt="home image"
        />
      </Carousel>
    </div>
  );
};

export default ProductDetailsSlider;
