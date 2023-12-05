import React from "react";

const FooterSectionItem = ({ children }: { children: React.ReactNode }) => {
  return <p className="hover:cursor-pointer leading-7">{`${children} >`}</p>;
};

export default FooterSectionItem;
