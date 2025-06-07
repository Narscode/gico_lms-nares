"use client";

import CTA from "@/modules/home/cta";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import Card from "@/components/landing/card";
import { TalkingPenguin } from "@/components/landing/talking_penguin";
import IELTSSection from "@/components/landing/ielts_section";
import { PricingCard as PricingCardType, pricingCard } from "@/constant";

import Footer from "@/components/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="px-4 md:px-6 lg:px-12 flex flex-col max-w-screen-2xl mx-auto">
        <div className="lg:flex lg:flex-row w-full mt-12 md:mt-16">
          <div className="flex flex-col lg:w-3/5">
            <h1 className="text-[1.4rem] md:text-[1.65rem] text-center lg:text-left font-plusJakartaSans leading-8 md:leading-9 lg:text-[2.1rem] lg:leading-[3.15rem]">
              Power up your IELTS result <br className="lg:hidden" /> with{" "}
              <span className="font-bold text-blue-800">
                Private <br className="hidden lg:block" /> Academy
              </span>{" "}
              plus
              <br className="lg:hidden" />{" "}
              <span className="font-bold text-blue-800">AI-assisted tools</span>
            </h1>
            <p className="mt-3 md:mt-4 lg:mt-2 text-sm text-center font-plusJakartaSans leading-6 md:leading-8 lg:text-left text-neutral-600 lg:text-base">
              Online academy with everything needed to improve your IELTS score.
              All in <br className="hidden lg:block" />
              the power of your hand
            </p>
            <div className="mt-4 md:mt-5 flex justify-center lg:justify-start lg:order-first lg:ml-1">
              <Image
                src="/assets/hero/logo_idp_ielts.webp"
                alt="IDP IELTS logo"
                width={90}
                height={45}
                className="w-[90px] lg:w-[9rem]"
              />
            </div>

            {/* Reworked the Experience/Join Today section for mobile */}
            <div className="mx-auto lg:mx-0 mt-5 md:mt-6 lg:mt-auto mb-4 md:mb-5 w-full max-w-md lg:w-[87.5%] border-neutral-300 border border-opacity-80 rounded-lg overflow-hidden shadow-sm">
              <div className="p-3 flex flex-col lg:flex-row items-center">
                <p className="font-plusJakartaSans text-xs md:text-sm text-center lg:text-left">
                  Experience all features{" "}
                  <span className="font-bold text-blue-800">
                    free for limited time!
                  </span>
                </p>
                <button className="mt-2 lg:mt-0 bg-blue-800 w-full lg:w-auto lg:ml-auto py-1.5 px-3 rounded-md flex justify-center items-center hover:bg-blue-900 transition-colors">
                  <p className="text-center text-white text-xs md:text-sm font-medium">
                    Join Today!
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 lg:mt-0 w-full flex justify-center lg:justify-end lg:w-2/5">
            <Image
              src="/assets/hero/hero_image.webp"
              alt="Hero image"
              width={400}
              height={600}
              className="w-[75%] md:w-[70%] lg:w-[90%] h-auto"
              priority
            />
          </div>
        </div>
        <h2 className="text-base md:text-[1.3rem] text-center font-plusJakartaSans mt-16 md:mt-20 lg:mt-24 lg:text-[1.8rem]">
          <span className="font-bold text-blue-800">Everything</span> in your{" "}
          <span className="font-bold text-blue-800">pocket!</span>
        </h2>
        <h3 className="text-xs md:text-sm text-center font-plusJakartaSans mt-1">
          <span className="font-bold text-blue-800">
            IELTS Full Preparation
          </span>{" "}
          bundle? Just Open
          <span className="font-bold text-blue-800"> GICO!</span>
        </h3>

        {/* Completely redesigned card section for better responsiveness */}
        <div className="mt-10 md:mt-12 lg:mt-16 px-4 md:px-6 lg:px-0">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Left side cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6 w-full md:w-auto order-2 md:order-1">
              <Card
                className="md:-translate-y-12 md:-translate-x-8 lg:-translate-x-16 md:w-[200px] lg:w-[220px] max-h-fit"
                icon="pen-tool"
                label="GIC Write"
                isAIAssisted={true}
                content="Instant evaluations of IELTS writing tasks with AI feedback on grammar, coherence and vocabulary"
              />
              <Card
                className="md:translate-y-12 md:w-[200px] lg:w-[220px] max-h-fit"
                icon="radio"
                label="GIC Talk"
                isAIAssisted={true}
                content="AI-powered speaking practice with pronunciation feedback and scoring based on IELTS criteria"
              />
            </div>

            {/* Center image */}
            <div className="order-1 md:order-2 flex justify-center mb-6 md:mb-0 md:mx-6 lg:mx-8">
              <Image
                src="/assets/hero/phone_mockup.webp"
                alt="Phone mockup"
                width={325}
                height={650}
                className="w-[200px] md:w-[250px] lg:w-[325px]"
              />
            </div>

            {/* Right side cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-6 w-full md:w-auto order-3 mt-3 md:mt-0">
              <Card
                className="md:-translate-y-12 md:translate-x-8 lg:translate-x-16 md:w-[200px] lg:w-[220px] max-h-fit"
                icon="book-open"
                label="GIC Learn"
                isAIAssisted={true}
                content="Comprehensive learning resources with adaptive lessons tailored to your IELTS goal"
              />
              <Card
                className="md:translate-y-12 md:w-[200px] lg:w-[220px] max-h-fit"
                icon="file-text"
                label="Mockup Test"
                isAIAssisted={true}
                content="Realistic mock tests with detailed performance analysis to track your progress"
              />
            </div>
          </div>
        </div>
        <TalkingPenguin />
        <IELTSSection />
      </div>
      <Container>
        <PricingCardSection />
        <CTA />
      </Container>
      <Footer />
    </>
  );
}

const PricingCardSection = () => {
  return (
    <main className="pt-16 flex flex-col gap-12">
      <div className="px-4 flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-4 items-end">
        {pricingCard.map((item: PricingCardType, index: number) => (
          <PricingCard
            key={index}
            name={item.name}
            durationTime={item.durationTime}
            features={item.features}
            isBestDeal={item.isBestDeal}
            price={item.price}
            href={item.href}
          />
        ))}
      </div>
    </main>
  );
};
