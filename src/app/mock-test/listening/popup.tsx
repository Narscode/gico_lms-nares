"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Popup() {
  useEffect(() => {
    console.log("Popup component mounted");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="relative bg-white rounded-[15px] w-[500px] h-[220px] shadow-lg overflow-hidden">
        
        {/* Warning Icon and Text */}
          <Image src="/icons/alert-triangle.svg" alt="Alert" width={20} height={20} className="mt-1" />
          <Image src="/icons/alert-triangle.svg" alt="Alert" width={20} height={20} className="w-5 h-5 mt-1" />
          <div>
            <div className="text-[#D92D20] text-[12px] font-bold leading-[18px] font-['Plus Jakarta Sans']">
              Times Out!
            </div>
            <div className="text-black text-[10px] font-normal leading-[15px] font-['Plus Jakarta Sans']">
              Placement test is Finished
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute left-[17px] top-[64.5px] w-[455px] border-t border-[#E3E8EF]" />

        {/* Close Icon Placeholder */}
      <div className="absolute left-[448px] top-[24px] w-[24px] h-[24px] overflow-hidden">
  <button
    onClick={() => console.log("Close button clicked")}
    className="w-full h-full flex items-center justify-center focus:outline-none"
  >
    <Image
      src="/icons/x-circle.svg"
      alt="Close"
      width={20}
      height={20}
      className="w-5 h-5"
    />
  </button>
</div>

        {/* Main Title & Description */}
        <div className="absolute left-[17px] top-[84px] text-black text-[14px] font-bold leading-[20px] font-['Inter']">
          Time’s Finished
        </div>
        <div className="absolute left-[17px] top-[110px] w-[453px] text-black text-[12px] font-normal leading-[18px] text-justify font-['Plus Jakarta Sans']">
          Your time in Listening test is finished. Go to the next test
        </div>

        {/* Button */}
        <div className="absolute left-[336px] top-[150px]">
          <Button
            variant="default"
            className="bg-[#0040C1] hover:bg-[#0032a3] text-white px-[14px] py-[8px] text-[14px] leading-[20px] font-medium font-['Inter'] rounded-[8px] shadow-sm"
          >
            Go To Next Part
          </Button>
        </div>
      </div>
    );
  }
