import React from "react";

const MoreNavbarSubSection = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col hover:cursor-pointer flex-[25%]">
      <p className="font-medium pb-1">{title}</p>
      <p>{desc}</p>
    </div>
  );
};

export default MoreNavbarSubSection;
