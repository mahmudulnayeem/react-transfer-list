"use client";
import Checkbox from "./checkbox";

interface ListBoxProps {
  boxNumber: number;
  items: {
    label: string;
    id: string;
  }[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}
const ListBox = ({
  boxNumber,
  items,
  selectedItems,
  setSelectedItems,
}: ListBoxProps) => {
  return (
    <div className="border-2 border-teal-300 rounded-md p-3 w-full sm:w-2/5 ">
      List {boxNumber}
      <div className="ml-2 mt-3 h-64 overflow-y-scroll">
        <ul>
          {items.map((item) => (
            <Checkbox
              key={item.id}
              label={item.label}
              checked={selectedItems.includes(item.id)}
              setChecked={(checked) => {
                if (checked) {
                  setSelectedItems([...selectedItems, item.id]);
                } else {
                  setSelectedItems(
                    selectedItems.filter(
                      (selectedItem) => selectedItem !== item.id
                    )
                  );
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListBox;
