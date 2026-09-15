import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { certifications, education } from "./data";

export function Education() {
  return (
    <Section id="education" title="Education" className="bg-secondary/40">
      <div className="grid gap-10 lg:grid-cols-2">
        <ol className="relative space-y-6 border-l border-border pl-6">
          {education.map((item) => (
            <li key={item.qualification} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"
              >
                <GraduationCap className="h-3.5 w-3.5" />
              </span>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-base font-semibold text-foreground">{item.qualification}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
                  {item.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Certifications &amp; Training</h3>
          <div className="mt-4 space-y-4">
            {certifications.map((cert) => (
              <Card key={cert.title}>
                <CardContent className="flex gap-4 pt-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
