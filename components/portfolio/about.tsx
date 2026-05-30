"use client"

import { FadeIn } from "./fade-in"
import { Section } from "./section"
import { skills } from "./data"

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <div className="mb-12 flex items-center gap-6">
          <span className="shrink-0 font-mono text-[11px] tracking-[0.15em] text-amber-600 uppercase dark:text-amber-500">
            About
          </span>
          <span className="h-px flex-1 bg-amber-600/15 dark:bg-amber-500/15" />
        </div>
      </FadeIn>

      <div className="flex flex-wrap items-start gap-16 lg:gap-20">
        {/* bio */}
        <FadeIn delay={100} className="max-w-150 min-w-70 flex-1">
          <h2
            className="mb-8 font-serif leading-[1.15] font-bold tracking-tight text-stone-800 dark:text-stone-100"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.75rem)" }}
          >
            I turn complex problems
            <br />
            <em className="text-amber-600 dark:text-amber-400">
              into clean interfaces.
            </em>
          </h2>
          <div className="flex flex-col gap-4">
            {[
              "I'm a frontend developer with 3+ years building and leading production-grade web applications. My stack centres on React, Next.js, and TypeScript — but I've shipped in Vue 3 and Svelte too when the project called for it.",
              "I care about the details most people don't notice until they're missing: smooth transitions, accessible markup, components that hold up under real usage. I work well alongside backend developers and move quickly without cutting corners.",
              "Currently open to frontend roles where craft and speed both matter.",
            ].map((text, i) => (
              <p
                key={i}
                className="font-sans text-sm leading-[1.85] text-stone-500 dark:text-stone-400"
              >
                {text}
              </p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200} className="min-w-50 shrink-0">
          <p className="mb-5 font-mono text-[11px] tracking-widest text-stone-300 uppercase dark:text-white/30">
            Technologies
          </p>
          <div className="flex flex-col gap-2.5">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-amber-600/55 dark:bg-amber-500/55" />
                <span className="font-sans text-sm text-stone-500 dark:text-stone-400">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
