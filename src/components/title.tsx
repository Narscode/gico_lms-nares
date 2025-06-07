interface TitleProps {
  className: string;
  text: string;
}

export default function Title({ className, text }: TitleProps) {
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        // Remove the ** markers and apply bold styling
        const boldText = part.slice(2, -2);
        return (
          <span key={index} className="font-bold">
            {boldText}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <h2
      className={`bg-gray-basic rounded-xl h-fit w-fit lg:w-44 lg:h-12 flex justify-center items-center text-l lg:text-xl py-2 px-8 lg:p-0 text-blue-darker-2 shadow-derek 2xl:text-white xl:text-pink-400 md:text-green-600 sm:text-purple-600 text-blue-600 lg:text-red-600 ${className}`}
    >
      {formatText(text)}
    </h2>
  );
}
