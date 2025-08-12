import { getCollection, type CollectionEntry } from "astro:content";
import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

import type { collections } from "../content.config";
import { contentTypes, siteConfig } from "../content.config";

/**
 * Retrieves the site configuration.
 * @returns the site configuration object
 */
export const getConfigurationCollection = async () => {
  return {
    data: siteConfig
  };
}

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

/**
 * Gets the base URL for the site, prioritizing environment variables over content configuration.
 * @returns the base URL string
 */
export const getBaseUrl = async (): Promise<string> => {
  const { data: config } = await getConfigurationCollection();

  if (import.meta.env.DEV) {
    return `http://localhost:${config.site.devPort}`;
  }
  return config.site.baseUrl;
}