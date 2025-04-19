import RatingStar from "@/components/atoms/RatingStar";
import React from "react";

const Rating = ({ stars, total }) => {
  return (
    <div className="flex items-center mt-2.5 mb-4">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <RatingStar key={index} filled={index < stars} />
        ))}
      </div>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
        {total}
      </span>
    </div>
  );
};

export default Rating;
