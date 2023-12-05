import React from "react";
import Image from "next/image";

const SocialMediaIcon = ({
  bg,
  iconUrl,
  width = 25,
  height = 25,
}: {
  bg: string;
  iconUrl: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={`${bg} p-2 hover:cursor-pointer`}>
      <Image src={iconUrl} width={width} height={height} alt="Icon" />
    </div>
  );
};

export default SocialMediaIcon;
