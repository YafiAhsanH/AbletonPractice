import React from "react";

const DropdownItem = ({ item, handleClick }: { item: string, handleClick: Function }) => {
  return (
    <div
      key={`#${item}`}
      className="hover:bg-blue-700 hover:cursor-pointer hover:text-white px-3 py-1"
      onClick={() => handleClick()}
    >
      {item}
    </div>
  );
};

export default DropdownItem;
