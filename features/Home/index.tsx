import React from "react";

import Header from "@/components/common/Header";

import { useHomeFeature } from "./hook";

import HeaderSection from "./section/HeaderSection";
import AboutSection from "./section/AboutSection";
import YellowDivider from "../../components/common/YellowDivider";
import ToggleMode from "./components/ToggleMode";

const HomeFeature: React.FC = () => {
  const { handleClick } = useHomeFeature();

  return (
    <>
      <Header title="Home" description="Home page" />
      <main className="overflow-x-hidden">
        <ToggleMode />
        <HeaderSection />
        <YellowDivider />
        <AboutSection />
      </main>
    </>
  );
};

export default HomeFeature;
