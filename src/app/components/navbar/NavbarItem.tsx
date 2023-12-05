import React, { MouseEventHandler } from "react";

const NavbarItem = ({
  children,
  textColor = "text-black",
  fontSize = "text-base",
  onClick,
}: {
  children: React.ReactNode;
  textColor?: string;
  fontSize?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <div
      className={`px-4 font-medium hover:cursor-pointer ${textColor} ${fontSize}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NavbarItem;
