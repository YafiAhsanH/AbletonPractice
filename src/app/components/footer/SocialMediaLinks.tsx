import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-start gap-2 py-2">
      <SocialMediaIcon bg="bg-blue-500" iconUrl="/facebook.png"/>
      <SocialMediaIcon bg="bg-blue-400" iconUrl="/twitter.png"/>
      <SocialMediaIcon bg="bg-rose-600" iconUrl="/youtube.png"/>
      <SocialMediaIcon bg="bg-my-orange" iconUrl="/instagram.png"/>
    </div>
  );
};

export default SocialMediaLinks;
