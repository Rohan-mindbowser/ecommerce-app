import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="px-8 py-4 flex justify-between items-center">
      <Link href="#" className="font-bold text-2xl">
        Logo
      </Link>
      <div className="hidden sm:block">
        <div className="flex gap-6">
          <Link href="#">New & Featured</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">SNKRS</Link>
        </div>
      </div>
      <div className="text-[30px] flex gap-4">
        <div className="relative">
          <FiHeart />
          <div className="bg-red-500 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            9+
          </div>
        </div>

        <div className="relative">
          <AiOutlineShopping />
          <div className="bg-red-500 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            9+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
