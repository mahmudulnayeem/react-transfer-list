// TransferButton.tsx
import React from "react";

interface TransferButtonProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
  mobileLabel?: string;
}

const TransferButton: React.FC<TransferButtonProps> = ({
  disabled,
  onClick,
  children,
  mobileLabel,
}) => {
  return (
    <button
      className="disabled:opacity-50 disabled:cursor-not-allowed bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
      disabled={disabled}
      onClick={onClick}
    >
      <span className="hidden md:inline">{children}</span>
      <span className="md:hidden">{mobileLabel}</span>
    </button>
  );
};

export default TransferButton;
