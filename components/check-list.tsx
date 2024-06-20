"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import CheckItem from "./check-item";

interface CheckListProps {
  // Array of checklist item objects.
  data: Array<{
    // Unique identifier for each checklist item.
    id: string;
    // Name or label of the checklist item.
    name: string;
    // Indicates if the item is checked.
    checked: boolean;
    // Indicates if the item is disabled and cannot be checked/unchecked.
    disabled: boolean;
  }>;
}

// The CheckList component renders a list of checkable items, with a header checkbox to check/uncheck all items.
export function CheckList({ data }: CheckListProps) {
  const [newData, setNewData] = React.useState(data);
  const [all, setAll] = React.useState(false);

  // Function to handle the check/uncheck action for individual items.
  const handleCheck = (clickedValue: boolean, clickedId: string) => {
    const temp = newData.map((item) =>
      item.id === clickedId ? { ...item, checked: clickedValue } : item
    );
    if (temp.some((item) => item.checked === false)) setAll(false);
    if (temp.every((item) => item.checked === true)) setAll(true);

    setNewData(temp);
  };

  // Function to handle the check/uncheck action for the 'check all' checkbox.
  const handleAllCheck = (clickedValue: boolean) => {
    setAll(clickedValue);
    setNewData(
      newData.map((item) => ({
        ...item,
        checked: !item.disabled ? clickedValue : item.checked,
      }))
    );
  };

  return (
    <Card
      className="w-[350px] border-0"
      style={{
        boxShadow: "0px 0px 20px 0px #1414141A",
      }}
    >
      <CardHeader className="mx-4 px-2 py-4 border-b">
        {/* Header checkbox to check/uncheck all items */}
        <CheckItem
          handleCheck={handleAllCheck}
          id={""}
          name={"All pages"}
          checked={all}
          disabled={false}
        />
      </CardHeader>
      <CardContent className="px-5 py-5 flex flex-col gap-5 overflow-y-scroll max-h-[55vh]">
        {/* Render list of individual checkable items */}
        {newData.map((item: any) => (
          <CheckItem
            handleCheck={handleCheck}
            key={item.id}
            id={item.id}
            name={item.name}
            checked={item.checked}
            disabled={item.disabled}
          />
        ))}
      </CardContent>
      <CardFooter className="border-t px-0 py-4 mx-4">
        {/* Button to alert the current state of the checklist */}
        <Button
          onClick={() => alert(JSON.stringify(newData))}
          className="w-full select-none p-0 m-0"
        >
          Done
        </Button>
      </CardFooter>
    </Card>
  );
}
