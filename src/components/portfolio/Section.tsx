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
    <section id={id} className={cn("border-t border-border py-16 sm:py-24", className)} aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 grid gap-4 border-b border-border pb-7 sm:mb-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:items-end">
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:justify-self-end sm:text-base">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
