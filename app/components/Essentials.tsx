import Image from "next/image";
import Link from "next/link";
import React from "react";

const Essentials = () => {
  return (
    <div className="mt-6 sm:mt-2">
      <h2 className="text-xl mb-6">The Essentials</h2>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="relative flex-1">
          <Image
            src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
            className="hover:opacity-95 transition-all"
          />
          <Link href="#">
            <button className="px-4 py-2 font-semibold rounded-full bg-black text-white hover:bg-gray-600 absolute bottom-6 left-6">
              Womens
            </button>
          </Link>
        </div>

        <div className="relative flex-1">
          <Image
            src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
            className="hover:opacity-95 transition-all"
          />
          <Link href="#">
            <button className="px-4 py-2 font-semibold rounded-full bg-black text-white hover:bg-gray-600 absolute bottom-6 left-6">
              Kids
            </button>
          </Link>
        </div>

        <div className="relative flex-1">
          <Image
            src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
            className="hover:opacity-95 transition-all"
          />
          <Link href="#">
            <button className="px-4 py-2 font-semibold rounded-full bg-black text-white hover:bg-gray-600 absolute bottom-6 left-6">
              Mens
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
