"use client";

import { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="pb-6 xl:px-[50px] z-40 w-full bg-accent-100 xl:bg-transparent">
      {/* topbar */}

      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          {/* phone and email */}
          <div className="flex items-center justify-between h-full">
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:m-auto xl:justify-normal"
            >
              {/* phone */}
              <div className="flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>03098764667</span>
              </div>
              {/* email */}
              <div className="flex items-center gap-2 text-white">
                <IoMdMail />
                <span>afaqahmadnaeem@gmail.com</span>
              </div>
            </motion.div>
            {/* socials */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block"
            >
              <Socials containerrStyles="flex gap-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* logo */}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" width={120} height={44} />
          </Link>
        </motion.div>

        {/* mob nav */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-primary text-3xl" />
        </div>

        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[200px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>

        {/* desktop nav */}

        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
