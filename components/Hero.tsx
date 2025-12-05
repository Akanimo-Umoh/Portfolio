"use client";

import React, { useEffect } from "react";
import ak from "../images/ak.jpeg";
import Image from "next/image";
import Link from "next/link";
import download from "../images/download_icon.svg";
import { animate } from "motion";
import { useMotionValue, useTransform, motion } from "motion/react";

export default function Hero() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 7, { duration: 2 });
    return animation.stop;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 md:flex-row-reverse md:w-full md:items-center md:justify-between md:px-6"
    >
      <div className="relative mx-auto md:mx-0 md:flex md:items-center md:justify-center">
        <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]">
          <Image
            src={ak}
            alt="Umoh Akanimo"
            width={400}
            height={400}
            className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          />
        </div>

        <div className="absolute bottom-0 right-0 bg-white/70 px-4 py-3 rounded-[10px] glow md:h-[130px] md:w-[150px] md:flex md:flex-col md:items-start md:justify-center lg:w-[180px] lg:h-[170px]">
          <div>
            <p className="font-bold text-sm md:text-lg">3yrs.+</p>
            <p className="text-xs md:text-sm">Experience &#127775;</p>
          </div>
          <div>
            <p className="font-bold text-sm md:text-lg">
              <motion.span>{rounded}</motion.span>+
            </p>
            <p className="text-xs md:text-sm">Projects &#128522;</p>
          </div>
        </div>
      </div>

      {/* Desktop Bio */}
      <div className="space-y-4 flex flex-col items-center justify-center text-center md:items-start md:text-left md:flex-1 md:w-full">
        <div className="text-1xl font-medium">
          <p className="md:hidden">Hello, I am</p>
          <p className="text-accent font-bold text-2xl lg:text-3xl">
            AKANIMO UMOH
          </p>
          <p className="hidden md:flex text-3xl font-bold lg:text-4xl">
            FRONTEND DEVELOPER
          </p>
        </div>

        <p className="text-sm md:text-lg leading-relaxed px-6 max-w-[450px] md:px-0 md:max-w-full">
          I'm a dedicated frontend developer and I am passionate about my work.
          I'm a fast learner and I strive to improve my skills regularly to stay
          updated with the latest technologies and trends in web development.
        </p>

        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
          whileHover={{ rotate: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1.6,
            delay: 0,
          }}
        >
          <Link
            href="/UMOH_AKANIMO_CV.pdf"
            download
            className="hidden md:flex items-center justify-center bg-accent text-white rounded font-bold hover:bg-white hover:text-accent transition h-10 w-20 text-sm hover:border hover:border-accent"
          >
            Resume
          </Link>
        </motion.div>

        {/* Buttons */}
        <div className="flex sm:flex-row gap-4 items-center justify-center mt-3 md:hidden">
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
            whileHover={{ rotate: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1.6,
              delay: 0,
            }}
          >
            <Link
              href="mailto:akanumoh4@gmail.com"
              className="bg-accent text-white rounded font-bold hover:shadow-lg transition h-10 w-[120px] flex items-center justify-center hover:bg-white hover:text-accent"
            >
              Hire Me
            </Link>
          </motion.div>

          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
            whileHover={{ rotate: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1.6,
              delay: 0.6,
            }}
          >
            <Link
              href="/UMOH_AKANIMO_CV.pdf"
              download
              className="bg-white text-accent rounded border-2 border-accent font-bold animate-wiggle hover:bg-primary hover:text-white transition flex items-center justify-center gap-2 h-10 w-[120px]"
            >
              Resume
              <Image src={download} alt="Download" width={15} height={15} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
