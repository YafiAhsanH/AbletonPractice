import React, { MouseEventHandler } from "react";
import MoreNavbar from "./MoreNavbar";

const NavbarItem = ({
  children,
  textColor = "text-black",
  fontSize = "text-base",
  moreNavbar = false,
  onClick,
}: {
  children: React.ReactNode;
  textColor?: string;
  fontSize?: string;
  onClick?: MouseEventHandler;
  moreNavbar?: boolean;
}) => {
  return (
    <div
      className={`${
        !moreNavbar ? "px-4" : "py-2"
      } font-medium hover:cursor-pointer ${textColor} ${fontSize}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NavbarItem;
