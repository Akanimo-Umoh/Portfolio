"use client"

import { FadeIn } from "./fade-in"
import { ProjectCard } from "./project-card"
import { Section } from "./section"
import { projects } from "./data"

export function Work() {
  return (
    <Section id="work">
      <FadeIn>
        <div className="mb-3 flex items-center gap-6">
          <span className="shrink-0 font-mono text-[11px] tracking-[0.15em] text-amber-600 uppercase dark:text-amber-500">
            Selected Work
          </span>
          <span className="h-px flex-1 bg-amber-600/15 dark:bg-amber-500/15" />
        </div>
        <h2
          className="mb-1 font-serif font-bold tracking-tight text-stone-800 dark:text-stone-100"
          style={{ fontSize: "clamp(2rem,4vw,3.25rem)" }}
        >
          Things I&apos;ve built
        </h2>
        <p className="mb-12 text-sm text-stone-400 dark:text-stone-500">
          A mix of client work, assessments, and personal projects.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
