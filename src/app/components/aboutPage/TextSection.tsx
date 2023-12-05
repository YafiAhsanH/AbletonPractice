import React from "react";

const TextSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-start w-full px-[25%] py-32">
      {children}
    </div>
  );
};

export default TextSection;
