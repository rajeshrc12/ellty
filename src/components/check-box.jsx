import React from "react";
import CheckedSVG from "../assets/checked.svg";
import UncheckedSVG from "../assets/unchecked.svg";
const CheckBox = ({ handleCheckbox = () => {}, label, checked = false }) => {
  const handleOnClick = () => {
    handleCheckbox(label, !checked);
  };
  return (
    <img
      onClick={handleOnClick}
      className="cursor-pointer"
      src={checked ? CheckedSVG : UncheckedSVG}
      alt={checked ? "Checked SVG" : "Unchecked SVG"}
    />
  );
};

export default CheckBox;
