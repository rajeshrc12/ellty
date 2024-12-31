import React from "react";
import CheckItem from "./check-item";

const Card = ({
  pageList = [],
  selectAll = false,
  handleSelectAll = () => {},
  handleCheckbox = () => {},
}) => {
  return (
    <div className="flex py-[10px] flex-col justify-between shadow-secondary h-[326px] w-[370px] border-[1px] border-[#EEEEEE] rounded-[6px]">
      <div className="pl-[22px] pr-[17px]">
        <CheckItem
          label={"All Pages"}
          checked={selectAll}
          handleCheckbox={handleSelectAll}
        />
      </div>
      <div className="py-[10px] mx-[15px]">
        <hr className="border-[#CDCDCD]" />
      </div>
      <div className="h-[164px] overflow-y-auto pl-[22px] pr-[15px]">
        {pageList.map((page) => (
          <CheckItem
            key={page.label}
            label={page.label}
            checked={page.checked}
            handleCheckbox={handleCheckbox}
          />
        ))}
      </div>
      <div className="py-[10px] mx-[15px]">
        <hr className="border-[#CDCDCD]" />
      </div>
      <div className="mx-[15px] my-[10px]">
        <button className="bg-[#FFCE22] hover:bg-[#FFD84D] w-full py-[10px] rounded">
          Done
        </button>
      </div>
    </div>
  );
};

export default Card;
