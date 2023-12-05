"use client";
import React from "react";
import { useState } from "react";

const Dropdown = ({ placeholder }: { placeholder: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative flex justify-between flex-1 hover:cursor-pointer px-3 py-1 font-medium text-sm bg-slate-100 focus:ring`}
      onClick={() => setOpen(!open)}
    >
      <p>{placeholder}</p>
      <p>v</p>
      {open && <div className="bg-green-100 absolute left-0 top-8">allo</div>}
    </div>
  );
};

export default Dropdown;
