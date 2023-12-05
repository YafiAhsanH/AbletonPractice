import React from "react";

const PageNavigatorItem = ({
  children,
  textColor,
}: {
  children: React.ReactNode;
  textColor?: string;
}) => {
  return (
    <p className={`font-semibold text-sm hover:cursor-pointer ${textColor}`}>
      {children}
    </p>
  );
};

export default PageNavigatorItem;
