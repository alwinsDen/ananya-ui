import React from "react";
import "./AnUIDefaultButton.scss";

//define types and interfaces
export interface AnUIDefaultButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorMode?: "blue" | "default" | "dark";
}

export const AnUIDefaultButton = React.forwardRef<
  HTMLButtonElement,
  AnUIDefaultButtonInterface
>(({ colorMode = "default", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`AnUIDefaultButton btn-${colorMode}`}
    >
      {props.children}
    </button>
  );
});
