import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getOrganizations } from "@/services/HomeService";
import { Members } from "../types";

export const useHomeFeature = () => {
  const [HODMembers, setHODMembers] = useState<Members[]>([]);
  const [UIUXMembers, setUIUXMembers] = useState<Members[]>([]);
  const [AIMembers, setAIMembers] = useState<Members[]>([]);
  const [WebMembers, setWebMembers] = useState<Members[]>([]);
  const [MobileMembers, setMobileMembers] = useState<Members[]>([]);
  const [CyberMembers, setCyberMembers] = useState<Members[]>([]);
  const [StrategicMembers, setStrategicMembers] = useState<Members[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      try {
        const res = await getOrganizations();

        const filteredHOD = res.data.filter(
          (item: Members) => !item.title.includes("Staff of")
        );
        const filteredMainMembers = res.data.filter((item: Members) =>
          item.title.includes("Staff")
        );

        setHODMembers(filteredHOD);

        const filteredUIUX = filteredMainMembers.filter((item: Members) =>
          item.title.includes("UI/UX")
        );
        setUIUXMembers(filteredUIUX);

        const filteredAI = filteredMainMembers.filter((item: Members) =>
          item.title.includes("AI")
        );
        setAIMembers(filteredAI);

        const filteredWeb = filteredMainMembers.filter((item: Members) =>
          item.title.includes("Web")
        );
        setWebMembers(filteredWeb);

        const filteredMobile = filteredMainMembers.filter((item: Members) =>
          item.title.includes("Mobile")
        );
        setMobileMembers(filteredMobile);

        const filteredCyber = filteredMainMembers.filter((item: Members) =>
          item.title.includes("Cyber")
        );
        setCyberMembers(filteredCyber);

        const filteredStrategic = filteredMainMembers.filter((item: Members) =>
          item.title.includes("Strategic")
        );
        setStrategicMembers(filteredStrategic);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return {
    HODMembers,
    UIUXMembers,
    AIMembers,
    WebMembers,
    MobileMembers,
    CyberMembers,
    StrategicMembers,
    isLoading,
    data,
  };
};
