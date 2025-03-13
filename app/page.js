import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { OfferCard } from "@/components/offer-card";
import IntegrationsCard from "@/components/integrations";
import ConnectionsCard from "@/components/ConnectionsCard";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-3xl md:text-6xl lg:text-5xl font-black text-balance">
            Implement custom ai workflows to your business
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my blog template. Built using tailwind, shadcn, velite
            and Nextjs 14.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Book a free dicovery call
            </Link>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link> */}
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        {/* <IntegrationsCard /> */}
        <ConnectionsCard />
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Choose your solutions
        </h2>
        <OfferCard
          title="Custom AI Solutions"
          description="Get in-house AI Expertise, designed for teams who need custom agents & automated workflows"
          offers={[
            "Ongoing AI Implementations",
            "Minimum 3 Months",
            "Custom AI Roadmap",
            "Try Without Risk",
            "Consulting & Coaching",
            "Cancel Any Time",
          ]}
          icon={
            <span role="img" aria-label="robot">
              🤖
            </span>
          }
        />

        <OfferCard
          title="Custom n8n Node Development"
          description="Build, deploy, and maintain custom nodes for your automation workflows"
          offers={[
            "Custom n8n Node Development",
            "Seamless API Integrations",
            "Performance Optimization",
            "Ongoing Support & Maintenance",
            "Scalable Architecture",
          ]}
          icon={
            <span role="img" aria-label="gear">
              ⚙️
            </span>
          }
        />
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-60">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
