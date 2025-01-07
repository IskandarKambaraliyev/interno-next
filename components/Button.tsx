"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  color?: "dark" | "brown";
  href?: string;
  type?: "button" | "submit" | "reset";
  arrow?: boolean;
  className?: string;
  disabled?: boolean;
  fill?: boolean;
  onClick?: () => void;
};
const Button = ({
  children,
  color = "dark",
  href,
  type = "button",
  arrow = true,
  className,
  disabled,
  fill = false,
  onClick,
}: ButtonProps) => {
  const getButtonClasses = () =>
    cn(
      "flex-center gap-2.5 py-3 md:py-3.5 lg:py-4 px-6 md:px-7 lg:px-8 rounded-2xl hover:opacity-90 text-base md:text-lg font-semibold transition group",
      {
        "w-fit": !fill,
        "w-full": fill,
        "bg-dark text-white": color === "dark",
        "bg-brown text-white": color === "brown",
      }
    );

  const getIconClasses = () =>
    cn(
      "size-6 group-hover:translate-x-2 group-active:translate-x-2 transition-transform",
      {
        "text-brown": color === "dark",
        "text-dark": color === "brown",
      }
    );

  if (href) {
    return (
      <Link href={href} className={getButtonClasses()}>
        {children}

        <ArrowRightIcon className={getIconClasses()} />
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={getButtonClasses()}
    >
      {children}

      <ArrowRightIcon className={getIconClasses()} />
    </button>
  );
};

export default Button;
