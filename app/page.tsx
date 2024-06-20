import { CheckList } from "../components/check-list";

export default function Home() {
  // Number of items in the checklist
  const listCount = 20;

  // Generate an array of checklist items with unique ids, names, checked and disabled states
  const data = new Array(listCount).fill(0).map((_, index) => ({
    // Unique identifier for each checklist item
    id: `${index + 1}`,
    // Name or label of the checklist item
    name: `Page ${index + 1}`,
    // Items are checked if their index is even
    checked: index % 2 === 0,
    // Items are disabled if their index is a multiple of 3
    disabled: index % 3 === 0,
  }));

  return (
    // Center the CheckList component both horizontally and vertically
    <div className="flex justify-center items-center h-screen">
      {/* Render the CheckList component with the generated data */}
      <CheckList data={data} />
    </div>
  );
}
