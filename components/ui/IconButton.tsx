import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "danger" | "ghost";
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  title,
  className = "",
  disabled = false,
  type = "button",
  variant = "default",
}) => {
  const baseClasses =
    "w-8 h-8 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 rounded-none";

  const variants = {
    default: "bg-white/5 text-muted hover:bg-white hover:text-black",
    danger: "bg-red-500/10 text-red-500/70 hover:bg-red-500 hover:text-white",
    ghost: "text-muted hover:text-white hover:bg-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      title={title}
      type={type}
      disabled={disabled || !onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
