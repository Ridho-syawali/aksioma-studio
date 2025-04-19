import Button from "@/components/atoms/Button";
import Brand from "@/components/molecules/Brand";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky w-full top-0 z-50 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md mb-2.5 transition duration-300 ${
        hideNavbar ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Brand size={"h-10 w-10"} />
        </a>
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <IoMenu size={24} />
        </button>
        {}
      </div>
    </nav>
  );
};

export default Navbar;
