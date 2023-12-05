import React from "react";
import FooterSectionTitle from "./FooterSectionTitle";
import FooterSectionItem from "./FooterSectionItem";
import SocialMediaLinks from "./SocialMediaLinks";
import Dropdown from "./Dropdown";

const FooterContent = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-6 py-16">
      <div className="col-start-1 flex flex-col ">
        <FooterSectionItem>Register Live or Push</FooterSectionItem>
        <FooterSectionItem>About Ableton</FooterSectionItem>
        <FooterSectionItem>Jobs</FooterSectionItem>
        <SocialMediaLinks />
      </div>
      <div className="col-start-2 flex flex-col">
        <FooterSectionTitle>Education</FooterSectionTitle>
        <FooterSectionItem>Offers for students and teachers</FooterSectionItem>
        <FooterSectionItem>Ableton for the Classroom</FooterSectionItem>
        <FooterSectionItem>
          Ableton for Colleges and Universities
        </FooterSectionItem>
      </div>
      <div className="col-start-3 flex flex-col">
        <FooterSectionTitle>Sign up to our newsletter</FooterSectionTitle>
        <p className="leading-7">
          Enter your email address to stay up to date with the latest offers,
          tutorials, downloads, surveys and more.
        </p>
        <div className="flex w-full py-5">
          <input
            className="flex-1 px-3 bg-slate-100"
            placeholder="Email Address"
          />
          <div className="bg-blue-600 px-8 py-2 text-white font-medium font-lg hover:cursor-pointer">
            Sign up
          </div>
        </div>
      </div>
      <div className="col-start-1 flex flex-col">
        <FooterSectionTitle>Community</FooterSectionTitle>
        <FooterSectionItem>Find Ableton User Groups</FooterSectionItem>
        <FooterSectionItem>Find Certified Training</FooterSectionItem>
        <FooterSectionItem>Become a Certified Trainer </FooterSectionItem>
      </div>
      <div className="col-start-2 flex flex-col relative gap-2">
        <FooterSectionTitle>Language and Location</FooterSectionTitle>
        <div className="flex justify-between gap-1">
          <Dropdown placeholder="English"/>
          <Dropdown placeholder="Australia"/>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
