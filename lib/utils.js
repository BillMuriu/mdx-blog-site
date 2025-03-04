/**
 * Utility Functions
 * 
 * This module provides utility functions for class name merging, date formatting, and post sorting.
 * 
 * 1. `cn`: Merges multiple class names into a single class name string using `clsx` and `tailwind-merge`.
 *    - Inputs: An array of class values (strings, arrays, objects).
 *    - Output: A single merged class name string.
 * 
 * 2. `formatDate`: Formats a date input into a readable string format.
 *    - Input: A date string or number.
 *    - Output: A formatted date string in the format "Month Day, Year".
 * 
 * 3. `sortPosts`: Sorts an array of posts by date in descending order.
 *    - Input: An array of post objects, each containing a `date` property.
 *    - Output: A sorted array of posts.
 * 
 * Example Usage:
 * 
 * // Merging class names
 * const className = cn("bg-red-500", "text-white", { "font-bold": true });
 * 
 * // Formatting a date
 * const formattedDate = formatDate("2024-07-11");
 * 
 * // Sorting posts
 * const sortedPosts = sortPosts([{ date: "2024-07-11" }, { date: "2023-05-06" }]);
 */




import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
