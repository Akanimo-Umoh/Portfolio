"use client"

import { motion } from "motion/react"
import { projects } from "./data"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [active, setActive] = useState(false)
  const [canHover, setCanHover] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)")

    const update = () => {
      setCanHover(mediaQuery.matches)

      // Clear mobile state when switching to a hover-capable device
      if (mediaQuery.matches) {
        setActive(false)
      }
    }

    update()

    mediaQuery.addEventListener("change", update)

    return () => {
      mediaQuery.removeEventListener("change", update)
    }
  }, [])

  useEffect(() => {
    if (canHover) return

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node

      if (cardRef.current && !cardRef.current.contains(target)) {
        setActive(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [canHover])

  const showOverlay = canHover ? undefined : active

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      className="group relative flex flex-col"
    >
      <div
        ref={cardRef}
        role={!canHover ? "button" : undefined}
        tabIndex={!canHover ? 0 : undefined}
        aria-expanded={!canHover ? active : undefined}
        className="relative aspect-16/10 w-full overflow-hidden rounded-2xl"
        onClick={() => {
          if (!canHover) {
            setActive(true)
          }
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 bg-stone-950/80 transition-opacity duration-300 ${
            canHover
              ? "opacity-0 group-hover:opacity-100"
              : showOverlay
                ? "opacity-100"
                : "opacity-0"
          }`}
        />

        {/* Content Overlay */}
        <div
          className={`absolute inset-0 z-10 flex flex-col justify-between p-6 transition-opacity duration-300 ${
            canHover
              ? "opacity-0 group-hover:opacity-100"
              : showOverlay
                ? "opacity-100"
                : "opacity-0"
          }`}
        >
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
