"use client"

import { motion } from "motion/react"
import { projects } from "./data"
import Image from "next/image"

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
      className="group relative flex flex-col"
    >
      <div className="group relative aspect-16/10 w-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-stone-950/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-amber-400/50 pb-px font-mono text-[11px] tracking-wider text-amber-400 uppercase transition-opacity hover:opacity-70"
                >
                  Live ↗
                </a>
              )}
              {project.href && project.href !== "#" && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-white/20 pb-px font-mono text-[11px] tracking-wider text-white/50 uppercase transition-opacity hover:opacity-70"
                >
                  Code ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image / Placeholder */}

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
