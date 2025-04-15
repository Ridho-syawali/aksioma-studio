import React from "react";

const Button = ({
  type,
  className = "bg-blue-600 hover:bg-blue-700 text-white",
  children,
}) => {
  return (
    <button type={type} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
