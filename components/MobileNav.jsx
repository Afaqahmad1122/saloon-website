"use client";

import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

const links = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/treatments",
    name: "Treatments",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className="relative flex flex-col justify-between h-full p-8">
      <div
        onClick={() => setMobileNav(false)}
        className="cursor-pointer text-accent"
      >
        <IoCloseOutline className="text-4xl" />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              pathname === link.href && "border-b-2 border-accent"
            } uppercase max-w-max mx-auto`}
          >
            {link.name}
          </Link>
        ))}
      </ul>
      <Socials containerrStyles="text-white text-lg flex justify-center gap-6" />
    </nav>
  );
};

export default MobileNav;
