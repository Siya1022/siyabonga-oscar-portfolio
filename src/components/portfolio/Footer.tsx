import { profile } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16">
        <div>
          <p className="text-xl font-bold text-foreground">{profile.name}</p>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">{profile.headline}</p>
        </div>
        <div>
          <p className="font-mono text-xs font-medium uppercase text-foreground">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`tel:${profile.phone}`} className="hover:text-foreground">
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-foreground">
                {profile.email}
              </a>
            </li>
            <li>LinkedIn: {profile.linkedin.label}</li>
            <li>GitHub: {profile.github.label}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-6xl px-5 py-6 text-center font-mono text-xs text-muted-foreground sm:px-8">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
