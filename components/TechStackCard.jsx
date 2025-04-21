import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const tech = {
  development: [
    { src: "logos/vscode.svg", alt: "VS Code" },
    { src: "logos/react.svg", alt: "React" },
    { src: "logos/hubspot.svg", alt: "HubSpot" },
    { src: "logos/airtable.svg", alt: "Airtable" },
  ],
  storage: [
    { src: "logos/postgresql.svg", alt: "PostgreSQL" },
    { src: "logos/mongodb.svg", alt: "MongoDB" },
  ],
  deployment: [
    { src: "logos/vercel.svg", alt: "Vercel" },
    { src: "logos/netlify.svg", alt: "Netlify" },
  ],
};

const LogoBar = ({ items }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item, i) => (
      <Link
        key={i}
        href="#"
        className="bg-muted p-2 rounded-md flex items-center justify-center shadow-sm w-12 h-12 hover:scale-105 transition-transform"
      >
        <Image src={item.src} alt={item.alt} width={28} height={28} />
      </Link>
    ))}
  </div>
);

export default function TechStack() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">My Tech Stack</h2>
          <p className="text-muted-foreground text-base mt-2">
            Technologies I use to build, store, and deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Development
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                From code to no-code tools I craft with.
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <LogoBar items={tech.development} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">Storage</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Reliable, scalable data storage.
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <LogoBar items={tech.storage} />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-border bg-card text-card-foreground shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Deployment
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Platforms I trust to ship work.
              </CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
              <LogoBar items={tech.deployment} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
