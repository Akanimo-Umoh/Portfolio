"use client"

import { motion } from "motion/react"
import { projects } from "./data"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [active, setActive] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group relative flex flex-col"
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={active}
        aria-label={`${project.title} — press Enter to reveal details`}
        className="group relative aspect-[16/10] w-full cursor-pointer rounded-2xl focus:outline-none"
        onClick={() => setActive((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setActive((prev) => !prev)
          }
          if (e.key === "Escape") setActive(false)
        }}
        onFocus={() => setActive(true)}
        onBlur={(e) => {
          // Only close if focus leaves the card entirely
          // e.relatedTarget is the element receiving focus next
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setActive(false)
          }
        }}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Focus ring — visible only for keyboard users */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-amber-500/0 ring-offset-2 ring-offset-transparent transition-all duration-200 focus-within:ring-amber-500/80" />

        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-stone-950/80 transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />

        {/* Content overlay */}
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-between p-6 transition-opacity duration-300 ${
            active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {/* Stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 font-mono text-[10px] tracking-wider text-amber-400 uppercase"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Description + links */}
          <div>
            <p className="mb-4 line-clamp-3 font-sans text-sm leading-relaxed text-stone-300">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="border-b border-amber-400/50 pb-px font-mono text-[11px] tracking-wider text-amber-400 uppercase transition-opacity hover:opacity-70"
                >
                  Live ↗
                </Link>
              )}
              {project.href && project.href !== "#" && (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="border-b border-white/20 pb-px font-mono text-[11px] tracking-wider text-white/50 uppercase transition-opacity hover:opacity-70"
                >
                  Code ↗
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="mt-4 flex items-start justify-between gap-4 px-1">
        <div>
          <h3 className="font-serif text-lg font-bold tracking-tight text-stone-800 transition-colors duration-200 group-hover:text-amber-600 dark:text-stone-100 dark:group-hover:text-amber-400">
            {project.title}
          </h3>
          <p className="mt-0.5 font-mono text-[11px] tracking-wider text-stone-400 uppercase dark:text-stone-500">
            {project.role}
          </p>
        </div>
        <span className="mt-1 shrink-0 font-mono text-[11px] tracking-wider text-stone-300 dark:text-stone-600">
          {project.year}
        </span>
      </div>
    </motion.article>
  )
}
