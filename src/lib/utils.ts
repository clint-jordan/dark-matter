
import { getCollection, type CollectionEntry } from "astro:content";
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import type { collections } from "../content.config";
import { contentTypes } from "../content.config";
import { siteConfig } from "../site.config";
const baseUrl = import.meta.env.BASE_URL;

/**
 * Processes the date of an article and returns a string representing the processed date.
 * @param timestamp the timestamp to process
 * @returns a string representing the processed timestamp
 */
export const processDate = (date: Date | undefined | null) => {
  if (!date) return "";
  const monthSmall = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthSmall} ${day}, ${year}`;
};

export const getPosts = async (collectionName: keyof typeof collections) => {
  const posts = await getCollection(collectionName);
  return posts.map((post) => ({
    ...post.data,
    url: getUrl(`${collectionName}/${post.data.slug}`),
  }))
  .sort((a, b) => {
    // Sort by published date, fallback to updated date, then by title
    const dateA = a.published || a.updated || new Date(0);
    const dateB = b.published || b.updated || new Date(0);
    return dateB.getTime() - dateA.getTime();
  })
};

export const getUrl = (p: string) => {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const path = p.startsWith("/") ? p.slice(1, p.length) : p;
  return base + path;
}
