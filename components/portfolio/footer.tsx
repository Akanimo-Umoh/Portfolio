export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 px-6 py-7 transition-colors duration-300 sm:px-12 dark:border-white/5 dark:bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4">
        <span className="font-mono text-[11px] tracking-wider text-stone-300 dark:text-white/20">
          © {new Date().getFullYear()} Akanimo Umoh
        </span>
      </div>
    </footer>
  )
}
