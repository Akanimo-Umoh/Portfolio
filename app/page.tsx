"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Work } from "@/components/portfolio/work"
import { About } from "@/components/portfolio/about"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true
  const saved = localStorage.getItem("theme")
  if (saved) return saved === "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export default function Portfolio() {
  const [dark, setDark] = useState(getInitialTheme)
  const [scrolled, setScrolled] = useState(false)
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 })

  // Only syncs the class to the DOM — no setState here
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  const toggleTheme = async () => {
    const next = !dark

    if (!document.startViewTransition) {
      setDark(next)
      localStorage.setItem("theme", next ? "dark" : "light")
      return
    }

    const toggle = document.querySelector("#theme-toggle") as HTMLElement
    const rect = toggle?.getBoundingClientRect()
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth
    const y = rect ? rect.top + rect.height / 2 : 0

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    await document.startViewTransition(() => {
      setDark(next)
      localStorage.setItem("theme", next ? "dark" : "light")
    }).ready

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed z-0 hidden h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(180,130,60,0.07)_0%,transparent_70%)] md:block dark:bg-[radial-gradient(circle,rgba(200,169,110,0.06)_0%,transparent_70%)]"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%,-50%)",
          transition: "left 0.1s ease, top 0.1s ease",
        }}
      />

      <Navbar scrolled={scrolled} dark={dark} onToggle={toggleTheme} />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}
