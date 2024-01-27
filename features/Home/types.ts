export interface Members {
  name: string;
  title: string;
  photo: string;
}

export interface OrganizerSectionProps {
  HODMembers: Members[];
  UIUXMembers: Members[];
  AIMembers: Members[];
  WebMembers: Members[];
  MobileMembers: Members[];
  CyberMembers: Members[];
  StrategicMembers: Members[];
  isLoading: boolean;
}
