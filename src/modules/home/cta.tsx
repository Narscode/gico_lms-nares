import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <main className="*:text-center">
      <div className="flex items-center justify-center">
        <div className="sm:hidden">
          <Image
            src="/assets/home/cta-mobile.webp"
            alt=""
            width={340}
            height={340}
            sizes="100%"
            className="h-auto"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/assets/home/cta-desktop.webp"
            alt=""
            height={534}
            width={895}
            sizes="100%"
            className="h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-7 md:mt-8">
        <h1 className="md:text-2xl text-black text-xl font-bold">
          The World is Waiting For You!
        </h1>
        <p className="text-xs sm:text-sm text-black">
          Join us, as GICO will accompany your journey
        </p>
        <Link href={"/"} className="mt-2">
          <Button variant={"cta"}>Button CTA</Button>
        </Link>
      </div>
    </main>
  );
};

export default CTA;
