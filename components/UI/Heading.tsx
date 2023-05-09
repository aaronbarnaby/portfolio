"use client";

import { headingFromLeft } from "~/utils";
import { AnimatedHeading } from "../Motion";

export function Heading({ title }: { title: React.ReactNode | string }) {
  return (
    <AnimatedHeading
      className="w-full my-2 text-3xl font-bold text-left font-inter"
      variants={headingFromLeft}
    >
      {title}
    </AnimatedHeading>
  );
}