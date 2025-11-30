"use client";

import React from "react";
import html from "../lib/html.svg";
import css from "../lib/css.svg";
import scss from "../lib/scss.svg";
import js from "../lib/js.svg";
import react from "../lib/react.svg";
import responsive from "../lib/responsive.svg";
import python from "../lib/python.svg";
import framer from "../lib/framer.svg";
import next from "../lib/next.svg";
import mongodb from "../lib/mongodb.svg";
import git from "../lib/git.svg";
import tailwind from "../lib/tailwind.svg";
import typescript from "../lib/typescript.svg";
import { motion } from "motion/react";

import Image from "next/image";

export default function Skills() {
  const skills = [
    { img: html, name: "HTML5" },
    { img: css, name: "CSS3" },
    { img: scss, name: "Sass / SCSS" },
    { img: tailwind, name: "Tailwind CSS" },
    { img: js, name: "JavaScript" },
    { img: react, name: "React.js" },
    { img: next, name: "Next.js" },
    { img: python, name: "Python" },
    { img: responsive, name: "Responsive Design" },
    { img: framer, name: "Framer Motion" },
    { img: mongodb, name: "MongoDB" },
    { img: git, name: "Git & Github" },
    { img: typescript, name: "TypeScript" },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-accent">SKILLS</h3>
        <p>Frontend Web Dev Expertise</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-primary p-4 rounded-lg shadow-md transition-all flex items-center gap-4 cursor-pointer hover:shadow-xl"
          >
            <div className="shrink-0">
              <Image src={skill.img} alt={skill.name} width={45} height={45} />
            </div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
