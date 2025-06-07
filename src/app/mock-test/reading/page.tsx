"use client";

import { useEffect } from "react";
import { useTimer } from "@/contexts/TimerContext";
import TimeHeader from "@/components/TimeHeader";
import TextReadingSection from "@/components/reading/TextReadingSection";
import MultipleChoiceAnswerSection from "@/components/reading/MultipleChoiceAnswerSection";

export default function ReadingTest() {
  const { timeRemaining, startTimer, isRunning, originPath } = useTimer();
  const pathname = "/mocktest/reading";

  // Start timer when page loads ONLY if timer isn't already saved
  useEffect(() => {
    // Add a small delay to ensure context is fully initialized
    const timer = setTimeout(() => {
      // Check if timer isn't running OR if it's for a different path
      if ((!isRunning && timeRemaining === 0) || originPath !== pathname) {
        console.log("Starting new timer");
        // Start 60-minute timer (3600 seconds)
        startTimer(3600, pathname);
      } else {
        console.log("Timer already running", {
          timeRemaining,
          isRunning,
          originPath,
        });
      }
    }, 100); // Small delay to ensure localStorage is read first

    return () => clearTimeout(timer);
  }, [isRunning, timeRemaining, pathname, originPath, startTimer]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TimeHeader />
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Remove fixed height on mobile, use auto or min-height */}
          <div className="min-h-[500px] lg:h-[calc(100vh-150px)] overflow-auto">
            <TextReadingSection imagePath={"/assets/hero/hero_image.webp"} />
          </div>
          {/* Remove fixed height on mobile, use auto or min-height */}
          <div className="min-h-[500px] lg:h-[calc(100vh-150px)] overflow-auto mb-8 lg:mb-0">
            <MultipleChoiceAnswerSection />
          </div>
        </div>
      </div>
    </div>
  );
}
