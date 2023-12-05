import React from "react";

const MoreNavbarItems = ({
  children,
  fontWeight,
  textColor,
}: {
  children: React.ReactNode;
  fontWeight?: string;
  textColor?: string;
}) => {
  return <div className={`pb-1 hover:cursor-pointer ${fontWeight} ${textColor}`}>{children}</div>;
};

export default MoreNavbarItems;
