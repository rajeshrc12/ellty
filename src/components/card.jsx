import React from "react";
import CheckItem from "./check-item";
import HR from "./hr";

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
      <HR />
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
      <HR />
      <div className="mx-[15px] my-[10px]">
        <button className="bg-[#FFCE22] hover:bg-[#FFD84D] w-full py-[10px] rounded-[4px]">
          Done
        </button>
      </div>
    </div>
  );
};

export default Card;
