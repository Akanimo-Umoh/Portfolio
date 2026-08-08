"use client"

import { FadeIn } from "./fade-in"
import { Section } from "./section"
import { ContactForm } from "./contact-form"
import Link from "next/link"

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <FadeIn>
        <div className="mb-12 flex items-center gap-6">
          <span className="shrink-0 font-mono text-[11px] tracking-[0.15em] text-amber-600 uppercase dark:text-amber-500">
            Contact
          </span>
          <span className="h-px flex-1 bg-amber-600/15 dark:bg-amber-500/15" />
        </div>

        <div className="flex flex-wrap items-start gap-16 lg:gap-20">
          {/* Left */}
          <div className="flex min-w-[260px] flex-1 flex-col gap-8">
            <div>
              <h2
                className="mb-4 font-serif leading-none font-black tracking-tight text-stone-800 dark:text-stone-100"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
              >
                Let&apos;s build something
                <br />
                <em className="text-amber-600 dark:text-amber-400">
                  worth remembering.
                </em>
              </h2>
              <p className="font-sans text-sm leading-[1.8] text-stone-400 dark:text-stone-500">
                I&apos;m actively looking for my next frontend role. If
                you&apos;re hiring or just want to connect, drop me a message.
              </p>
            </div>

            {/* Quick info */}
            <div className="flex flex-col gap-0">
              {[
                { label: "Email", value: "ak.dev003@gmail.com" },
                { label: "Location", value: "Lokoja, Nigeria" },
                { label: "Availability", value: "Immediate" },
                { label: "Response time", value: "Within 24hrs" },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-3 ${
                    i !== arr.length - 1
                      ? "border-b border-stone-200 dark:border-white/[0.05]"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-wider text-stone-400 uppercase dark:text-stone-500">
                    {item.label}
                  </span>
                  <span className="font-sans text-sm text-stone-700 dark:text-stone-300">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com/Akanimo-Umoh" },
                { label: "Twitter", href: "https://twitter.com/umoh____" },
                // {
                //   label: "LinkedIn",
                //   href: "https://linkedin.com/in/YOUR_HANDLE",
                // },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone-200 px-4 py-2.5 font-mono text-[11px] tracking-widest text-stone-400 uppercase transition-colors hover:border-amber-600/25 hover:text-amber-600 dark:border-white/8 dark:text-white/40 dark:hover:border-amber-500/25 dark:hover:text-amber-400"
                >
                  {link.label} ↗
                </Link>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div className="w-full min-w-[280px] flex-1">
            <ContactForm />
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
