import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
} & ComponentProps<"button">;

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primarySoft focus:ring-offset-bg";

  const variants = {
    primary: "bg-primary text-fg px-6 py-3 shadow-soft hover:bg-primaryStrong",
    outline:
      "border border-primary text-primary px-5 py-2 hover:bg-primarySoft/10",
    ghost: "text-fg px-4 py-2 hover:bg-white/5",
  };

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
