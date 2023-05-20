"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { popUp } from "~/utils";

import profileImage from '~/assets/aaron.jpg';

export function ProfileBadge() {
  return (
    <section
      className="grid min-h-screen py-20 place-content-center"
    >
      <div className="relative flex flex-col items-center w-full gap-10 mx-auto">
        <motion.div
          variants={popUp}
          className="relative flex items-center justify-center p-1 rounded-full w-[28rem] h-96 before:absolute before:inset-0 before:border-t-8 before:border-b-8 before:border-l-2 before:border-r-2 before:border-black before:dark:border-white before:rounded-full"
        >
          <Image
            src={profileImage}
            className="rounded-full"
            alt="Profile Image"
            quality={75}
            priority
          />
        </motion.div>

        <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
          <div className="flex flex-col gap-1">
            <h1
              className="text-5xl font-bold lg:text-6xl font-caveat"
            >
              Aaron Barnaby
            </h1>
            <p
              className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
            >
              Full-Stack Web/Software Developer
            </p>
          </div>
        </div>
        {/* <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 transition-transform border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-white dark:hover:bg-neutral-800 active:scale-95"
        >
          <FiDownload />
          <p>Resume</p>
        </Link> */}
      </div>
    </section>
  );
}