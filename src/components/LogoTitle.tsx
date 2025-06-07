import Image from "next/image";
import Link from "next/link";
import GICO from "./../../public/GICO.png";

const LogoTitle = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center space-x-4  ${className}`}>
      <Link href="/">
        <Image
          src={GICO}
          alt="logo"
          width={27}
          height={27}
          priority
          sizes="100%"
          className="rounded-full"
        />
      </Link>
      <h1 className="font-bold text-custom-blue-900 truncate">
        GICO Education
      </h1>
    </div>
  );
};

export default LogoTitle;
