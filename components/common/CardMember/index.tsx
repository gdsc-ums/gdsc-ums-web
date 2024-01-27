import React from "react";
import Image from "next/image";
import type { CardMembersProps } from "./types";

const CardMember: React.FC<CardMembersProps> = (props) => {
  return (
    <div className="relative w-56 h-72 rounded-xl drop-shadow-md shadow-md bg-transparent flex-1">
      <Image
        src={props.photo}
        alt={props.name}
        width={500}
        height={500}
        className="object-cover w-full h-full rounded-xl absolute"
      />
      <div className="h-full w-full relative">
        <div className="px-4 pb-3 text-white h-full flex flex-col items-start justify-end gap-2 relative z-20">
          <h1 className="font-bold lg:text-base text-sm">{props.name}</h1>
          <p
            className={`font-bold lg:text-sm text-xs ${
              props.isMobile ? "h-8" : "h-12"
            }`}
          >
            {props.title}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent z-10 to-black/60 h-full w-full rounded-xl" />
      </div>
    </div>
  );
};

export default CardMember;
