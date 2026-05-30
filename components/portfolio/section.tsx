import { cn } from "@/lib/utils"

export function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-stone-200 bg-stone-50 px-6 py-24 transition-colors duration-300 sm:px-12 dark:border-white/5 dark:bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
