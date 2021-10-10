import React from "react";
import { ButtonProps } from "./ButtonProps";


const Button: React.FC<ButtonProps> = ({
  border,
  color,
  background,
  children,
  height,
  onClick,
  radius,
  width
}) => {
return (
  <button
    onClick={onClick}
    style={{
       backgroundColor: background,
       color,
       border,
       borderRadius: radius,
       height,
       width,
       padding: "0 25px"
    }}
  >
  {children}
  </button>
);
}

Button.defaultProps = {
  border: "1px solid purple",
  color: "white",
  background: "purple",
  children: "Button",
  height: "40px",
  radius: "4px",
  width: "auto"
}

export default Button;
