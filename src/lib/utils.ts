import { getCollection, type CollectionEntry } from "astro:content";

let configCache: CollectionEntry<'configuration'> | null = null;

/**
 * Retrieves the configuration collection entry from the content directory.
 * It checks if the configuration is already cached to avoid multiple reads.
 * There can only be one configuration file, so it throws an error if there are multiple or none.
 * @returns the configuration collection entry
 */
export const getConfigurationCollection = async (): Promise<CollectionEntry<'configuration'>> => {
  if (configCache) return configCache;

  const configs = await getCollection("configuration");
  if (configs.length !== 1) {
    throw new Error("Configuration file not found or multiple configuration files present.");
  }
  configCache = configs[0];
  return configs[0];
}

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