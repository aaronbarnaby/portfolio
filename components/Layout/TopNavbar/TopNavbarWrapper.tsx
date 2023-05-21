"use client";

import { useAnimation } from "framer-motion";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";

export function TopNavbarWrapper({ children }: PropsWithChildren) {
  const navRef = useRef<HTMLDivElement>(null);

  const control = useAnimation();

  // Adding Shadow, backdrop to the navbar as user scroll the screen
  const addShadowToNavbar = useCallback(() => {
    if (window.pageYOffset > 10) {
      navRef.current!.classList.add(...["shadow", "backdrop-blur-xl", "bg-white/70", "dark:bg-darkSecondary"]);

      control.start("visible");
    } else {
      navRef.current!.classList.remove(...["shadow", "backdrop-blur-xl", "bg-white/70", "dark:bg-darkSecondary"]);
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
  // TODO: Using Zustand what the mobile menu open state
  // function handleClick() {
  //   lockScroll();
  //   setNavOpen(!navOpen);
  // }

  return (
    <div
      ref={navRef}
      className="fixed w-full dark:text-white top-0 flex items-center justify-between px-4 py-[10px] sm:p-4 sm:px-6 z-50 print:hidden"
    >
      {children}
    </div>
  );
}
