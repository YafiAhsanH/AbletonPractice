import React from "react";

const TextSectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl leading-10 pb-5 font-semibold">{children}</div>;
};

export default TextSectionTitle;
