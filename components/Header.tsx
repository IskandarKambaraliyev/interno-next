"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "./Logo";

const Header = () => {
  return (
    <header
      className={cn(
        "w-full h-20 sticky top-0 left-0 z-header flex-center border-b border-white bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="container">
        <Link href="/" className="block w-fit">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
