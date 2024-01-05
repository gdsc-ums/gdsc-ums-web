import { toast } from "@/components/ui/use-toast";

export const useHomeFeature = () => {
  const handleClick = () => {
    toast({
      variant: "info",
      title: "This is a boilerplate",
    });
  };

  return {
    handleClick,
  };
};
