"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Container from "./Container";
import LogoTitle from "./LogoTitle";

const NAV_LINKS = [
  {
    name: "Benefit",
    href: "/benefit",
  },
  {
    name: "Packages",
    href: "/packages",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-50 left-0 right-0 mx-auto">
        <Container className="py-4 w-screen bg-custom-black/90 backdrop-blur-md">
          <section className="flex w-full items-center justify-between">
            <LogoTitle />
            <Desktop />
            <Mobile className="block sm:hidden" />
          </section>
        </Container>
      </nav>
    </>
  );
};

const Desktop = ({ className }: { className?: string }) => {
  return (
    <div className={`hidden sm:flex ${className}`}>
      <section className="flex items-center justify-center gap-9 mr-9">
        {NAV_LINKS.map((nav, i) => (
          <div key={i}>
            <Link
              href={nav.href}
              className="font-normal flex justify-between text-black"
            >
              {nav.name}
            </Link>
          </div>
        ))}
      </section>
      <Link href={`/login`} className="mr-2">
        <Button
          variant={"nav"}
          className="bg-blue-800 text-white font-bold border border-primary-800 bg-blue-800"
        >
          Login
        </Button>
      </Link>
      <Link href={`/register`}>
        <Button
          variant={"nav"}
          className="bg-transparent text-blue-800 shadow-none border-blue-800 border font-bold"
        >
          Sign up
        </Button>
      </Link>
    </div>
  );
};

const Mobile = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Sheet>
        <div className="flex items-center justify-center">
          <SheetTrigger asChild>
            <Menu size={28} className="block sm:hidden text-black" />
          </SheetTrigger>
        </div>

        <SheetContent
          className="border-l-0 p-0 text-custom-silver sm:hidden [&>button]:hidden w-52"
          side="right"
          // preventScroll={false}
        >
          {/* Close button positioned absolutely */}
          <div className="absolute right-4 top-24 z-50">
            <SheetClose className="rounded-full border-none p-2 hover:bg-gray-100/10">
              <X
                size={28}
                className="text-custom-silver transition-transform duration-200 hover:rotate-180 text-black"
              />
            </SheetClose>
          </div>

          {/* wrapper for absolute positioning */}
          <div className="relative flex h-full w-full flex-col items-center justify-between px-6 pt-36">
            {/* title omahti dan himakom */}
            <div className="z-20 w-full duration-300 animate-in slide-in-from-right">
              <SheetHeader className="text-start">
                <SheetTitle className="text-custom-silver">
                  <div className="flex flex-col gap-4">
                    {NAV_LINKS.map((nav, i) => (
                      <SheetClose asChild key={i}>
                        <Link
                          href={nav.href}
                          className="font-normal flex justify-between text-black"
                        >
                          {nav.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </SheetTitle>
              </SheetHeader>
            </div>

            {/* buttons */}
            <div className="z-20 flex w-full flex-col gap-2 pb-8">
              <Link href="auth/login">
                <Button
                  className="w-full bg-blue-800 text-white font-bold delay-100 duration-700 animate-in slide-in-from-right border border-primary-800 bg-primary-800"
                  size="lg"
                >
                  Login
                </Button>
              </Link>
              <Link href="auth/register">
                <Button
                  className="w-full delay-150 duration-700 bg-transparent text-blue-800 shadow-none border-blue-800 border font-bold animate-in slide-in-from-right"
                  size="lg"
                >
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* blue and orange background */}
            <div className="absolute bottom-1/2 left-0 right-0 top-0 z-0 bg-custom-blue duration-500 animate-in fade-in" />
            <div className="absolute bottom-0 left-0 right-0 top-1/2 z-0 bg-custom-orange duration-500 animate-in fade-in" />
            {/* black gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-custom-black via-custom-black/90 to-custom-black/80 duration-500 animate-in fade-in" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
