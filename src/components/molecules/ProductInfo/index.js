import React from "react";
import Rating from "../Rating";
import { formatCurrency } from "@/helpers/utils/formatCurrency";

const ProductInfo = ({ title, price, stars, totalRating, description }) => {
  return (
    <div className="px-5 pb-5">
      <h5 className="pt-2 text-xl font-semibold tracking-tight text-gray-900 truncate">
        {title}
      </h5>
      <Rating stars={stars} total={totalRating} />
      <div className="">
        <span className="text-sm text-gray-500 line-clamp-1">
          {description}
        </span>
      </div>
      <div className="pt-2">
        <span className="text-xl font-medium text-gray-900">
          {formatCurrency(price, "id", "IDR")}
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
