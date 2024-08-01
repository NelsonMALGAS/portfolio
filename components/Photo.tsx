"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
        >
          <Image
            src="/logo.jpeg"
            priority
            quality={100}
            alt="logo"
            className="object-cover rounded-full"
            layout="fill" // Ensures the image covers the container
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="absolute w-full h-full pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{
                strokeDasharray:["15 120 25 25", "16 25 92 72" , "4 250 22 22"],
                rotate:[120,360]

            }}
            transition={{duration:20 , repeat:Infinity , repeatType:"reverse"}}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
