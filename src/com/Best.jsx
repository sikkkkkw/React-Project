import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Best() {
  return (
    <div className="w-full flex justify-center bg-[#1B354A]">
      {/* 이미지 div */}
      <div className="relative w-[1300px] h-[350px] bg-[url('https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg')] bg-center bg-cover flex px-12 py-12 transition-all duration-300 ">
        <div className="flex flex-col">
          <h2 className="z-10 mt-10 m-0 p-0 font-bold text-white relative">
            <span className="text-while text-5xl">
              That's a
              <br />
              Wrap 2024
            </span>
          </h2>
          <p className="text-[20px] text-white">
            The best (and worst) of the year from TMDB.
          </p>
          <button className="flex items-center justify-center p-2 mt-4  rounded-3xl border-2 text-[18px] w-[150px] h-[40px] text-white">
            Check it out
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
