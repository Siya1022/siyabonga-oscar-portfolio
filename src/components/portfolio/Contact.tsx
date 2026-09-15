import { useState, type FormEvent } from "react";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";
import { profile } from "./data";

type Errors = { name?: string; email?: string; message?: string };

/** Contact details plus a validated contact form. */
export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function validate(): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    else if (values.name.trim().length > 100) next.name = "Name must be under 100 characters.";

    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";

    if (!values.message.trim()) next.message = "Please enter a message.";
    else if (values.message.trim().length > 1000)
      next.message = "Message must be under 1000 characters.";

    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      return;
    }

    // Opens the visitor's email app with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  }

  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="I am open to opportunities where I can develop my skills, gain experience, and contribute to a professional team. Feel free to contact me."
      className="bg-secondary/40"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="space-y-4 pt-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:bg-secondary"
            >
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium text-foreground">Email</span>
                <span className="block text-sm text-muted-foreground">{profile.email}</span>
              </span>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:bg-secondary"
            >
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>
                <span className="block text-sm font-medium text-foreground">Phone</span>
                <span className="block text-sm text-muted-foreground">{profile.phone}</span>
              </span>
            </a>

            <ContactLink
              icon={<Linkedin className="h-5 w-5 text-primary" aria-hidden="true" />}
              title="LinkedIn"
              label={profile.linkedin.label}
              url={profile.linkedin.url}
            />
            <ContactLink
              icon={<Github className="h-5 w-5 text-primary" aria-hidden="true" />}
              title="GitHub"
              label={profile.github.label}
              url={profile.github.url}
            />

            <div className="rounded-xl border border-dashed border-border p-4">
              <p className="text-sm font-medium text-foreground">Curriculum Vitae</p>
              {profile.cvUrl ? (
                <Button asChild className="mt-3 w-full">
                  <a href={profile.cvUrl} download>
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" /> Download My CV
                  </a>
                </Button>
              ) : (
                <>
                  <Button className="mt-3 w-full" disabled>
                    <Download className="mr-2 h-4 w-4" aria-hidden="true" /> Download My CV
                  </Button>
                  <p className="mt-2 text-xs text-muted-foreground">
                    The CV file can be added later and this button will work automatically.
                  </p>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  maxLength={100}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                />
                {errors.name ? (
                  <p id="name-error" className="text-sm text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  maxLength={255}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
                {errors.email ? (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  maxLength={1000}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                />
                {errors.message ? (
                  <p id="message-error" className="text-sm text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>

              <p aria-live="polite" className="min-h-5 text-sm text-primary">
                {status === "success"
                  ? "Thank you. Your email app has opened with your message ready to send."
                  : ""}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

function ContactLink({
  icon,
  title,
  label,
  url,
}: {
  icon: React.ReactNode;
  title: string;
  label: string;
  url: string;
}) {
  const content = (
    <>
      {icon}
      <span>
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="block text-sm text-muted-foreground">{label}</span>
      </span>
    </>
  );

  if (!url) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-background p-4">
        {content}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-colors hover:bg-secondary"
    >
      {content}
    </a>
  );
}
