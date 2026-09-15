import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { aboutParagraphs, whatIBring } from "./data";

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:gap-16">
        <div className="space-y-5">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <Card className="h-fit border-l-4 border-l-primary">
          <CardContent className="pt-6">
            <h3 className="font-mono text-xs font-medium uppercase text-foreground">What I Bring</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {whatIBring.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
