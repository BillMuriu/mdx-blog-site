// app/blog/page.js
import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";
import { Suspense } from "react";
import BlogPagination from "@/components/BlogPagination";

const POSTS_PER_PAGE = 5;

// You can add this to make the page static with dynamic client-side pagination
export const dynamic = "force-static";

export default function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev.
          </p>
        </div>
      </div>

      <hr className="mt-8" />

      <Suspense fallback={<p>Loading blog posts...</p>}>
        <BlogPagination
          sortedPosts={sortedPosts}
          postsPerPage={POSTS_PER_PAGE}
        />
      </Suspense>
    </div>
  );
}
