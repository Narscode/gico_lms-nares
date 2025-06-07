import { Testimonial as Props } from "@/constant";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const Testimonial: React.FC<Props> = ({ img, instance, name, review }) => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border-2 border-blue-700/10 p-4 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={img}
            width={40}
            height={40}
            className="rounded-full w-[24px] h-[24px]"
            alt={name}
          />
          <h3 className="text-sm font-semibold">{name}</h3>
        </div>

        <Separator className="w-[80%]" />

        <p className="text-xs">{review}</p>
      </div>

      <div className="font-semibold text-[10px]">{instance}</div>
    </div>
  );
};

export default Testimonial;
