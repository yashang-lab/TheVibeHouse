import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "bg-brand-perk text-brand hover:bg-[#a6e546] shadow-clean hover:shadow-clean-lg",
    secondary: "bg-white text-brand shadow-clean hover:shadow-clean-lg border border-brand/10",
    outline: "bg-transparent text-brand border-2 border-brand hover:bg-brand/5",
    ghost: "bg-transparent text-brand hover:bg-brand/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
