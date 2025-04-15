import Image from "next/image";
import React from "react";

const Logo = ({ className }) => {
  return (
    <Image
      className={` dark:filter dark:brightness-0 dark:invert ${className}`}
      src="/images/logo.png"
      alt="logo"
      priority={true}
      width={100}
      height={100}
    />
  );
};

export default Logo;
