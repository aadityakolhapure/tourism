"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { DockDemo } from "@/components/navbar";

export function ImagesSliderDemo() {
  const images = [
    "/images/1.jpg", // Image of Satara's Koynanagar or Kas Plateau
    "/images/2.jpg", // Image of Thoseghar Waterfalls
    "/images/3.jpg", // Image of other famous spots in Satara
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center relative"
      >
        {/* <motion.div className="text-lg text-center text-neutral-200 mb-8">
          <DockDemo/>
        </motion.div> */}
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 mt-10">
          Explore the Beauty of Satara <br /> Your Next Adventure Awaits!
        </motion.p>
        <motion.p className="text-lg text-center text-neutral-200 mt-4">
          Discover the stunning landscapes, serene waterfalls, and rich culture
          of Satara. Plan your trip now and experience the magic of this
          picturesque city!
        </motion.p>
        
        <Link
          href="/tourist-places"
          className="px-4 py-2 backdrop-blur-sm border bg-orange-300/10 border-orange-500/20 text-white mx-auto text-center rounded-full relative mt-6"
        >
          <span>Start Your Journey →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
        </Link>
        
      </motion.div>
    </ImagesSlider>
  );
}
