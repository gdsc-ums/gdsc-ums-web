import React from "react";

import Image from "next/image";

import GdscLogoLeft from "@/public/GDSC-LOGO-LEFT.png";
import GdscLogoRight from "@/public/GDSC-LOGO-RIGHT.png";

const HeaderSection = () => {
  return (
    <>
      <div id="header" className="relative mb-40 sm:mb-0">
        <div
          id="circle1"
          className="hidden sm:block absolute w-[139px] h-[139px] bg-blue-500/50 -ml-10 -mt-10 rounded-full animate-[scale-up_2s_ease-in-out_infinite] 
     -z-10"
        ></div>
        <div
          id="circle2"
          className="hidden sm:block absolute w-[78px] h-[78px] bg-yellow-500/60 ml-28 mt-40 rounded-full animate-[scale-up_2s_ease-in-out_infinite]"
        ></div>
        <div
          id="circle3"
          className="hidden sm:block absolute w-[78px] h-[78px] bg-green-500/60 right-0 bottom-0 mb-64 mr-[33px] rounded-full animate-[scale-up_3s_ease-in-out_infinite]"
        ></div>
        <div
          id="circle4"
          className="hidden sm:block absolute w-[204px] h-[204px] bg-red-500/60 right-0 bottom-0 mb-4 mr-[33px] rounded-full animate-[scale-up_2.5s_ease-in-out_infinite]"
        ></div>
        <div className="flex flex-col sm:flex-col-reverse sm:items-center sm:pt-[203px] sm:pb-[110px] sm:px-[33px]">
          <div
            id="logoImg"
            className="relative flex flex-row mt-[128px] mb-[83px] gap-5 mx-[22px]"
          >
            <Image
              src={GdscLogoLeft}
              alt="GDSC Logo"
              className="w-[200px] h-[160px] sm:w-[198px] sm:h-[218px] md:w-[396px] md:h-[435px]"
              priority
            />
            <Image
              src={GdscLogoRight}
              alt="GDSC Logo"
              className="w-[200px] h-[160px] sm:w-[198px] sm:h-[218px] md:w-[396px] md:h-[435px]"
              priority
            />
          </div>

          <div className="relative px-5 sm:text-center">
            <h1 className="text-[40px] font-normal leading-normal tracking-widest sm:tracking-wide">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span> Developer Student Club
            </h1>

            <h2 className="text-[24px] sm:text-[32px] font-normal leading-normal">
              University of
              <span className="inline-block border-2 border-yellow-500 px-1 rounded-full">
                Muhammadiyah Surakarta
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
