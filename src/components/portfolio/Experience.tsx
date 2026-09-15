import { Briefcase, Dot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { experience } from "./data";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <ol className="relative space-y-6 border-l border-border pl-6">
        {experience.map((job) => (
          <li key={job.role} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"
            >
              <Briefcase className="h-3.5 w-3.5" />
            </span>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-base font-semibold text-foreground">{job.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <Dot className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
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
