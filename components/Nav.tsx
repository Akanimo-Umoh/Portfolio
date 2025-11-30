"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import menu from "../images/menu_page_icon.svg";
import cancel from "../images/cancel.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function Nav() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const closeSidenav = () => setToggle(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide if scrolled down more than 66px (nav height)
      if (currentScrollY > scrollY && currentScrollY > 56) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  // Add this useEffect to control body scroll
  useEffect(() => {
    if (toggle) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [toggle]);

  const links = [
    {
      title: "About me",
      id: "about",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Skills",
      id: "skills",
    },
    {
      title: "Contact me",
      id: "reach_me",
    },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -56 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full bg-white z-50 border-b max-w-6xl"
    >
      {/* mobile nav */}
      <div className="flex items-center justify-between px-6 h-14">
        <div className="text-[24px] lg:text-3xl font-medium">AU</div>

        <div className="md:hidden">
          <Image
            src={menu}
            alt="Menu"
            width={24}
            height={24}
            className={`cursor-pointer ${toggle ? "hidden" : ""}`}
            onClick={handleToggle}
          />
        </div>

        <div className="hidden md:flex items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link
              href={`#${link.id}`}
              key={index}
              className="py-1 hover:text-accent lg:text-2xl"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* mobile nav */}
      <AnimatePresence>
        {toggle && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeSidenav}
              className="bg-black/50 fixed top-0 right-0 w-full flex items-start justify-end h-full md:hidden"
            />

            {/* mobile menu */}
            <motion.div
              key="mobile-menu"
              initial={{ x: 250, opacity: 0 }} // start off-screen right
              animate={{ x: 0, opacity: 1 }} // slide in
              exit={{ x: 250, opacity: 0 }} // slide out
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#fc7c2ccc] h-100 rounded-bl-[50%] w-[65%] md:hidden fixed top-0 right-0 z-40 px-6"
            >
              <div className="place-items-end h-14 place-content-center">
                <Image
                  src={cancel}
                  alt="Menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                  onClick={handleToggle}
                />
              </div>

              <div className="flex flex-col space-y-4 text-white font-semibold mt-1">
                {links.map((link, index) => (
                  <Link
                    href={`#${link.id}`}
                    onClick={handleToggle}
                    key={index}
                    className="py-1"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
