"use client";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import MoreNavbar from "./MoreNavbar";
import Logo from "../Logo";

const Navbar = () => {
  const [more, setMore] = useState(false);

  return (
    <>
      <div
        className={`w-full text-black px-5 py-4 flex justify-between items-center ${
          !more && "border-b-2"
        }`}
      >
        <div className="px-5">
          <Logo active={true} />
        </div>
        <div className="flex flex-1 items-center">
          <NavbarItem>Live</NavbarItem>
          <NavbarItem>Push</NavbarItem>
          <NavbarItem>Note</NavbarItem>
          <NavbarItem>Link</NavbarItem>
          <NavbarItem>Shop</NavbarItem>
          <NavbarItem>Packs</NavbarItem>
          <NavbarItem>Help</NavbarItem>
          <NavbarItem
            textColor={"text-my-orange"}
            onClick={() => {
              setMore(!more);
            }}
          >
            <p className="text-center">
              More <span className="text-xl">{more ? "-" : "+"}</span>
            </p>
          </NavbarItem>
        </div>
        <NavbarItem textColor="text-blue-700">Try Live for free</NavbarItem>
        <NavbarItem fontSize="text-sm">Log in or register</NavbarItem>
      </div>
      {more && <MoreNavbar />}
    </>
  );
};

export default Navbar;
