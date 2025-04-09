"use client";
// components/BlogPagination.jsx
import { useSearchParams } from "next/navigation";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";

export default function BlogPagination({ sortedPosts, postsPerPage }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get("page")) || 1;

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const displayPosts = sortedPosts.slice(
    postsPerPage * (currentPage - 1),
    postsPerPage * currentPage
  );

  return (
    <>
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
      <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
    </>
  );
}
