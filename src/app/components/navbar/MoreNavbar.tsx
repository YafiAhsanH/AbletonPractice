import React from "react";
import MoreNavbarSection from "./MoreNavbarSection";
import MoreNavbarTitle from "./MoreNavbarTitle";
import MoreNavbarItems from "./MoreNavbarItems";
import MoreNavbarSubSection from "./MoreNavbarSubSection";

const MoreNavbar = () => {
  return (
    <div className={`text-black px-10 pt-2 pb-12 border-b-2`}>
      <MoreNavbarSection>
        <MoreNavbarTitle>More on Ableton.com:</MoreNavbarTitle>
        <div className="flex justify-start gap-7 ">
          <MoreNavbarItems>Blog</MoreNavbarItems>
          <MoreNavbarItems>Ableton for the Classroom</MoreNavbarItems>
          <MoreNavbarItems>
            Ableton for Colleges and Universities
          </MoreNavbarItems>
          <MoreNavbarItems>Certified Training</MoreNavbarItems>
          <MoreNavbarItems textColor="text-my-orange">
            About Ableton
          </MoreNavbarItems>
          <MoreNavbarItems>Jobs</MoreNavbarItems>
          <MoreNavbarItems>Apprenticeships</MoreNavbarItems>
        </div>
      </MoreNavbarSection>
      <MoreNavbarSection>
        <MoreNavbarTitle>More from Ableton:</MoreNavbarTitle>
        <div className="flex justify-between gap-16">
          <MoreNavbarSubSection
            title="Loop"
            desc="Watch Talks, Performances and Features from Ableton's Summit for Music Makers"
          />
          <MoreNavbarSubSection
            title="Learning Music"
            desc="Learn the fundamentals of music making right in your browser."
          />
          <MoreNavbarSubSection
            title="Learning Synths"
            desc="Get started with synthesis using web-based synth and accompanying lessons."
          />
          <MoreNavbarSubSection
            title="Making Music"
            desc="Some tips from 74 Creative Strategies for Electronic Producers."
          />
        </div>
      </MoreNavbarSection>
    </div>
  );
};

export default MoreNavbar;
