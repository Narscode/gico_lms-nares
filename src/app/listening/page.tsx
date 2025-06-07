import { Button } from "@/components/ui/button";
import { Headphones, Clock } from "lucide-react";
import Image from "next/image";
import PartsScrollCards from "./PartsScrollCards";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Header />
      <div className="px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            {/* Left: Listening Section */}
            <div className="w-full md:w-[61.5%] flex flex-col gap-6 bg-white rounded-2xl border border-gray-200 p-6 min-h-full">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-md">Listening Section</span>
              </div>
              <Separator className="h-[2px] my-[-7px]" />
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image: Let it size naturally, height matches text */}
                <div className="flex items-center md:items-start justify-center md:justify-start">
                  <Image 
                    src="/listening-test.webp" 
                    alt="Listening Test" 
                    width={400} 
                    height={400} 
                    className="rounded-xl object-contain w-[280px] max-w-none"
                    priority
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1 pr-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center rounded-xl border border-gray-200 bg-neutral-100 px-4 py-2">
                      <Clock className="h-5 w-5 text-gray-700 mr-2" />
                      <span className="font-medium text-sm">Total Time :</span>
                      <span className="font-bold text-blue-700 ml-1 text-sm">xxx <span className="font-extrabold">Minutes</span></span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-700 leading-5">
                    The IELTS Listening test is the same for both IELTS Academic test and IELTS General Training test. The test consists of four parts, each with ten questions. The first two parts are concerned with social needs, and the final two parts are concerned with situations related to educational or training contexts. You will need to answer 40 questions in response to four recordings. The recordings are a mix of monologues and conversations from a range of native speakers, and you will only hear each recording once
                  </div>
                </div>
              </div>
              {/* Parts */}
              <div className="flex items-center gap-2 mb-[-2rem]">
                <span className="text-lg">Parts</span>
              </div>
              <div className="w-full">
                <PartsScrollCards />
              </div>
            </div>

            {/* Right: Rules and Start Button */}
            <div className="w-full md:w-[38.5%] flex flex-col gap-6 min-h-full bg-white rounded-2xl shadow-md">
              <div className="p-6 border border-gray-200 flex flex-col gap-4 h-full rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-lg">Rules</span>
                  <span className="text-red-600 font-bold ml-2">Caution!</span>
                </div>
                <Separator className="h-[2px] my-[-7px]" />
                {[1,2,3,4].map((rule) => (
                  <div key={rule} className="flex gap-3 items-start">
                    <span className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 bg-neutral-100 text-sm shrink-0">
                      {rule}
                    </span>
                    <span className="text-xs text-gray-700 break-words">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat pretium accumsan. Praesent et consectetur mi. Donec vel mollis neque, non varius nulla. Suspendisse at bibendum nisl, id blandit libero.
                    </span>
                  </div>
                ))}
                <div className="flex justify-end mt-auto pt-4">
                  <Button className="w-1/2 text-lg font-semibold" variant="cta">Start Test</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
