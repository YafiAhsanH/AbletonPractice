import React from "react";
import PageNavigatorItem from "./PageNavigatorItem";

const PageNavigator = () => {
  return (
    <div className="w-full px-11 py-5 flex gap-8 opacity-70">
      <PageNavigatorItem textColor="text-my-orange">About</PageNavigatorItem>
      <PageNavigatorItem>Jobs</PageNavigatorItem>
      <PageNavigatorItem>Apprenticeships</PageNavigatorItem>
    </div>
  );
};

export default PageNavigator;
