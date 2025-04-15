import Logo from "@/components/atoms/Icons/Logo";
import React from "react";

const Brand = ({ size }) => {
  return (
    <div className="flex gap-1.5">
      <Logo className={size} />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        Aksioma <span>Studio</span>
      </span>
    </div>
  );
};

export default Brand;
