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
      <div className="grid overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = icons[index % icons.length] ?? FolderKanban;
          return (
            <Card key={project.title} className="group -m-px flex h-full flex-col overflow-hidden rounded-none transition-colors duration-300 hover:z-10 hover:border-primary hover:bg-secondary/40">
              <CardContent className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-sm bg-secondary text-primary transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">[{String(index + 1).padStart(2, "0")}]</span>
                </div>
                <p className="mt-8 font-mono text-[11px] font-medium uppercase text-primary">
                  {project.category}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-foreground">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="border border-border bg-background px-2.5 py-1 text-xs text-secondary-foreground"
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
