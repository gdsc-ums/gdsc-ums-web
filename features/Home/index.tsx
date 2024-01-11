import React, { useEffect } from "react";

import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { useHomeFeature } from "./hook";

const HomeFeature: React.FC = () => {
  const { handleClick } = useHomeFeature();

  const getEvent = async () => {
    try {
      const res = await fetch(
        "https://gdsc.community.dev/api/event_slim/?chapter=3972&page_size=4&status=Completed&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,cropped_picture_url,cropped_banner_url,url,cohost_registration_url,description,description_short&page=1"
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

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
