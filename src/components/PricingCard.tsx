import React from "react";
import { PricingCard as Props } from "@/constant";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { formatToRupiah } from "@/lib/utils";

const PricingCard: React.FC<Props> = ({
  durationTime,
  features,
  href,
  isBestDeal,
  name,
  price,
}) => {
  return (
    <div
      className={`w-full h-fit rounded-xl flex flex-col gap-9 p-6 ${
        isBestDeal
          ? "bg-gradient-to-tl from-blue-950 to-blue-800 shadow-blue"
          : "bg-white border-2 border-blue-700/10"
      }`}
    >
      <div className={`flex flex-col gap-4 text-white`}>
        {isBestDeal && (
          <div className="text-xs px-6 py-2 bg-white rounded-full text-black font-extrabold w-fit">
            Best Deal!
          </div>
        )}
        <div
          className={`font-extrabold text-[22px] ${
            isBestDeal ? "text-white" : "text-black"
          }`}
        >
          {name}
        </div>

        <Separator className={isBestDeal ? "bg-white" : "bg-black/20"} />

        <div className={isBestDeal ? "text-white" : "text-black"}>
          {durationTime}
        </div>

        <div className="flex flex-row gap-1 items-end">
          <h3
            className={`text-[32px] font-extrabold ${
              isBestDeal ? "text-white" : "text-blue-700"
            }`}
          >
            {formatToRupiah(price)}
          </h3>

          <p className={`${isBestDeal ? "text-white" : "text-blue-700"}`}>
            / mo
          </p>
        </div>
      </div>

      <div
        className={`${
          isBestDeal ? "text-white" : "text-blue-700"
        } flex flex-col gap-4`}
      >
        {features.map((item: string, index: number) => (
          <div key={index} className="flex flex-row gap-2 items-center">
            <i
              className={`ri-check-line flex items-center justify-center p-2 aspect-square rounded-full w-[16px] h-[16px] font-extrabold ${
                isBestDeal ? "text-blue-700 bg-white" : "text-white bg-blue-700"
              }`}
            ></i>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <Link
        href={href}
        className={`w-full py-2 rounded-xl flex flex-row gap-2 items-center justify-center ${
          isBestDeal ? "bg-white text-blue-700" : "bg-blue-700 text-white"
        }`}
      >
        <h3 className="font-medium">Read More</h3>
        <i className="ri-arrow-right-line"></i>
      </Link>
    </div>
  );
};

export default PricingCard;
