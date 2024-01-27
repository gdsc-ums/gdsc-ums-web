import React from "react";
import Header from "@/components/common/Header";

import OrganizerSection from "./section/OrganizerSection";
import { useHomeFeature } from "./hook";

const HomeFeature: React.FC = () => {
  const {
    HODMembers,
    UIUXMembers,
    AIMembers,
    WebMembers,
    MobileMembers,
    CyberMembers,
    StrategicMembers,
    isLoading,
  } = useHomeFeature();

  return (
    <>
      <Header title="Home" description="Home page" />
      <main className="overflow-x-hidden">
        <OrganizerSection
          AIMembers={AIMembers}
          CyberMembers={CyberMembers}
          HODMembers={HODMembers}
          MobileMembers={MobileMembers}
          StrategicMembers={StrategicMembers}
          UIUXMembers={UIUXMembers}
          WebMembers={WebMembers}
          isLoading={isLoading}
        />
      </main>
    </>
  );
};

export default HomeFeature;
