"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { HamBurger, Logo } from "~/components/UI";
import { FadeContainer, popUp, useDarkMode } from "~/utils";
import { NavItem } from "./NavItem";

export default function TopNavbar() {
  const navRef = useRef<HTMLDivElement>(null);

  const control = useAnimation();
  const [navOpen, setNavOpen] = useState(false);
  const { isDarkMode, changeDarkMode } = useDarkMode();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );

      control.start("visible");
    } else {
      navRef.current!.classList.remove(
        ...[
          "shadow",
          "backdrop-blur-xl",
          "bg-white/70",
          "dark:bg-darkSecondary",
        ]
      );
      control.start("hidden");
    }
  }, [control]);

  useEffect(() => {
    window.addEventListener("scroll", addShadowToNavbar);
    return () => {
      window.removeEventListener("scroll", addShadowToNavbar);
    };
  }, [addShadowToNavbar]);

  // to lock the scroll when mobile is open
  function lockScroll() {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle("lock-scroll"); // class is define in the global.css
  }

  /* To Lock the Scroll when user visit the mobile nav page */
  function handleClick() {
    lockScroll();
    setNavOpen(!navOpen);
  }

  return (
    <div ref={navRef} className="fixed w-full dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:p-4 sm:px-6 z-50 print:hidden">
      {/* Mobile Navigation Hamburger and MobileMenu */}
      <HamBurger open={false} handleClick={handleClick} />
      <AnimatePresence>
        {navOpen && (
          <div>Mobile Menu</div>
        )}
      </AnimatePresence>

      <Link href="/" className="mr-3" aria-label="Link to Home Page">
        <Logo className="relative hidden w-8 h-8 sm:inline-flex" />
        <div className="w-full sm:!hidden">
          <motion.p 
            initial="hidden"
            animate={control}
            variants={{
              hidden: { opacity: 0, scale: 1, display: "none" },
              visible: { opacity: 1, scale: 1, display: "inline-flex" },
            }}
            className="font-sarina"
          >Aaron Barnaby</motion.p>
        </div>
      </Link>

      {/* Top Nav */}
      <motion.nav className="z-10 hidden sm:flex md:inset-0 md:justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FadeContainer}
          className="flex items-center md:gap-2"
        >
          <NavItem href="/home" text="Home" />
          <NavItem href="/" text="About" />
          <NavItem href="/" text="Skills" />
          <NavItem href="/" text="Projects" />
        </motion.div>
      </motion.nav>

      {/* DarkMode Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="cursor-pointer"
        title="Toggle Theme"
      >
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={changeDarkMode}
          size={24}
        />
      </motion.div>
    </div>
  );
}