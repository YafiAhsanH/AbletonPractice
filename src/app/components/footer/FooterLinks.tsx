import React from "react";
import FooterLinksItem from "./FooterLinksItem";
import Logo from "../Logo";

const FooterLinks = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="flex gap-3">
        <FooterLinksItem>Contact Us</FooterLinksItem>
        <FooterLinksItem>Press Resources</FooterLinksItem>
        <FooterLinksItem>Legal Info</FooterLinksItem>
        <FooterLinksItem>Privacy Policy</FooterLinksItem>
        <FooterLinksItem>Cookie Settings</FooterLinksItem>
        <FooterLinksItem>Imprint</FooterLinksItem>
      </div>
      <div className="flex justify-between items-center gap-3">
        <FooterLinksItem active={false}>Made in Berlin</FooterLinksItem>
        <Logo width={50} height={10}/>
      </div>
    </div>
  );
};

export default FooterLinks;
