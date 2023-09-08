"use client";
import ProductSlider from "@/app/components/ProductSlider";
import Image from "next/image";
import React, { useState } from "react";
import { SIZES } from "../common";
import { FiHeart } from "react-icons/fi";

const product = () => {
  const [state, setState] = useState(-1);
  return (
    <div className="p-2 sm:px-8 sm:py-6">
      <div className="flex flex-wrap flex-col lg:flex-row sm:gap-x-12 mb-14">
        <div className="flex-1">
          <Image
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.1/h_515,c_limit/ac871484-8738-44cf-abbd-4d347ad536e9/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "700px",
              objectFit: "cover",
            }} // optional
            alt="home image"
          />
        </div>
        <div className="flex-1 max-w-lg">
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
          <button className="px-4 py-4 text-xs font-semibold rounded-full bg-black text-white hover:bg-gray-600 w-full max-w-xs">
            Add to Bag
          </button>
          <button className="px-4 py-4 text-xs font-semibold rounded-full border-2 border-gray-300  text-black hover:border-black w-full max-w-xs mt-2">
            <span className="flex justify-center items-center gap-1">
              Favorite <FiHeart />
            </span>
          </button>
          <div className="mt-4 max-w-xs">
            <p className="text-sm">
              Whenyou need a shoe that's ready 24/7, it's gotta be the Max Aura
              5. Inspired by the AJ3, this pair of kicks puts a modern spin on
              the classic. They're made from durable leather and textiles that
              sit atop a heel of Nike Air cushioning so you can walk, run or
              skate all day and still have fresh-feeling soles.
            </p>
            <div className="mt-4">
              <span className="text-sm font-semibold">Benefits</span>
              <p className="text-sm">- Jumpman label on tongue</p>
            </div>
          </div>
        </div>
      </div>
      <ProductSlider />
    </div>
  );
};

export default product;
