import React from "react";
import dynamic from "next/dynamic";
const HomeFeature = dynamic(() => import("@/features/Home"), { ssr: false });

const Homepage: React.FC = () => {
  return <HomeFeature />;
};

export default Homepage;
