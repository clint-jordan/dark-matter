
import { getCollection } from "astro:content";
import path from "path";

import type { collections } from "../content.config";
const baseUrl = import.meta.env.BASE_URL;
const isDev = import.meta.env.DEV;

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
  return posts.map((post) => {
    // Extract directory from entry.id for nested paths
    const filePath = post.id;
    const dir = path.dirname(filePath);
    
    // Construct URL with directory if present
    const urlPath = dir !== '.' 
      ? `${collectionName}/${dir}/${post.data.slug}`
      : `${collectionName}/${post.data.slug}`;
    
    return {
      ...post.data,
      url: getUrl(urlPath),
    };
  })
  .filter((post) => {
    if (isDev) {
      return true;
    } else {
      return !post.draft
    }
  })
  .sort((a, b) => {
    // Sort by published date, fallback to updated date, then by title
    const dateA = a.published || a.updated || new Date(0);
    const dateB = b.published || b.updated || new Date(0);
    return dateB.getTime() - dateA.getTime();
  })
};

export const getFeaturedPosts = async (collectionName: keyof typeof collections) => {
  const posts = await getPosts(collectionName)
  return posts.filter((post) => post.feature === true).slice(0, 5);
}

export const getUrl = (p: string) => {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const path = p.startsWith("/") ? p.slice(1, p.length) : p;
  return base + path;
}
