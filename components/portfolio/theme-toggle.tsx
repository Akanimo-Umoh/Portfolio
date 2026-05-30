"use client"

import { Moon, SunMedium } from "lucide-react"

export function ThemeToggle({
  dark,
  onToggle,
}: {
  dark: boolean
  onToggle: () => void
}) {
  return (
    <button
      id="theme-toggle"
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-6 w-12 cursor-pointer items-center rounded-full border border-amber-600/40 bg-stone-200 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none dark:border-amber-500/40 dark:bg-stone-800"
    >
      <span className="absolute inset-0 rounded-full bg-stone-800/10 transition-opacity duration-300 dark:bg-amber-500/10" />
      <span
        className={`absolute flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] shadow-sm transition-all duration-300 dark:bg-stone-700 ${
          dark ? "left-[calc(100%-1.375rem)]" : "left-0.5"
        }`}
      >
        {dark ? (
          <Moon size={12} className="text-amber-500" />
        ) : (
          <SunMedium size={12} className="text-amber-500" />
        )}
      </span>
    </button>
  )
}
