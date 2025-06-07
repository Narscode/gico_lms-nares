import { GICCard as Props } from "@/constant";

const MainCard: React.FC<Props> = ({ label, content, icon, isAIAssisted }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg border-l-gray-50 border-2 border-black/5 w-[350px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4 items-center">
          <i className={`${icon} text-blue-500 text-2xl`}></i>
          <p className="font-bold">{label}</p>
        </div>

        {isAIAssisted && (
          <p className="text-sm flex items-center justify-center px-3 py-1 bg-blue-500 w-fit rounded-lg text-white font-bold">
            AI Assisted
          </p>
        )}
      </div>

      <div className="w-full h-[1px] bg-black/5"></div>

      <p className="font-normal text-xs">{content}</p>
    </div>
  );
};

export default MainCard;
