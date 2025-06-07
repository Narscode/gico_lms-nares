import {
  AdditionalInformation,
  additionalInformation,
  SocialMedia,
  socialMedia,
} from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[2fr,1.5fr] gap-8 md:gap-24  bg-blue-100 p-4 md:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <Image
            src={
              "https://unsplash.com/photos/orange-tabby-cat-on-yellow-surface-p6yH8VmGqxo"
            }
            alt="gico-logo"
            width={200}
            height={200}
            className="w-[16px] h-[16px] aspect-square rounded-full"
          />
          <h3 className="text-blue-700 text-[18px] font-extrabold">
            Gico Education
          </h3>
        </div>

        <p className="text-black text-[14px]">
          A Flexible IELTS learning platform, designed to boost your speaking
          confidence and enhance your English languange skills.
        </p>

        <div className="flex flex-row gap-4">
          {socialMedia.map((item: SocialMedia, index: number) => (
            <Link
              key={index}
              href={item.href}
              className="h-[36px] w-[36px] flex items-center justify-center rounded-full text-white bg-blue-400 text-xl"
            >
              <i className={item.icon}></i>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-self-end">
        <div className="flex flex-col gap-2">
          <h3 className="font-extrabold">Pages</h3>
          <h5>Benefit</h5>
          <h5>Package</h5>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-extrabold">Contact</h3>
          <div className="flex flex-col gap-2">
            {additionalInformation.map(
              (item: AdditionalInformation, index: number) => (
                <div className="flex flex-row items-center gap-2" key={index}>
                  <i className={item.icon}></i>
                  <p>{item.label}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
