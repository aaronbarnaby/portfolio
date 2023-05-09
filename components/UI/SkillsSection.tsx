"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiAmazonaws,
  SiAdobephotoshop,
  SiCsharp,
  SiJira,
  SiTerraform
} from "react-icons/si";
import { TbSql } from "react-icons/tb"

import { FadeContainer, popUp, useDarkMode } from "~/utils";
import * as WindowsAnimation from "~/lib/windowsAnimation";
import { Heading } from "./Heading";

export function SkillsSection() {
  const { isDarkMode } = useDarkMode();

  const skills = [
    {
      name: "HTML",
      Icon: SiHtml5,
    },
    {
      name: "CSS",
      Icon: SiCss3,
    },
    {
      name: "Javascript",
      Icon: SiJavascript,
    },
    {
      name: "Typescript",
      Icon: SiTypescript,
    },
    {
      name: "React.js",
      Icon: SiReact,
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      name: 'C#',
      Icon: SiCsharp
    },
    {
      name: "Tailwind CSS",
      Icon: SiTailwindcss,
    },
    {
      name: "Git",
      Icon: SiGit,
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      name: 'SQL',
      Icon: TbSql
    },
    {
      name: 'AWS',
      Icon: SiAmazonaws
    },
    {
      name: 'Terraform',
      Icon: SiTerraform
    },
    {
      name: 'JIRA',
      Icon: SiJira
    },
    {
      name: 'Photoshop',
      Icon: SiAdobephotoshop
    }
  ];

  return (
    <section className="mx-5">
      <Heading title="My Skills" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-4 my-10"
      >
        {skills.map((skill, index) => {
          const Icon = skill.Icon;
          return (
            <motion.div
              variants={popUp}
              key={index}
              title={skill.name}
              onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
                WindowsAnimation.showHoverAnimation(e, isDarkMode)
              }
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) =>
                WindowsAnimation.removeHoverAnimation(e)
              }
              className="flex items-center justify-center gap-4 p-4 origin-center transform border border-gray-300 rounded-sm sm:justify-start bg-gray-50 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary dark:border-neutral-700 md:origin-top group"
            >
              <div className="relative transition pointer-events-none select-none group-hover:scale-110 sm:group-hover:scale-100">
                <Icon className="w-8 h-8" />
              </div>
              <p className="hidden text-sm font-semibold pointer-events-none select-none sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}