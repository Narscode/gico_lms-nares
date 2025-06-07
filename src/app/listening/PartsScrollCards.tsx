"use client";
import { Headphones } from "lucide-react";

export default function PartsScrollCards() {
  return (
    <div className="relative mt-4 w-full max-w-full overflow-x-auto">
      {/* Scrollable cards container */}
      <div id="parts-scroll" className="flex gap-4 w-full max-w-full overflow-x-auto snap-x snap-mandatory pb-2" style={{scrollbarWidth: 'thin'}}>
        {[1,2,3].map((part) => (
          <div
            key={part}
            className="aspect-[5/3] flex-shrink-0 w-72 max-w-full snap-center flex flex-col gap-2 p-3 rounded-xl border border-black/10 shadow-sm bg-white"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-blue-50 rounded-lg p-2 flex items-center justify-center">
                <Headphones className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Part 1</span>
                <span className="font-bold text-blue-700 text-base">Section XXX</span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-black/5 mb-1"></div>
            <div className="text-xs text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pretium accumsan. Praesent et consectetur mi.
            </div>
          </div>
        ))}
        {/* Blue gradient overlay to indicate scrollability */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-blue-200/80 to-transparent" />
      </div>
    </div>
  );
} 