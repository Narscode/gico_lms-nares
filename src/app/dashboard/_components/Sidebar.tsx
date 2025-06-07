"use client";
import React from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideBar as SideBarProps, sideBarMenu } from "@/constant";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <section className="border-r border-gray-950/25 p-6 flex flex-col gap-8 max-h-screen sticky top-0 z-10">
      {/* Logo Section */}
      <div className="flex flex-col justify-center gap-4">
        <h1 className="text-blue-600 font-black">GICO Education</h1>
        <Separator className="bg-gray-950/25" />
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-950 font-medium">Menu</p>
        <nav className="flex flex-col ml-2 gap-2">
          {sideBarMenu.map((item: SideBarProps, index: number) => {
            const isActive = pathname === item.href[0];

            return (
              <Link
                href={item.href[0]}
                key={index}
                className={cn(
                  "flex flex-row gap-4 items-center w-full p-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                )}
              >
                <i className={cn("text-2xl", item.icon)}></i>
                <h3 className="text-sm font-medium">{item.label}</h3>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <button className="w-full rounded-lg border-2 border-gray-950/50 bg-blue-100 flex flex-row gap-2 py-2 px-4 items-center justify-center hover:bg-blue-200 transition-colors">
          <i className="ri-logout-box-r-line"></i>
          <p className="font-medium">Logout</p>
        </button>
      </div>
    </section>
  );
};

export default SideBar;
