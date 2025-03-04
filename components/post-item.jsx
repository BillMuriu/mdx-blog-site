/**
 * PostItem Component
 * 
 * This component represents an individual blog post item.
 * It displays the post's title, description, and publication date.
 * The title is a clickable link that navigates to the post's detailed page.
 * The component also includes a "Read more" link for further navigation.
 * 
 * Props:
 * - slug (string): The URL slug for the post.
 * - title (string): The title of the post.
 * - description (string, optional): A brief description of the post.
 * - date (string): The publication date of the post.
 * 
 * Usage:
 * <PostItem slug="/post-url" title="Post Title" description="Post description" date="2024-07-11" />
 */


import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";

export function PostItem({ slug, title, description, date }) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
        </h2>
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
