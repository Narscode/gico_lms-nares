"use client";

import Image from "next/image";

interface TextReadingSectionProps {
  imagePath: string;
}

export default function TextReadingSection({ imagePath }: TextReadingSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Reading Passage</h2>
        <p className="text-sm text-gray-600">
          Read the following passage carefully and answer the questions that follow.
        </p>
      </div>

      <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
        <Image
          src={imagePath}
          alt="Reading passage"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
} 