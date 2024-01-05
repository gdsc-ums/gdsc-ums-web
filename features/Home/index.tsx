import React from "react";

import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { useHomeFeature } from "./hook";

const HomeFeature: React.FC = () => {
  const { handleClick } = useHomeFeature();

  return (
    <>
      <Header title="Home" description="Home page" />
      <main className="h-[100vh] flex-col w-full flex justify-center items-center">
        <Button onClick={handleClick}>Hello World</Button>
      </main>
    </>
  );
};

export default HomeFeature;
