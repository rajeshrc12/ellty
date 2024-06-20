import Image from "next/image";
import React from "react";

interface CheckboxProps {
  // Indicates if the checkbox is checked.
  checked: boolean;
  // Indicates if the checkbox is disabled and cannot be clicked.
  disabled: boolean;
  // Function to handle the click event on the checkbox.
  onClick: () => void;
}

// The Checkbox component renders a checkbox icon (checked or unchecked) based on the 'checked' prop.
// It also handles click events to toggle the checkbox state, respecting the 'disabled' state.
const Checkbox = ({ checked, disabled = false, onClick }: CheckboxProps) => {
  if (checked) {
    return (
      <div
        className={`${
          disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => {
          if (!disabled) onClick();
        }}
      >
        <Image
          src={"/icons/checked.svg"}
          width={20}
          height={20}
          alt="checked"
        />
      </div>
    );
  } else
    return (
      <div
        className={`${
          disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => {
          if (!disabled) onClick();
        }}
      >
        <Image
          src={"/icons/unchecked.svg"}
          width={20}
          height={20}
          alt="unchecked"
        />
      </div>
    );
};

export default Checkbox;
