import React from "react";

import Marquee from "react-fast-marquee";

const YellowDivider = () => {
  return (
    <>
      <div
        id="dividerYellow"
        className="hidden sm:block skew-y-3 bg-yellow-500"
      >
        <Marquee className="flex flex-row items-center py-[6px]">
          <p className="text-white mx-2 text-base md:text-xl md:leading-normal lg:text-[40px] lg:leading-normal lg:mx-4">
            #We Grow, We Learn, and We Connect.
          </p>
          <div className="w-2 h-2 lg:w-4 lg:h-4 bg-white rounded-full"></div>
          <p className="text-white mx-2 text-base md:text-xl md:leading-normal lg:text-[40px] lg:leading-normal lg:mx-4">
            #We Grow, We Learn, and We Connect.
          </p>
          <div className="w-2 h-2 lg:w-4 lg:h-4 bg-white rounded-full"></div>
          <p className="text-white mx-2 text-base md:text-xl md:leading-normal lg:text-[40px] lg:leading-normal lg:mx-4">
            #We Grow, We Learn, and We Connect.
          </p>
          <div className="w-2 h-2 lg:w-4 lg:h-4 bg-white rounded-full"></div>
        </Marquee>
      </div>
    </>
  );
};

export default YellowDivider;
