import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import TryDeploySection from "@/components/deploy";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { OfferCard } from "@/components/offer-card";
import ConnectionsCard from "@/components/ConnectionsCard";
import TechStackCard from "@/components/TechStackCard";
import Image from "next/image";

export default function Home() {
  const latestPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <>
      <section className="container max-w-4xl py-10 md:py-20 lg:py-32">
        <div className="flex flex-col-reverse md:flex-row md:items-start items-center justify-between gap-10">
          <div className="text-center md:text-left space-y-6 w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-balance">
              Supercharge Your Business with{" "}
              <span className="text-primary">Custom AI Integrations</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
              I help founders, small teams, and businesses automate workflows,
              build AI agents, and integrate smart systems that save time and
              scale effortlessly.
            </p>
          </div>

          <div className="shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-border shadow-md">
            <Image
              src="/Site-Image.jpg" // Make sure this is inside the public/ folder
              alt="Your Name"
              width={224}
              height={224}
              className="w-full h-full object-cover"
              priority // Optional: speeds up loading for above-the-fold images
            />
          </div>
        </div>
      </section>

      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Who I Work With
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed tracking-tight text-left">
          I collaborate with{" "}
          <span className="text-green-600  font-medium">founders</span>,{" "}
          <span className="text-green-600 font-medium">
            small business owners
          </span>
          , <span className="text-green-600 font-medium">lean teams</span>, and{" "}
          <span className="text-green-600  font-medium">
            automation-first startups
          </span>{" "}
          who are eager to scale their impact through custom AI workflows,
          automation, and seamless integrations. These are people who value
          precision, speed, and clarity — and want their systems to reflect
          that.
        </p>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Services I Offer
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
      <Separator className="scroller" />
      <section className="container py-6 lg:py-10 flex flex-col space-y-6 mt-30">
        <TryDeploySection />
      </section>
      <section className="container py-6 lg:py-10 flex space-y-6 mt-30 max-w-4xl">
        <ConnectionsCard />
      </section>

      {/* <Separator className="scroller" /> */}
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-20">
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
