"use client";

import { Button } from "@/components/ui/button";

export default function Popup() {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden rounded-2xl">
      <div className="absolute left-[61px] top-[18px] text-[#D92D20] text-xs font-bold leading-[18px] font-[Plus Jakarta Sans]">
        Times Out!
      </div>
      <div className="absolute left-[17px] top-[64.5px] w-[455px] h-0 border border-[#E3E8EF]" />
      <div className="absolute left-[17px] top-[18px] w-[30px] h-[30px]">
        <div className="absolute w-[30px] h-[30px]" />
        <div className="absolute left-[3px] top-[3px] w-[24px] h-[24px] overflow-hidden">
          <div className="absolute left-[1.55px] top-[1.9px] w-[20.9px] h-[18.1px] border-2 border-[#121926]" />
        </div>
      </div>
      <div className="absolute left-[61px] top-[36px] text-black text-[10px] font-normal leading-[15px] font-[Plus Jakarta Sans]">
        Placement test is Finished
      </div>
      <div className="absolute left-[448px] top-[24px] w-[24px] h-[24px] overflow-hidden">
        <div className="absolute left-[2px] top-[2px] w-[20px] h-[20px] border-2 border-[#9AA4B2]" />
      </div>
      <div className="absolute left-[17px] top-[84px] text-black text-[14px] font-bold leading-[20px] font-[Inter]">
        Time’s Finished
      </div>
      <div className="absolute left-[17px] top-[110px] w-[453px] text-justify text-black text-[12px] font-normal leading-[18px] font-[Plus Jakarta Sans]">
        Your time in Listening test is finished. Go to the next test
      </div>
      <div className="absolute left-[336px] top-[150px] flex justify-start items-center gap-[11px]">
        <Button variant="default" className="px-4 py-2 text-sm font-medium">
          Go To Next Part
        </Button>
      </div>
    </div>
  );
}
