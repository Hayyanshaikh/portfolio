import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg" | "full";
  icon?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  "data-cursor"?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  icon,
  href,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "group relative font-bold uppercase tracking-[0.2em] inline-flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden select-none active:scale-95";

  const variants = {
    solid: "bg-white text-black",
    outline: "border border-white/20 text-white hover:border-white",
  };

  const sizes = {
    sm: "px-6 py-3 text-[10px]",
    md: "px-8 py-4 text-[10px]",
    lg: "px-12 py-5 text-[11px]",
    full: "w-full py-6 text-[11px]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Unified Hover Background Effect */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 z-0
          ${variant === "solid" ? "bg-black/90" : "bg-white"}`}
      />

      {/* Content Container */}
      <span
        className={`relative z-10 flex items-center gap-2 transition-all duration-500
        ${variant === "outline" ? "group-hover:text-black" : "group-hover:text-white"}`}
      >
        {children}
        {icon && (
          <span className="transition-transform duration-500">{icon}</span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
