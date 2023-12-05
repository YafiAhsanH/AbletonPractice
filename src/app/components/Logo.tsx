import React from "react";
import Image from "next/image";

const Logo = ({
  active = false,
  width = 70,
  height = 20,
}: {
  active?: boolean;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={`flex ${active && "hover:cursor-pointer"}`}>
      <Image
        src={"/abletonLogo.jpg"}
        width={width}
        height={height}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
