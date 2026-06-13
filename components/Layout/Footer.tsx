"use client";

import Link from "next/link";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-screen text-gray-600 dark:text-gray-400/50 font-inter mb-14 print:hidden">
      <div className="flex flex-col max-w-4xl gap-5 p-5 mx-auto text-sm border-t-2 border-gray-200 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10 sm:text-base">
        <section className="grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-4 capitalize">
            <FooterLink route="home" text="home" />
            <FooterLink route="about" text="about" />
            <FooterLink route="showcase" text="showcase" />
          </div>
          <div className="flex flex-col gap-4 capitalize">
            <Link href="https://x.com/BarnabyAaron" target="_blank" rel="noopener noreferrer">
              <p className="hover:text-black dark:hover:text-white w-fit">X</p>
            </Link>
            <Link href="https://www.linkedin.com/in/ajbarnaby" target="_blank" rel="noopener noreferrer">
              <p className="hover:text-black dark:hover:text-white w-fit">LinkedIn</p>
            </Link>
            <Link href="https://github.com/aaronbarnaby" target="_blank" rel="noopener noreferrer">
              <p className="hover:text-black dark:hover:text-white w-fit">Github</p>
            </Link>
            <Link href="mailto:me@ajbarnaby.com" target="_blank" rel="noopener noreferrer">
              <p className="hover:text-black dark:hover:text-white w-fit">Mail</p>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}

function FooterLink({ route, text }: { route: string; text: string }) {
  return (
    <Link href={`/${route}`}>
      <p className="hover:text-black dark:hover:text-white w-fit">{text}</p>
    </Link>
  );
}
