import { profile } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-lg font-semibold text-foreground">{profile.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.headline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Contact</p>
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
        <p className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
