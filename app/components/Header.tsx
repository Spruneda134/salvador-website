// components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "https://www.linkedin.com/in/salvador-pruneda/", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname?.() ?? "/";

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-sm fixed z-10">
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4"
      >
        <div className="h-16 flex items-center justify-center">
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      "text-sm font-medium transition-colors duration-150 " +
                      (isActive
                        ? "text-sky-600 underline underline-offset-4"
                        : "text-gray-700 hover:text-sky-600")
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
