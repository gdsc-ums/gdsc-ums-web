import React from "react";
import type { CardMemberLoaderProps } from "./types";

const CardMemberLoader: React.FC<CardMemberLoaderProps> = ({ lenght }) => {
  return (
    <div className="flex gap-5 flex-wrap">
      {Array.from({ length: lenght }).map((_, index) => (
        <div
          key={index}
          className="w-56 h-72 border rounded-md bg-gray-200 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default CardMemberLoader;
