"use client";

import { useEffect } from "react";
import { useTimer } from "@/contexts/TimerContext";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import TimeHeader from "@/components/TimeHeader";

export default function ListeningTest() {
  const { timeRemaining, startTimer, isRunning, originPath } = useTimer();
  const pathname = "/mocktest/listening";

  // Start timer when page loads ONLY if timer isn't already saved
  useEffect(() => {
    const timer = setTimeout(() => {
      if ((!isRunning && timeRemaining === 0) || originPath !== pathname) {
        console.log("Starting new timer");
        startTimer(3600, pathname);
      } else {
        console.log("Timer already running", {
          timeRemaining,
          isRunning,
          originPath,
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isRunning, timeRemaining, pathname, originPath, startTimer]);

  return (
    <main className="bg-gray-50 min-h-screen">
      <TimeHeader />
      
      {/* AUDIO SECTION */}
      <div className="p-3 sm:p-4">
        <div className="bg-white rounded-lg shadow-sm border-[1px] border-black/5 px-6 py-4 flex flex-col gap-4 h-fit">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Play Audio</h3>
            <p className="text-sm">
              Listen to the audio and answer the questions,{" "}
              <span className="font-bold text-blue-700">
                You can only play the audio once!
              </span>
            </p>
          </div>

          <Separator />

          <div className="flex flex-col gap-2">
            <i className="ri-play-circle-line text-6xl text-center text-blue-600"></i>
            <div className="flex flex-row justify-between items-center gap-4">
              <p className="text-xs">00:00</p>
              <Progress value={60} className="fill-blue-600" />
              <p className="text-xs">00:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-3 sm:p-4 flex flex-col gap-4">
        {/* QUESTIONS */}
        <div className="bg-white rounded-lg shadow-sm border-[1px] border-black/5 p-3 flex flex-col gap-4 h-[45vh] overflow-scroll">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-extrabold">Questions</h4>
            <p className="text-xs">Answer the following questions</p>
          </div>

          <Separator />

          <div className="px-8 flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h5 className="text-xs font-semibold">Question {index + 1}</h5>
                <div className="flex items-center justify-center p-1 border-2 border-black/30 bg-gray-100 w-full h-fit rounded-lg">
                  <div className="flex items-center justify-center p-1 border-2 border-black/10 bg-white w-full h-fit rounded-md font-bold">
                    Your answer here
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ANSWER SECTION */}
        <div className="bg-white rounded-lg shadow-sm border-[1px] border-black/5 p-3 flex flex-col gap-4 h-[45vh] overflow-scroll">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-extrabold">Answer Sheet</h4>
            <p className="text-xs">Fill in your answers below</p>
          </div>

          <Separator />

          <div className="flex flex-col gap-4 items-center justify-center w-full px-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="gap-4 flex items-center justify-start px-4 py-1 border-2 border-black/30 bg-gray-100 w-full h-fit rounded-lg"
              >
                <div className="flex items-center justify-center px-2 py-1 border-2 border-black/10 bg-white w-fit h-fit rounded-md font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-sm">Write Your Answer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="p-3 sm:p-4 flex flex-col gap-4 fixed bottom-0 left-0 right-0">
        <div className="bg-white rounded-xl border-2 border-black/20 p-4 flex flex-col gap-4 shadow-2xl h-[15vh] overflow-scroll">
          <div className="flex flex-row gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`text-sm ${
                  index === 0
                    ? "font-bold text-blue-600"
                    : "font-normal text-gray-500/50"
                }`}
              >
                Part {index + 1}
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className={`font-bold aspect-square p-4 rounded-lg w-auto h-full flex items-center justify-center ${
                  index === 0
                    ? "text-blue-600 bg-gray-200"
                    : "text-gray-700 bg-white border-2 border-gray-100"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 