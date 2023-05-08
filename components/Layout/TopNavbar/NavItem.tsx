"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { popUp } from "~/utils";

export function NavItem({ href, text }: { href: string; text: string }) {
  const pathname = usePathname();
  const isActive = pathname === (href === "/home" ? "/" : href);
  
  return (
    <Link
      className={`${
        isActive
          ? "font-bold text-gray-800 dark:text-gray-100"
          : " text-gray-600 dark:text-gray-300"
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-black/10  dark:hover:bg-neutral-700/50 rounded-md`}
      href={href === "/home" ? "/" : href}
    >
      <motion.p className="capitalize" variants={popUp}>
        {text}
      </motion.p>
    </Link>
  );
}