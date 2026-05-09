import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest";
    
    const variants = {
      primary: "bg-primary text-surface hover:bg-primary/90",
      outline: "border border-primary text-primary hover:bg-primary hover:text-surface",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
