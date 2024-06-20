//check-item.tsx
import Checkbox from "./check-box";

interface CheckItemProps {
  // Name or label of the checklist item.
  name: string;
  // Unique identifier for the checklist item.
  id: string;
  // Indicates if the item is checked.
  checked: boolean;
  // Indicates if the item is disabled and cannot be checked/unchecked.
  disabled: boolean;
  // Function to handle the check/uncheck action.
  handleCheck: (clickedValue: boolean, clickedId: string) => void;
}

// The CheckItem component renders a single item with a checkbox and label.
const CheckItem = ({
  name,
  checked = false,
  id,
  disabled,
  handleCheck,
}: CheckItemProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="select-none">{name}</div>
      <Checkbox
        disabled={disabled}
        checked={checked}
        onClick={() => handleCheck(!checked, id)}
      />
    </div>
  );
};

export default CheckItem;
