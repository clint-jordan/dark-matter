
import { getCollection, type CollectionEntry } from "astro:content";
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import type { collections } from "../content.config";
import { contentTypes } from "../content.config";
import { siteConfig } from "../site.config";

/**
 * Processes the date of an article and returns a string representing the processed date.
 * @param timestamp the timestamp to process
 * @returns a string representing the processed timestamp
 */
export const processDate = (date: Date) => {
  const monthSmall = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthSmall} ${day}, ${year}`;
};