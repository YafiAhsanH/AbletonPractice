"use client";
import React from "react";
import { useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = ({
  placeholder,
  items,
}: {
  placeholder: string;
  items: string[];
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(items[0]);
  return (
    <div
      className={`relative flex justify-between flex-1 hover:cursor-pointer px-3 py-1 font-medium text-sm bg-slate-100 focus:ring`}
      onClick={() => setOpen(!open)}
    >
      <p>{value}</p>
      <p>v</p>
      {open && (
        <div className="bg-slate-100 absolute left-0 top-8 flex flex-col w-full">
          {items.map((item) => (
            <DropdownItem
              key={`#${item}`}
              item={item}
              handleClick={() => setValue(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
