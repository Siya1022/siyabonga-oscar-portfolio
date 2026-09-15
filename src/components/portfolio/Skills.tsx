import { Laptop, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { professionalSkills, technicalSkills } from "./data";

function SkillCard({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
            {icon}
          </span>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A combination of computer and office skills with strong people-facing professional skills."
      className="bg-secondary/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard
          title="Technical Skills"
          icon={<Laptop className="h-5 w-5" aria-hidden="true" />}
          skills={technicalSkills}
        />
        <SkillCard
          title="Professional Skills"
          icon={<Users className="h-5 w-5" aria-hidden="true" />}
          skills={professionalSkills}
        />
      </div>
    </Section>
  );
}
