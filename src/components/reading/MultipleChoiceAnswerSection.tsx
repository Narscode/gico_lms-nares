"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the main idea of the passage?",
    options: [
      "The importance of education in modern society",
      "The challenges of remote learning",
      "The benefits of traditional classroom settings",
      "The role of technology in education",
    ],
  },
  {
    id: 2,
    question: "According to the passage, what is the author's primary concern?",
    options: [
      "Student engagement",
      "Academic performance",
      "Social interaction",
      "Technological advancement",
    ],
  },
];

export default function MultipleChoiceAnswerSection() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Answers submitted:", answers);
    // Add your submission logic here
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Multiple Choice Questions</h2>
        <p className="text-sm text-gray-600">
          Select the best answer for each question based on the reading passage.
        </p>
      </div>

      <div className="space-y-6">
        {sampleQuestions.map((question) => (
          <div key={question.id} className="space-y-4">
            <h3 className="font-medium">{question.question}</h3>
            <RadioGroup
              value={answers[question.id]}
              onValueChange={(value) => handleAnswerChange(question.id, value)}
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={`q${question.id}-${index}`} />
                  <Label htmlFor={`q${question.id}-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="w-full sm:w-auto">
          Submit Answers
        </Button>
      </div>
    </div>
  );
} 