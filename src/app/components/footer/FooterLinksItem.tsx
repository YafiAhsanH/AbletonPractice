import React from "react";

const FooterLinksItem = ({
  children,
  active = true,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={`text-xs font-semibold ${active && "hover:cursor-pointer"}`}
    >
      {children}
    </div>
  );
};

export default FooterLinksItem;
