import clsx from "clsx";
import { ReactNode } from "react";

// Define types for the props
interface CustomButtonProps {
  textName: ReactNode; // Allow textName to be a ReactNode (string, element, etc.)
  handleAnything?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => void; // Supports both click and form submit events
  className?: string; // Allow className to be passed as a prop
  type?: "button" | "submit" | "reset"; // Button type, narrowed to valid values
  disabled?: boolean;
}

// custom button
const CustomButton: React.FC<CustomButtonProps> = ({
  textName,
  handleAnything,
  className = "",
  type = "button", // default value for 'type'
  disabled = false, // default value for 'disabled'
}) => {
  return (
    <button
      onClick={(e) => {
        if (disabled) return; // 🔒 Ignore click if disabled, so prevents any click handler if disabled
        handleAnything?.(e);
      }}
      type={type} // the `type` prop here
      disabled={disabled}
      className={clsx(
       "cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
    >
     
      {/* text name */}
 
        {textName}
   
    </button>
  );
};

export default CustomButton;
