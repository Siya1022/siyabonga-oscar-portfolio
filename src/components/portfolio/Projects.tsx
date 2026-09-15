import { FileSpreadsheet, FolderKanban, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "./Section";
import { projects } from "./data";

const icons = [FolderKanban, Headset, FileSpreadsheet];

export function Projects() {
  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Practical learning projects that demonstrate my administrative, customer service, and spreadsheet skills."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Card key={project.title} className="flex h-full flex-col transition-shadow hover:shadow-md">
              <CardContent className="flex flex-1 flex-col pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primary">
                  {project.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  {project.url ? (
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.url} target="_blank" rel="noreferrer">
                        View Project
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      View Project — link coming soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
