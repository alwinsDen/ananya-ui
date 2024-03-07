import React from "react";
import "./AnUIDefaultButton.scss";

//define types and interfaces
interface AnUIDefaultButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const AnUIDefaultButton = React.forwardRef<
  HTMLButtonElement,
  AnUIDefaultButtonInterface
>(({ ...props }, ref) => {
  return (
    <button ref={ref} {...props} className={`AnUIDefaultButton default`}>
      {props.children}
    </button>
  );
});

export default AnUIDefaultButton;
