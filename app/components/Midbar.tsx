import Link from "next/link";
import React from "react";

const Midbar = () => {
  return (
    <div className="w-full my-6 sm:my-0 sm:p-8 flex justify-center items-center flex-col">
      <h1 className="font-black text-2xl sm:text-5xl">GET YOUR PAIRS</h1>
      <p className="my-4 text-gray-700 text-center">
        The season is here. Start yours prepared with the best in touch,
        agility, precision and speed.
      </p>
      <Link href="#">
        <button className="px-4 py-2 font-semibold rounded-full bg-black text-white hover:bg-gray-600">
          Shop all
        </button>
      </Link>
    </div>
  );
};

export default Midbar;
