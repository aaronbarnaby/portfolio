"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

import { FadeContainer, opacityVariant, popUp } from "~/utils";

import profileImage from '~/assets/profileImageSample.jpg';
import Link from "next/link";

export function ProfileBadge() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={FadeContainer}
      viewport={{ once: true }}
      className="grid min-h-screen py-20 place-content-center"
    >
      <div className="relative flex flex-col items-center w-full gap-10 mx-auto">
        <motion.div
          variants={popUp}
          className="relative flex items-center justify-center p-3 rounded-full w-44 h-44 xs:w-52 xs:h-52 before:absolute before:inset-0 before:border-t-4 before:border-b-4 before:border-black before:dark:border-white before:rounded-full before:animate-photo-spin"
        >
          <Image
            src={profileImage}
            className="rounded-full shadow"
            alt="Profile Image"
            quality={75}
            priority
          />
        </motion.div>

        <div className="flex flex-col w-full gap-3 p-5 text-center select-none ">
          <div className="flex flex-col gap-1">
            <motion.h1
              variants={opacityVariant}
              className="text-5xl font-bold lg:text-6xl font-caveat"
            >
              Aaron Barnaby
            </motion.h1>
            <motion.p
              variants={opacityVariant}
              className="font-medium text-xs md:text-sm lg:text-lg text-[#383838] dark:text-gray-200"
            >
              Full-Stack Web/Software Developer
            </motion.p>
          </div>
        </div>
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 transition-transform border border-gray-500 rounded-md outline-none select-none dark:border-gray-400 hover:bg-white dark:hover:bg-neutral-800 active:scale-95"
        >
          <FiDownload />
          <p>Resume</p>
        </Link>
      </div>
    </motion.section>
  );
}