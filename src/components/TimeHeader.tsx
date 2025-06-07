"use client";

import { ArrowLeft, ArrowRight, BugPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTimer } from "@/contexts/TimerContext";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function TimeHeader() {
  const { timeRemaining } = useTimer();
  const [devMode, setDevMode] = useState(false);

  // Format seconds into MM:SS format
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleBack = () => {
    if (devMode) {
      console.log("Dev mode: Back navigation prevented");
      return;
    }
    console.log("Back button clicked");
    // Regular navigation logic here
  };

  const handleNext = () => {
    if (devMode) {
      console.log("Dev mode: Next navigation prevented");
      return;
    }
    console.log("Next button clicked");
    // Regular navigation logic here
  };

  const toggleDevMode = () => {
    setDevMode(!devMode);
    console.log(`Dev mode ${!devMode ? "enabled" : "disabled"}`);
  };

  // Using standard colors instead of custom colors
  const timeColor = timeRemaining < 300 ? "text-red-600" : "text-blue-600";

  return (
    <div className="flex flex-col w-full">
      {/* Main header row */}
      <div className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-200">
        {/* Back button - full text on larger screens, icon only on smaller screens */}
        <Button
          variant="outline"
          className="flex items-center gap-1 text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700"
          onClick={handleBack}
        >
          <ArrowLeft size={16} />
          <span className="md:inline hidden">Back</span>
        </Button>

        {/* Title - visible only on medium+ screens */}
        <div className="text-lg font-medium ml-8 mr-auto text-gray-700 hidden md:block">
          <span className="text-blue-600 font-bold mr-2">Part 1</span>
          <span>Write at least 150 words.</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Dev Mode Toggle */}
          <Button
            variant={devMode ? "default" : "outline"}
            size="sm"
            className={`hidden md:flex items-center gap-1 ${
              devMode
                ? "bg-amber-500 hover:bg-amber-600 text-white"
                : "text-amber-600 border-amber-600 hover:bg-amber-50"
            }`}
            onClick={toggleDevMode}
          >
            <BugPlay size={16} />
            <span className="text-xs">Dev Mode</span>
            {devMode && (
              <Badge
                variant="outline"
                className="ml-1 text-[10px] px-1 py-0 h-4 bg-white text-amber-700"
              >
                ON
              </Badge>
            )}
          </Button>

          {/* Timer */}
          <div className="text-base font-medium rounded-2xl bg-white px-4 py-2 border-gray-200 border flex items-center gap-2">
            <span className="md:inline hidden">Time:</span>{" "}
            <span className={`font-bold ${timeColor}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>

          {/* Next button - full text on larger screens, icon only on smaller screens */}
          <Button
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleNext}
          >
            <span className="md:inline hidden">Next</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* Secondary row for the title on smaller screens */}
      <div className="md:hidden text-lg font-medium w-full px-4 py-3 bg-gray-50 text-gray-700 flex justify-between items-center">
        <div>
          <span className="text-blue-600 font-bold mr-2">Part 1</span>
          <span>Write at least 150 words.</span>
        </div>

        {/* Dev Mode Toggle - mobile version */}
        <Button
          variant={devMode ? "default" : "outline"}
          size="sm"
          className={`flex items-center ${
            devMode
              ? "bg-amber-500 hover:bg-amber-600"
              : "text-amber-600 border-amber-600"
          }`}
          onClick={toggleDevMode}
        >
          <BugPlay size={14} />
          {devMode && <span className="sr-only">Dev Mode On</span>}
        </Button>
      </div>
    </div>
  );
} 