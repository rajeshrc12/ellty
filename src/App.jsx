import React, { useEffect, useState } from "react";
import Card from "./components/card";

const App = () => {
  // State to manage the list of pages and their checkbox status
  const [pageList, setPageList] = useState([
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: false },
    { label: "Page 5", checked: false },
  ]);

  // State to manage the "Select All" checkbox status
  const [selectAll, setSelectAll] = useState(false);

  // Function to handle the "Select All" checkbox toggle
  const handleSelectAll = (_, checked) => {
    setPageList(pageList.map((page) => ({ ...page, checked })));
  };

  // Function to handle individual checkbox toggle for each page
  const handleCheckbox = (label, checked) => {
    const pageListCopy = JSON.parse(JSON.stringify(pageList)); // Create a deep copy of the pageList
    const selectedPage = pageListCopy.find((page) => page.label === label); // Find the selected page by label
    selectedPage.checked = checked; // Update its checked status
    setPageList(pageListCopy); // Update the state with the modified list
  };

  // Effect to synchronize the "Select All" checkbox with individual checkboxes
  useEffect(() => {
    if (pageList.every((page) => page.checked === true)) setSelectAll(true); // If all are checked, select all
    if (pageList.some((page) => page.checked === false)) setSelectAll(false); // If all are unchecked, deselect all
  }, [pageList]); // Runs whenever pageList changes

  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        pageList={pageList} // Pass the page list to the Card component
        selectAll={selectAll} // Pass the "Select All" status to the Card component
        handleSelectAll={handleSelectAll} // Pass the handler for "Select All"
        handleCheckbox={handleCheckbox} // Pass the handler for individual checkboxes
      />
    </div>
  );
};

export default App;
