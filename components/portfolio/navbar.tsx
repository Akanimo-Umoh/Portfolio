"use client"

import { ThemeToggle } from "./theme-toggle"

export function Navbar({
  scrolled,
  dark,
  onToggle,
}: {
  scrolled: boolean
  dark: boolean
  onToggle: () => void
}) {
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 px-6 py-5 transition-all duration-400 sm:px-12 ${
        scrolled
          ? "border-b border-stone-200 bg-stone-50/80 backdrop-blur-md dark:border-white/5 dark:bg-stone-950/85"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-serif text-lg font-bold tracking-wide text-amber-600 dark:text-amber-500">
          AU
        </span>
        <div className="flex items-center gap-8">
          {["About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] tracking-widest text-stone-400 uppercase transition-colors duration-200 hover:text-amber-600 dark:text-white/35 dark:hover:text-amber-400"
            >
              {item}
            </a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggle} />
        </div>
      </div>
    </nav>
  )
}
