"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function AnswerSection() {
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    console.log("Answer submitted:", answer);
    // Add your submission logic here
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Your Answer</h2>
        <p className="text-sm text-gray-600">
          Write your answer in the space provided below. Make sure to address all
          points in the question.
        </p>
      </div>

      <Textarea
        placeholder="Type your answer here..."
        className="min-h-[200px] resize-none"
        value={answer}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setAnswer(e.target.value)}
      />

      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="w-full sm:w-auto">
          Submit Answer
        </Button>
      </div>
    </div>
  );
} 