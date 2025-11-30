"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import avatar from "../images/avatar.jpg";
import circle from "../images/circle.svg";
import twitter from "../lib/twitter.svg";
// import linkedin from "../images/linkedin_dark.svg";
import email from "../lib/gmail.svg";
import github from "../lib/github.svg";
import copyright from "../images/copyright.svg";
import { motion } from "motion/react";

export default function Footer() {
  const contacts = [
    {
      icon: email,
      link: "mailto:akanumoh4@gmail.com",
      alt: "Gmail",
    },
    {
      icon: twitter,
      link: "https://twitter.com/umoh____",
      alt: "Twitter",
    },
    {
      icon: github,
      link: "https://github.com/Akanimo-Umoh",
      alt: "Github",
    },
  ];

  const footerLinks = [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Skills",
      link: "#skills",
    },
  ];

  return (
    <footer>
      <div className="max-w-4xl mx-auto text-center space-y-4 pt-4 pb-6">
        <div className="bg-[#FFF7F2] rounded-lg flex items-center justify-center mx-auto h-20 max-w-[270px] gap-2">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt="Footer Pic"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-left h-full flex flex-col items-start justify-center gap-1">
            <div className="font-semibold flex items-center justify-center gap-2 text-sm">
              <Image src={circle} alt="Circle" width={12} height={12} />
              <p>Available for Project</p>
            </div>

            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
              whileHover={{ rotate: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 1,
                delay: 0,
              }}
            >
              <Link
                href="mailto:akanumoh4@gmail.com"
                className="bg-accent text-sm text-white rounded font-semibold hover:shadow-lg hover:text-accent hover:bg-white h-7 w-20 flex items-center justify-center"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>
        </div>

        <hr />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Contact Me</h3>
          <div className="flex justify-center gap-6">
            {contacts.map((contact, index) => (
              <Link key={index} href={contact.link} target="_blank" className="">
                <Image
                  src={contact.icon}
                  alt={contact.alt}
                  width={35}
                  height={35}
                  className="bg-primary rounded-full p-2 hover:shadow-lg transition"
                />
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 text-sm font-semibold text-black">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="hover:text-accent transition"
              >
                {link.title}
              </Link>
            ))}
            {/* <Link href="#skills" className="hover:text-accent transition">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-accent transition">
              Projects
            </Link>
            <Link href="#about" className="hover:text-accent transition">
              About me
            </Link> */}
          </div>

          <div>
            <div className="text-sm flex items-center justify-center gap-1">
              <p>Copyright</p>
              <Image
                src={copyright}
                alt="Copyright"
                width={16}
                height={16}
                className="inline"
              />
              <p> 2022</p>
            </div>

            <div className="text-sm">
              Designed by{" "}
              <Link
                href="https://twitter.com/mbahScript?s=09"
                target="_blank"
                className="text-accent"
              >
                Mbah Samson Ifeanyi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
