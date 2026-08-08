"use client"

import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="px-6 sm:px-12">
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between gap-6 pt-32 pb-20 transition-colors duration-300">
        {/* Top row — avatar + location */}
        <div
          className="flex items-start justify-end gap-3"
          style={{ animation: "charIn 0.5s ease 400ms both" }}
        >
          <div className="flex flex-col items-end gap-3">
            {/* Avatar */}
            <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-amber-600/30 dark:border-amber-500/20">
              <Image
                src="/me.jpg"
                alt="Akanimo Umoh"
                width={200}
                height={200}
                className="h-30 w-full object-cover object-top"
              />
            </div>

            {/* Location */}
            <div className="text-right">
              <span className="block font-mono text-[11px] tracking-widest text-stone-300 uppercase dark:text-white/25">
                Based in
              </span>
              <span className="mt-1 block font-mono text-[11px] tracking-widest text-stone-400 uppercase dark:text-white/45">
                Lokoja, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Bottom — label, name, tagline, CTAs */}
        <div className="flex flex-col">
          {/* Label row */}
          <div
            className="mb-7 flex items-center gap-4"
            style={{ animation: "charIn 0.5s ease 200ms both" }}
          >
            <span className="block h-px w-10 bg-amber-600/60 dark:bg-amber-500/60" />
            <span className="font-mono text-[11px] tracking-[0.15em] text-amber-600 uppercase dark:text-amber-500">
              Frontend Developer
            </span>
          </div>

          {/* Big name */}
          <h1
            className="mb-10 font-serif leading-[0.9] font-black tracking-tight"
            style={{ fontSize: "clamp(3.5rem,10vw,9rem)" }}
          >
            <span className="text-stone-800 dark:text-stone-100">
              {"AKANIMO".split("").map((ch, i) => (
                <span
                  key={i}
                  className="hero-char"
                  style={{ animationDelay: `${300 + i * 42}ms` }}
                >
                  {ch}
                </span>
              ))}
            </span>
            <br />
            <em
              className="text-amber-600 not-italic dark:text-amber-400"
              style={{ fontStyle: "italic" }}
            >
              {"UMOH".split("").map((ch, i) => (
                <span
                  key={i}
                  className="hero-char"
                  style={{ animationDelay: `${620 + i * 42}ms` }}
                >
                  {ch}
                </span>
              ))}
            </em>
          </h1>

          {/* Tagline + CTAs */}
          <div
            className="flex flex-wrap items-end justify-between gap-8"
            style={{ animation: "charIn 0.6s ease 900ms both" }}
          >
            <p className="max-w-100 font-sans text-sm leading-[1.75] text-stone-500 sm:text-base dark:text-stone-400">
              I build interfaces that feel inevitable —<br />
              fast, accessible, and obsessively refined.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="https://drive.google.com/file/d/1-GOJ0A89MhJVsS-RVIKJw84de41K79Mo/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 px-7 py-3 font-mono text-xs tracking-widest text-white uppercase transition-opacity hover:opacity-85 dark:bg-amber-500"
              >
                Resume
              </Link>
              <a
                href="#work"
                className="border-b border-stone-300 pb-px font-mono text-xs tracking-widest text-stone-400 uppercase transition-colors hover:border-amber-600/40 hover:text-amber-600 dark:border-white/20 dark:text-white/45 dark:hover:border-amber-400/40 dark:hover:text-amber-400"
              >
                View Work ↓
              </a>
            </div>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <div className="scroll-pulse h-12 w-px bg-linear-to-b from-amber-600/60 to-transparent dark:from-amber-500/60" />
        </div>
      </section>
    </div>
  )
}
