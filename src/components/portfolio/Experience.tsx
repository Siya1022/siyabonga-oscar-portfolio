import { Briefcase, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { experience } from "./data";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
        {experience.map((job, index) => (
          <li key={job.role} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[35px] grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground sm:-left-[51px] sm:h-6 sm:w-6"
            >
              <Briefcase className="h-3.5 w-3.5" />
            </span>
            <Card className="transition-all duration-300 hover:border-primary hover:shadow-md">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">[{String(index + 1).padStart(2, "0")}]</span>
                </div>
                <ul className="mt-6 grid gap-x-8 gap-y-3 border-t border-border pt-5 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                    >
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
