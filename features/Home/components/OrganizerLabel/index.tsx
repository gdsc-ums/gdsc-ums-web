import React from "react";

interface OrganizerLabelProps {
  title: string;
  subtitle: string;
}

const OrganizerLabel: React.FC<OrganizerLabelProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-medium">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default OrganizerLabel;
