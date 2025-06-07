import Image from "next/image";

interface ButtonProps {
  variant?: "primary" | "outline" | "google";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  className,
}) => {
  const baseStyles =
    "w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    google: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {variant === "google" && (
        <Image src="/google-icon.svg" alt="Google" width={20} height={20} className="w-5 h-5" />
      )}
      {children}
    </button>
  );
};

export default Button;
