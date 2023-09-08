"use client";
import ProductSlider from "@/app/components/ProductSlider";
import Image from "next/image";
import React, { useState } from "react";
import { SIZES } from "../common";

const product = () => {
  const [state, setState] = useState(-1);
  return (
    <div className="sm:px-8 py-6">
      <div className="flex flex-wrap flex-col lg:flex-row gap-x-8 mb-14">
        <div className="flex-1">
          <Image
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/ac871484-8738-44cf-abbd-4d347ad536e9/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "500px", objectFit: "cover" }} // optional
            alt="home image"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">Jordan Max Aura 5</h1>
          <p className="text-sm">Men's shoe</p>
          <p className="font-bold mt-6">$399</p>
          <div className="my-6 max-w-xs">
            <h1 className="text-sm font-semibold">Select size</h1>
            <div className="grid grid-cols-3 gap-2">
              {SIZES?.map((size, index) => {
                return (
                  <div
                    className={`text-center p-2 rounded-sm border-2 ${
                      state === index ? "border-black" : "border-gray-200"
                    } cursor-pointer hover:border-black`}
                    onClick={() => setState(index)}
                  >
                    <p className="text-xs">{size?.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ProductSlider />
    </div>
  );
};

export default product;
