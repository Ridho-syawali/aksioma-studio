import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="rounded-lg bg-gradient-to-b from-sky-500 via-purple-500 to-pink-500 shadow-xl p-1 w-full max-w-xs">
        <div className="bg-white rounded-lg h-full">{children}</div>
      </div>
    </>
  );
};

function Header({ image, link = "#" }) {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt={image}
        className="rounded-t-lg p-4 w-full h-70 object-cover object-center"
        width={250}
        height={250}
      />
    </Link>
  );
}

function Body({ title, desc, link = "#" }) {
  return (
    <div className="px-5 pb-5 min-h-[200px]">
      <Link href={link}>
        <h3 className="text-3xl font-bold text-black line-clamp-2">{title}</h3>
        <p className="mt-3 text-slate-700 text-base text-justify line-clamp-4">
          {desc}
        </p>
      </Link>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex flex-col items-center justify-center px-5 pb-5">
      <span className="text-2xl font-semibold mb-2">
        {price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </span>
      <Button
        className="w-full bg-blue-600 p-1.5 hover:bg-blue-700 text-white rounded"
        // onClick={() => handleAddToCart(id)}
      >
        Beli
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
