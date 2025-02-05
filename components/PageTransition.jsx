"use client";

import { AnimatePresence, animate, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <div>
      <motion.div
        key={pathname}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 1, ease: "easeIn" },
        }}
        className="w-screen h-screen fixed z-30 xl:z-40 bg-white top-0 pointer-events-none"
      />
      {children}
    </div>
  );
};

export default PageTransition;
