"use client";

import React from "react";
import Image from "next/image";
import source from "../images/link_external_icon.svg";
import ecommerce from "../images/ecommerce.jpg";
import news from "../images/news-homepage.jpg";
import reactPortfolio from "../images/Portfolio-Project.jpg";
import reactProject from "../images/react-meta-final-project-prototype.vercel.app.png";
import explore from "../images/explore-space.jpg";
import youtube from "../images/youtube-clone.png";
import portalx from "../images/portalx.png";
import weather from "../images/weather-preview.jpg";
import Link from "next/link";
import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      img: weather,
      title: "Weather App",
      tech: "React, Tailwind, TypeScript",
      source: "https://github.com/Akanimo-Umoh/weather-app",
      demo: "https://weather-app-seven-eta-32.vercel.app/",
    },
    {
      img: portalx,
      title: "PORTAL X",
      tech: "React Js, Tailwind",
      source: "/",
      demo: "https://portalx.space",
      disabled: "disabled",
    },
    {
      img: explore,
      title: "Explore Space",
      tech: "React Js, CSS",
      source: "https://github.com/Akanimo-Umoh/Explore-Space.git",
      demo: "https://explore-space-delta.vercel.app/",
    },
    {
      img: reactProject,
      title: "Portfolio Prototype",
      tech: "HTML, CSS & Js",
      source:
        "https://github.com/Akanimo-Umoh/React-Meta-Final-Project-Prototype.git",
      demo: "https://react-meta-final-project-prototype.vercel.app/",
    },
    {
      img: reactPortfolio,
      title: "Portfolio Project",
      tech: "React Js, CSS, Non-responsive",
      source: "https://github.com/Akanimo-Umoh/React-Meta-Final-Project.git",
      demo: "https://react-meta-final-project.vercel.app/",
    },
    {
      img: news,
      title: "News Homepage",
      tech: "HTML5, CSS & Js",
      source: "https://github.com/Akanimo-Umoh/News-Homepage.git",
      demo: "https://news-homepage-ashy.vercel.app/",
    },
    {
      img: ecommerce,
      title: "Ecommerce Product Page",
      tech: "HTML5, CSS & Js",
      source: "https://github.com/Akanimo-Umoh/Ecommerce-Page.git",
      demo: "https://ecommerce-page-hazel.vercel.app/",
    },
    {
      img: youtube,
      title: "Coming Soon",
      tech: "Development stage",
      source: "/",
      demo: "/",
      disabled: "disabled",
    },
  ];

  return (
    <div className="">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-accent">All Creative Works</p>
        <p>Here are a few of my projects and design explorations.</p>
      </div>

      <div className="grid grid-cols-[repeat(200px,1fr)] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-7 max-w-6xl mx-auto place-items-center place-content-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-primary rounded-lg overflow-hidden p-4 w-full max-w-[400px] transition-all duration-300 cursor-pointer project-box"
          >
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <Image
                src={project.img}
                alt={project.title}
                width={300}
                height={300}
                className="w-full h-full rounded-lg object-cover object-center"
              />
            </div>

            <div className="text-center space-y-4 mt-2.5">
              <div>
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.tech}</p>
              </div>

              <div className="flex justify-between">
                <Link
                  href={project.source}
                  target="_blank"
                  onClick={(e) =>
                    project.source === "disabled" && e.preventDefault()
                  }
                  className={`bg-accent text-white rounded text-sm hover:shadow-lg transition flex items-center justify-center gap-1 w-[100px] h-9 ${
                    project.disabled === "disabled"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <Image src={source} alt="Source" width={12} height={12} />
                  Source
                </Link>

                <Link
                  href={project.demo}
                  target="_blank"
                  onClick={(e) =>
                    project.title === "Coming Soon" && e.preventDefault()
                  }
                  className={`bg-accent text-white rounded text-sm hover:shadow-lg transition w-[100px] h-9 flex items-center justify-center ${
                    project.title === "Coming Soon"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
