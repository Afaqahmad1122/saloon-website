"use client";

import { CursorContext } from "@/components/CursorContext";
import { easeInOut, motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";

const Treatments = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, x: -60 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 2, duration: 0.8, ease: easeInOut },
      }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto flex items-center pt-16 pb-12">
        <div className="w-full h-full flex items-center justify-between">
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
            className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto"
          >
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">
              Indulge in our Luxurious Treatments
            </h2>
            <p className="lead max-w-[600px ] mx-auto xl:mx-0">
              Tailored skincare solution for a healthy complexion, offering
              customized care for radiant skin
            </p>
            {/* ietm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-start xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Classic facial</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Deep cleansing, exfoliation and hydration for a refreshed
                  complexion
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-start xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Chemical Peel</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Exfoliating treatment to improve skin texture and tone
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-start xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Eyebrow Waxing/Shaping</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Deep cleansing, exfoliation and hydration for a refreshed
                  complexion
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-start xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">HydraFacial</h3>
                </div>
                <p className="pl-6 text-[15px]">
                  Multi-step treatment for instant hydration and glow
                </p>
              </div>
            </div>
            {/* end item */}
            <button className="btn mx-auto xl:mx-0">Discover more</button>
          </motion.div>
          {/* image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className="hidden xl:flex w-[384px] h-[534px] relative"
          >
            <Image
              src="/assets/treatments/img.jpg"
              fill
              quality={100}
              alt=""
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Treatments;
