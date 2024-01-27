import React from "react";
import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa";

const MarqueeBlueGreen: React.FC = () => {
  return (
    <>
      <div className="-rotate-2 mb-2">
        <Marquee autoFill className="bg-blue-500">
          <div className="w-full text-white flex items-center justify-center gap-3">
            <FaCircle />
            <h1 className="lg:text-[40px] text-3xl lg:py-1 py-2 mr-3">
              Meet Our Teams
            </h1>
          </div>
        </Marquee>
      </div>
      <div className="-rotate-2">
        <Marquee autoFill className="bg-[#0F9D58]">
          <div className="w-full text-white flex items-center justify-center gap-3">
            <FaCircle className="h-2 w-2" />
            <h1 className="text-sm mr-3">
              The lineup that empowers, enlightens, and nurtures student
              developers in UMS!
            </h1>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeBlueGreen;
