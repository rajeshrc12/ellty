import React from "react";
import CheckBox from "./check-box";

const CheckItem = ({ label, checked, handleCheckbox = () => {} }) => {
  return (
    <div className="h-[42px] flex justify-between items-center">
      <div>{label}</div>
      <CheckBox
        checked={checked}
        label={label}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};

export default CheckItem;
