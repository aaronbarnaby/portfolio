"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === (href === "/home" ? "/" : href);

  return (
    <Link
      className={`${
        isActive ? "font-bold text-gray-800 dark:text-gray-100" : " text-gray-600 dark:text-gray-300"
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-black/10  dark:hover:bg-neutral-700/50 rounded-md`}
      href={href === "/home" ? "/" : href}
    >
      <p className="capitalize">{text}</p>
    </Link>
  );
}
