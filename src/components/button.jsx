import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#FFCE22] hover:bg-[#FFD84D] w-full py-[10px] rounded-[4px]"
    >
      {children}
    </button>
  );
};

export default Button;
