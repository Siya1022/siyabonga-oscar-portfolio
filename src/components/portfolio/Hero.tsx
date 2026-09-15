import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "./data";

/** Hero section. Uses initials and an abstract graphic instead of a photo. */
export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,var(--color-accent)_0%,transparent_70%)] opacity-70"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Available for internships and employment
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-base font-medium text-primary sm:text-lg">{profile.headline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${profile.email}`}>
              <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={`tel:${profile.phone}`}>
              <Phone className="h-4 w-4" aria-hidden="true" /> {profile.phone}
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="relative grid h-56 w-56 place-items-center rounded-[2rem] border border-border bg-card shadow-sm sm:h-72 sm:w-72"
          >
            <span className="absolute inset-4 rounded-[1.5rem] border border-dashed border-primary/30" />
            <span className="text-5xl font-bold tracking-widest text-primary sm:text-6xl">
              {profile.initials}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
