"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Popup from "@/app/mock-test/listening/popup";

const WRITING_DETAILS = [
  {
    part: "Part 1",
    desc: "Write at least 150 words.",
    task: "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    question:
      "The table below gives information about the underground railway systems in six cities.",
    tableData: {
      headers: [
        "City",
        "Date opened",
        "Kilometres of route",
        "Passengers per year (in millions)",
      ],
      rows: [
        ["London", "1863", "394", "775"],
        ["Paris", "1900", "199", "1191"],
        ["Tokyo", "1927", "155", "1927"],
        ["Washington DC", "1976", "126", "144"],
        ["Kyoto", "1981", "11", "45"],
        ["Los Angeles", "2001", "28", "50"],
      ],
    },
  },
  {
    part: "Part 2",
    desc: "Write at least 250 words.",
    task: "Write about the following topic:",
    question:
      "Some people think that a sense of competition in children should be encouraged. Others believe that children who are taught to co-operate rather than compete become more useful adults.",
    instruction: "Discuss both these views and give your own opinion.",
    additionalInfo:
      "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
  },
];

export const Writing = () => {
  const [activePart, setActivePart] = useState("Part 1");
  const [answer, setAnswer] = useState({ "Part 1": "", "Part 2": "" });
  const [wordCount, setWordCount] = useState({ "Part 1": 0, "Part 2": 0 });
  const [showPopup, setShowPopup] = useState(false);

  const handleAnswerChange = (e, part) => {
    const text = e.target.value;
    setAnswer((prev) => ({ ...prev, [part]: text }));

    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    setWordCount((prev) => ({ ...prev, [part]: words }));
  };

  const handleNext = () => {
    if (activePart === "Part 1") {
      setActivePart("Part 2");
    } else if (activePart === "Part 2") {
      setShowPopup(true);
    }
  };

  const handleBack = () => {
    if (activePart === "Part 2") {
      setActivePart("Part 1");
    }
  };

  const activePartDetails = WRITING_DETAILS.find(
    (item) => item.part === activePart
  );

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* HEADER */}
      <nav className="flex flex-row justify-between items-center border-b p-3 sm:p-4 bg-white">
        <p className="font-medium">Placement Test</p>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
          <i className="bg-blue-600 text-white aspect-square rounded-md sm:w-[36px] sm:h-[36px] w-[32px] h-[32px] ri-inbox-2-fill flex items-center justify-center text-xl sm:text-2xl"></i>
          <i className="bg-blue-600 text-white aspect-square rounded-md sm:w-[36px] sm:h-[36px] w-[32px] h-[32px] ri-notification-2-line flex items-center justify-center text-xl sm:text-2xl"></i>
          <div className="flex flex-row gap-2 rounded-lg justify-center items-center border-0 sm:border-2 border-gray-950/10 p-0 sm:p-2">
            <div className="w-[32px] h-[32px] sm:w-[25px] sm:h-[25px] bg-blue-600 rounded-lg"></div>
            <p className="hidden sm:block">Nia Bunga R</p>
          </div>
        </div>
      </nav>

      <main className="p-6 relative">
{/* Popup Overlay */}
{showPopup && (
  <div className="fixed inset-0 flex justify-center items-center z-0">
    <Popup onClose={() => setShowPopup(false)} />
  </div>
)}



        <div className="flex justify-between items-center mb-3 md:mb-8">
          <div className="flex items-center gap-4">
            <button
              className={cn(
                buttonVariants({ variant: "outlineBlue" }),
                "w-fit flex justify-center items-center aspect-square sm:aspect-auto"
              )}
              onClick={handleBack}
            >
              <ArrowLeft className="size-4 stroke-3" />
              <span className="font-semibold hidden ml-1 sm:block">Back</span>
            </button>
            <h1 className="text-primary-800 font-bold text-lg hidden md:block">
              {activePartDetails.part}
            </h1>
            <h2 className="font-medium hidden md:block">
              {activePartDetails.desc}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-black bg-white rounded-lg py-2 px-4 font-semibold border shadow-sm">
              Time : <span className="text-primary-800">02:00:00</span>
            </span>
            <button
              onClick={handleNext}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-fit flex justify-center items-center bg-blue-600 aspect-square sm:aspect-auto"
              )}
            >
              <span className="font-semibold hidden sm:block">Next</span>
              <ArrowRight className="size-4 stroke-3" />
            </button>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-start gap-x-4 mb-3 ml-3">
          <h1 className="text-primary-800 font-bold text-lg">
            {activePartDetails.part}
          </h1>
          <h2 className="font-medium">{activePartDetails.desc}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 border shadow-sm">
            <h2 className="font-bold mb-1">Task</h2>
            <p className="text-sm text-gray-600 mb-4 border-b pb-1.5">
              {activePartDetails.task}
            </p>
            {activePartDetails.tableData ? (
              <>
                <p className="text-sm text-gray-600 mb-4">
                  {activePartDetails.question}
                </p>
                <div className="mb-4">
                  <h3 className="font-medium mb-2">
                    Underground Railway Systems
                  </h3>
                  <div className="border rounded overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          {activePartDetails.tableData.headers.map(
                            (header, index) => (
                              <th
                                key={index}
                                className="border px-3 py-2 text-sm text-left"
                              >
                                {header}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {activePartDetails.tableData.rows.map(
                          (row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className="border px-3 py-2 text-sm"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600 mb-4">
                  {activePartDetails.question}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {activePartDetails.instruction}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {activePartDetails.additionalInfo}
                </p>
              </>
            )}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="justify-between mb-4 bg-white rounded-lg p-6 border shadow-sm hidden lg:flex">
              <div className="flex gap-4">
                {['Part 1', 'Part 2'].map((part) => (
                  <button
                    key={part}
                    className={`${
  activePart === part ? "text-blue-600" : "text-gray-400"
}`} onClick={() => setActivePart(part)}>
                    {part}
                  </button>
                ))}
              </div>
              <ChevronRight className="size-5 text-gray-300" />
            </div>

            <div className="mb-4 bg-white rounded-lg p-6 border shadow-sm">
              <h2 className="text-lg font-medium mb-2">Answer</h2>
              <p className="text-sm text-gray-600 mb-4">
                Arrange your writing in the text box below
              </p>

              <textarea
                className="w-full h-64 border rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write here..."
                value={answer[activePart]}
                onChange={(e) => handleAnswerChange(e, activePart)}
              />
              <div className="flex justify-start mt-2">
                <span className="text-sm font-medium">
                  Word count: {wordCount[activePart]}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Mobile Part Switch */}
        <div className="sticky left-0 right-0 mx-auto bottom-10 z-50 w-fit lg:hidden bg-white rounded-3xl py-4 px-3 border shadow-sm">
          <div className="flex gap-3">
            {["Part 1", "Part 2"].map((part) => (
              <button
                key={part}
                className={`rounded-full px-4 py-1 ${
                  activePart === part ? "text-primary-800" : "text-gray-500"
                }`}
                onClick={() => setActivePart(part)}
              >
                {part}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
