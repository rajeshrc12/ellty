import React, { useEffect, useState } from "react";
import Card from "./components/card";

const App = () => {
  const [pageList, setPageList] = useState([
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: false },
    { label: "Page 5", checked: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (_, checked) => {
    setPageList(pageList.map((page) => ({ ...page, checked })));
  };
  const handleCheckbox = (label, checked) => {
    const pageListCopy = JSON.parse(JSON.stringify(pageList));
    const selectedPage = pageListCopy.find((page) => page.label === label);
    selectedPage.checked = checked;
    setPageList(pageListCopy);
  };
  useEffect(() => {
    if (pageList.every((page) => page.checked === true)) setSelectAll(true);
    if (pageList.every((page) => page.checked === false)) setSelectAll(false);
  }, [pageList]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card
        pageList={pageList}
        selectAll={selectAll}
        handleSelectAll={handleSelectAll}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};

export default App;
