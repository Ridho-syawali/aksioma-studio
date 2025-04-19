import ProductInfo from "@/components/molecules/ProductInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-md shadow-md">
      <Link href={`${product.id}`}>
        <Image
          className="rounded-t-md  w-full h-80 aspect-auto object-center object-cover"
          src={product.image}
          width={1000}
          height={1000}
          alt="product"
        />
      </Link>
      <ProductInfo
        title={product.title}
        price={product.price}
        stars={product.stars}
        totalRating={product.totalRating}
        description={product.description}
      />
    </div>
  );
};

export default ProductCard;
