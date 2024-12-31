import React from "react";
import CheckBox from "./check-box"; // Component for rendering the checkbox

// Component to render a single item with a label and checkbox
const CheckItem = ({
  label, // Label text for the item
  checked, // Boolean indicating if the checkbox is checked
  handleCheckbox = () => {}, // Function to handle checkbox state change
}) => {
  return (
    <div className="h-[42px] flex justify-between items-center">
      {/* Display the label */}
      <div>{label}</div>
      {/* Render the checkbox component */}
      <CheckBox
        checked={checked} // Pass the checked state to the checkbox
        label={label} // Pass the label to identify the checkbox
        handleCheckbox={handleCheckbox} // Pass the handler for checkbox state changes
      />
    </div>
  );
};

export default CheckItem;
