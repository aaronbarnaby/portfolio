import Link from "next/link";
import { TopNavbarWrapper } from "./TopNavbarWrapper";
import { NavItem } from "./NavItem";
import { Logo } from "~/components/UI/Icons/Logo";

export function TopNavbar() {
  return (
    <TopNavbarWrapper>
      {/* <HamBurger /> */}
      {/* <MobileMenu /> */}

      <Link href="/" className="mr-3" aria-label="Link to Home Page">
        <Logo className="relative hidden w-8 h-8 sm:inline-flex" />
        <div className="w-full sm:!hidden">
          <p className="font-sarina">Aaron Barnaby</p>
        </div>
      </Link>

      {/* Top Nav */}
      <nav className="z-10 hidden sm:flex md:inset-0 md:justify-center">
        <div className="flex items-center md:gap-2">
          <NavItem href="/home" text="Home" />
          {/* <NavItem href="/about" text="About" /> */}
          {/* <NavItem href="/projects" text="Projects" /> */}
          {/* <NavItem href="/skills" text="Skills" /> */}
        </div>
      </nav>

      {/* DarkMode Container */}
      <div className="cursor-pointer" title="Toggle Theme">
        {/* <DarkModeSwitch size={24} /> */}
      </div>
    </TopNavbarWrapper>
  );
}
