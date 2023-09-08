import Image from "next/image";
import Link from "next/link";
import React from "react";

const Trending = () => {
  return (
    <div className="my-12">
      <h1 className="text-xl mb-4">Trending</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-1">
          <Image
            src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_778,c_limit/f276a8cb-7292-45d0-b494-abfbdd0e0734/nike-just-do-it.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
          />
          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-sm">Dropping on App:31 August</p>
            <p className="mb-6 text-xl">Vaporfly Next%3 EK</p>
            <Link href="#">
              <button className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-600">
                Get it first
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_778,c_limit/6b062282-8352-48f1-9119-f55786cdac24/nike-just-do-it.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
          />
          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-sm">Icon Made Fresh</p>
            <p className="mb-6 text-xl">Nike Killshot 2 Leather</p>
            <Link href="#">
              <button className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-600">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
