import React from "react";
import FooterLinks from "./FooterLinks";
import FooterTitle from "./FooterTitle";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div className="w-full p-32 border-t-2 text-black">
      <FooterTitle />
      <FooterContent />
      <FooterLinks />
    </div>
  );
};

export default Footer;
