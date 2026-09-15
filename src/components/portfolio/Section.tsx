import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared wrapper so every section has consistent spacing and headings. */
export function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)} aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2
            id={`${id}-title`}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
          <span className="mt-3 block h-1 w-14 rounded-full bg-primary" />
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
