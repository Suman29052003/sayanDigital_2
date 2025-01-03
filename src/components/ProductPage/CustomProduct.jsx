import React, { useState } from "react";

import minusIcon from "../../assets/icons/minus.png";
import plusIcon from "../../assets/icons/plus.png";
import OrderButton from "./OrderButton";

const CustomProduct = ({
  title,
  subTitle,
  price,
  minQuantity
}) => {
  const [originalPrice, setOriginalPrice] = useState(price);

  console.log("Received minQuantity in CustomProduct:", minQuantity);
  console.log("Received price in CustomProduct:", price);

  return (
    <div className="w-full flex flex-col gap-3 p-4 md:p-6 lg:p-8">
      <div className="_title">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      </div>
      <div className="_shortTitle text-lg font-medium">{subTitle}</div>

      <div className="_price">
        <span className="text-xl md:text-2xl font-bold text-[#525050]">
          ₹ {originalPrice}{" "}
        </span>
        <span className="text-lg md:text-xl font-medium">
          inclusive of all taxes (except delivery charges)
        </span>
        <p className="text-sm font-semibold text-gray-400">
          Buy in bulk and save
        </p>
      </div>
      <OrderButton title={title} price={originalPrice} quantity={1} />
    </div>
  );
};

export default CustomProduct;
