import React from "react";
import CheckItem from "./check-item"; // Component for rendering individual checkbox items
import HR from "./hr"; // Horizontal rule component for separating sections
import Button from "./button"; // Button component for triggering actions

const Card = ({
  pageList = [], // List of pages with their labels and checked status
  selectAll = false, // Status of the "Select All" checkbox
  handleSelectAll = () => {}, // Function to handle "Select All" checkbox toggle
  handleCheckbox = () => {}, // Function to handle individual checkbox toggles
}) => {
  // Function to display the current page list as a formatted table in an alert
  const showPageList = () => {
    let table = "Label     |   Checked\n"; // Table header
    table += "-------------------\n"; // Header separator
    pageList.forEach((row) => {
      table += `${row.label.padEnd(9)}|   ${row.checked}\n`; // Format each row
    });
    alert(table); // Show the table in an alert box
  };

  return (
    <div className="flex py-[10px] flex-col justify-between shadow-secondary h-[326px] w-[370px] border-[1px] border-[#EEEEEE] rounded-[6px]">
      {/* Section for the "Select All" checkbox */}
      <div className="pl-[22px] pr-[17px]">
        <CheckItem
          label={"All Pages"} // Label for "Select All"
          checked={selectAll} // Status of the "Select All" checkbox
          handleCheckbox={handleSelectAll} // Handler for "Select All" toggle
        />
      </div>
      <HR /> {/* Horizontal separator */}
      {/* Section for displaying the list of pages with individual checkboxes */}
      <div className="h-[164px] overflow-y-auto pl-[22px] pr-[15px]">
        {pageList.map((page) => (
          <CheckItem
            key={page.label} // Unique key for each item
            label={page.label} // Page label
            checked={page.checked} // Checked status
            handleCheckbox={handleCheckbox} // Handler for checkbox toggle
          />
        ))}
      </div>
      <HR /> {/* Horizontal separator */}
      {/* Section for the "Done" button */}
      <div className="mx-[15px] my-[10px]">
        <Button onClick={showPageList}>Done</Button>{" "}
        {/* Trigger the table display */}
      </div>
    </div>
  );
};

export default Card;
