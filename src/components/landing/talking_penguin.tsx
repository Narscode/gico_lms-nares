import Image from "next/image";
import React from "react";

export const TalkingPenguin: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full mx-auto py-8 px-4 mt-8 h-fit">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-center border-neutral-100 border-[2px] items-center bg-white rounded-t-3xl rounded-l-3xl shadow-xl px-2 py-8 w-[100%] bord">
            <h2 className="text-2xl md:text-3xl">
              No Need For Extra Efforts.{" "}
              <span className="text-blue-800 font-bold">We Have It ALL</span>
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-[0.9rem] text-gray-800 text-center">
            Online tutoring. Simulation Tests. Personal Trainer. Accessible
            through <span className="font-bold">Google Classroom</span>
          </p>
        </div>
        <div className="flex-shrink-0 md:ml-4">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/assets/hero/penguin.webp"
              alt="Hero image"
              width={200}
              height={200}
              className="mt-2 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkingPenguin;
