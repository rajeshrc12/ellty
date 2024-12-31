import React from "react";
import CheckedSVG from "../assets/checked.svg"; // SVG for the checked state
import UncheckedSVG from "../assets/unchecked.svg"; // SVG for the unchecked state

// Component for rendering a clickable checkbox using SVGs
const CheckBox = ({
  handleCheckbox = () => {}, // Function to handle checkbox state change
  label, // Label to identify the checkbox
  checked = false, // Boolean indicating if the checkbox is checked
}) => {
  // Function to handle click events on the checkbox
  const handleOnClick = () => {
    handleCheckbox(label, !checked); // Toggle the checked state and call the handler
  };

  return (
    <img
      onClick={handleOnClick} // Trigger the handler on click
      className="cursor-pointer" // Style to indicate interactivity
      src={checked ? CheckedSVG : UncheckedSVG} // Display the appropriate SVG based on the checked state
      alt={checked ? "Checked SVG" : "Unchecked SVG"} // Alternate text for accessibility
    />
  );
};

export default CheckBox;
