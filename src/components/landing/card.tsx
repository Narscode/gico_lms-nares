import Image from "next/image";

interface CardProps {
  icon: string;
  label: string;
  isAIAssisted: boolean;
  content: string;
  iconColor?: string;
  className?: string;
}

export default function Card({
  icon,
  label,
  isAIAssisted,
  content,
  iconColor = "text-blue-500",
  className = "",
}: CardProps) {
  return (
    <div
      className={`flex flex-col gap-2 p-3 rounded-xl border border-black/10 shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={iconColor}>
            <Image
              src={`/icons/${icon}.svg`}
              alt={`${icon} icon`}
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <p className="font-bold font-plusJakartaSans text-xs sm:text-sm">
            {label}
          </p>
        </div>

        {isAIAssisted && (
          <div className="flex-shrink-0 ml-1">
            <p className="font-plusJakartaSans text-[0.6rem] px-1.5 py-0.5 flex items-center justify-center bg-blue-500 rounded text-white whitespace-nowrap">
              AI-Assisted
            </p>
          </div>
        )}
      </div>

      <div className="w-full h-[1px] bg-black/5"></div>

      <p className="font-normal text-[0.7rem] sm:text-xs font-plusJakartaSans line-clamp-4">
        {content}
      </p>
    </div>
  );
}
