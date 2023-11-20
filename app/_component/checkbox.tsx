import React from "react";

interface CheckboxProps extends React.LiHTMLAttributes<HTMLLIElement> {
  label: string;
  checked?: boolean;
  setChecked?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  setChecked,
  ...rest
}) => {
  const handleCheckboxChange = () => {
    if (setChecked) {
      setChecked(!checked);
    }
  };

  return (
    <li {...rest} className="mx-auto">
      <div className="divide-y">
        <div className="flex items-start space-x-3 py-6">
          <input
            type="checkbox"
            className="border-gray-300 rounded h-5 w-5"
            checked={checked}
            onChange={handleCheckboxChange}
          />

          <div className="flex flex-col">
            <h1 className="font-medium leading-none">{label}</h1>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Checkbox;
