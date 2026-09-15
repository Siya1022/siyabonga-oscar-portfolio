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
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            {icon}
          </span>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <ul className="mt-6 grid grid-cols-1 border-t border-border sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="border-b border-border px-3 py-3 text-sm font-medium text-muted-foreground sm:odd:border-r"
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
       className="bg-secondary/50"
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
