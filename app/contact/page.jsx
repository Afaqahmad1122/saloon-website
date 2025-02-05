"use client";

import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

import { motion } from "framer-motion";
import Form from "@/components/Form";
import Image from "next/image";

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-12">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1 flex flex-col justify-center"
          >
            <h3 className="h3 mb-8 text-center xl:text-left">Contact Info</h3>
            <div className="flex flex-col items-center xl:items-start gap-12">
              {/* item */}
              <div className="flex items-start gap-4">
                <div className="relative w-[26px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" alt="" fill />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h-4 mb-2">Address</h4>
                  <p className="leading-relaxed">123/45 Peshawar Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-[26px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" alt="" fill />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h-4 mb-2">Phone number:</h4>
                  <div className="pt-1 flex-1">
                    <p>03098764667</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-[26px] h-[36px]">
                  <Image src="/assets/contact/email.svg" alt="" fill />
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h-4 mb-2">Email address</h4>
                  <div className="flex flex-col gap-1">
                    <p>afaqahmadnaeem@gmail.com</p>
                    <p>afaqwebdeveloper12@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* form */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex-1"
          >
            <div className="bg-[#f0cfbc] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
              <h3 className="h3 text-center">Get in touch</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
