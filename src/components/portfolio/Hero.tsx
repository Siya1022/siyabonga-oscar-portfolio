import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";

/** Hero section. Uses initials and an abstract graphic instead of a photo. */
export function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="mx-auto grid min-h-[38rem] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:min-h-[42rem] sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,.45fr)] lg:py-24">
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-medium uppercase text-primary">
            Available for internships and employment
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-primary sm:text-xl">{profile.headline}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href="#projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
            {profile.cvUrl ? (
              <Button asChild size="lg" variant="secondary">
                <a href={profile.cvUrl} download>
                  <Download className="mr-2 h-4 w-4" /> Download My CV
                </a>
              </Button>
            ) : null}
          </div>

          <div className="mt-10 grid gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:grid-cols-2">
            <a className="inline-flex min-w-0 items-center gap-2 transition-colors hover:text-primary" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </a>
            <a className="inline-flex items-center gap-2 transition-colors hover:text-primary" href={`tel:${profile.phone}`}>
              <Phone className="h-4 w-4" aria-hidden="true" /> {profile.phone}
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:flex lg:justify-end">
          <div
            aria-hidden="true"
            className="group relative grid aspect-square w-full max-w-64 place-items-center border border-border bg-card transition-colors duration-500 hover:border-primary"
          >
            <span className="absolute inset-4 border border-dashed border-primary/30 transition-all duration-500 group-hover:inset-3" />
            <span className="text-5xl font-extrabold text-primary sm:text-6xl">
              {profile.initials}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
