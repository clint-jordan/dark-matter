import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { parse as parseToml } from "toml";


// Loader and schema for the configuration collection.
// It loads a TOML file from the `content/configuration.toml` path and defines the schema for the configuration data.
const configuration = defineCollection({
  loader: file("content/configuration.toml", {
    parser: (text) => JSON.parse(JSON.stringify(parseToml(text))),
  }),
  schema: z.object({
    
    // Core site configuration.
    site: z.object({
      
      // This should be the base URL of your live site,
      // and is used to generate absolute URLs for links and metadata.
      baseUrl: z.string().url(),
      
      // The local development port
      devPort: z.number().default(4321),
    }),
    
    // The global metadata for the site. If specific page metadata is not provided,
    // this metadata will be used as a fallback for SEO and Open Graph tags.
    globalMeta: z.object({
      
      // The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
      title: z.string(),
      
      // The short description of the page, used in Open Graph metadata and as a fallback for SEO.
      description: z.string(),

      // The long description of the page, used in Open Graph metadata and as a fallback for SEO.
      longDescription: z.string().optional(),

      // The URL or path of the card image for social media sharing.
      cardImage: z.string().optional(),
      
      // Keywords for SEO, used in the `<meta name="keywords">` tag.
      keywords: z.array(z.string()).optional(),
    }),

    notFoundMeta: z.object({
      
      // The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
      title: z.string(),

      // The short description of the page, used in Open Graph metadata and as a fallback for SEO.
      description: z.string(),

      // The long description of the page, used in Open Graph metadata and as a fallback for SEO.
      longDescription: z.string().optional(),

      // The URL or path of the card image for social media sharing.
      cardImage: z.string().optional(),

      // Keywords for SEO, used in the `<meta name="keywords">` tag.
      keywords: z.array(z.string()).optional(),
    }),
    
    // The blog page's metadata.
    blogMeta: z.object({
      
      // The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
      title: z.string(),

      // The short description of the page, used in Open Graph metadata and as a fallback for SEO.
      description: z.string(),

      // The long description of the page, used in Open Graph metadata and as a fallback for SEO.
      longDescription: z.string().optional(),

      // The URL or path of the card image for social media sharing.
      cardImage: z.string().optional(),

      // Keywords for SEO, used in the `<meta name="keywords">` tag.
      keywords: z.array(z.string()).optional(),
    }),

    // The project page's metadata.
    projectMeta: z.object({

      // The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
      title: z.string(),
      
      // The short description of the page, used in Open Graph metadata and as a fallback for SEO.
      description: z.string(),
      
      // The long description of the page, used in Open Graph metadata and as a fallback for SEO.
      longDescription: z.string().optional(),
      
      // The URL or path of the card image for social media sharing.
      cardImage: z.string().optional(),
      
      // Keywords for SEO, used in the `<meta name="keywords">` tag.
      keywords: z.array(z.string()).optional(),
    }),

    // The project page's metadata.
    notesMeta: z.object({

      // The title of the page, used in the HTML `<title>` tag and Open Graph metadata.
      title: z.string(),
      
      // The short description of the page, used in Open Graph metadata and as a fallback for SEO.
      description: z.string(),
      
      // The long description of the page, used in Open Graph metadata and as a fallback for SEO.
      longDescription: z.string().optional(),
      
      // The URL or path of the card image for social media sharing.
      cardImage: z.string().optional(),
      
      // Keywords for SEO, used in the `<meta name="keywords">` tag.
      keywords: z.array(z.string()).optional(),
    }),

    // The hero section configuration.
    hero: z.object({
      
      // The title displayed in the hero section.
      title: z.string().default("Zaggonaut"),
      
      // The subtitle displayed in the hero section.
      subtitle: z.string().default("Retro-Inspired Theme &<br>Built for Astro"),
      
      // The URL or path of the hero image, used as a background image in the hero section.
      image: z.string().optional(),

      // The text displayed in the call-to-action button in the hero section.
      ctaText: z.string().default("View Projects"),

      // The URL of the call-to-action button in the hero section.
      ctaUrl: z.string().default("/projects"),
    }),

    
    // The personal information of the site owner or author.
    personal: z.object({
      
      // The name of the site owner or author, used in various places throughout the site.
      name: z.string().default("Zaggonaut"),

      // The GitHub profile URL of the site owner or author.
      githubProfile: z.string().url().optional(),

      // The Twitter profile URL of the site owner or author.
      twitterProfile: z.string().url().optional(),

      // The LinkedIn profile URL of the site owner or author.
      linkedinProfile: z.string().url().optional(),
    }),

    
    // Commonly used text used throughout the site.
    texts: z.object({
      
      // The text used when displaying the posts section on the homepage.
      postsName: z.string().default("Posts"),

      // The text used when displaying the projects section on the homepage.
      projectsName: z.string().default("Posts"),

      // The text used for the "View All" button in the posts and projects sections.
      viewAll: z.string().default("View All"),

      // The text displayed when there are no posts found.
      noPosts: z.string().default("No posts found."),

      // The text displayed when there are no projects found.
      noProjects: z.string().default("No projects found."),
    }),

    
    // The menu configuration for the site.
    // This defines the URLs for the main navigation links.
    menu: z.object({
      home: z.string().default("/"),
      projects: z.string().default("/projects"),
      blog: z.string().default("/blog"),
      notes: z.string().default("/notes"),
      search: z.string().default("/search"),
      // Add other menu items here
    }),
  }),
});

const baseSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  description: z.string().optional(),
  longDescription: z.string().optional(),
  cardImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  published: z.date().transform((val) => new Date(val)).optional(),
  updated: z.date().transform((val) => new Date(val)).optional(),
});

type ContentType = {
  path: string,
  directory: string,
  layout: string,
  menuItem: boolean,
  schema: any,
}

class Content {
  public path: string = ""
  public directory: string = ""
  public layout: string = ""
  public menuItem: boolean = false
  public schema: z.ZodObject<any>
  public collection: ReturnType<typeof defineCollection>;

  constructor(c: ContentType) {
    this.path = c.path;
    this.directory = c.directory;
    this.layout = c.layout;
    this.menuItem = c.menuItem;
    this.schema = c.schema;
    this.collection = this.genContentCollection()
  }
  
  genContentCollection = (): ReturnType<typeof defineCollection> => {
    return defineCollection({
      loader: glob({ pattern: "**/*.md", base: this.directory }),
      schema: this.schema.transform((data) => {
        const slug =
          data.slug ?? data.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
        const newData = {
          ...data,
          slug,
        };
        return newData;
      }),
    })
  }
}

export const contentTypes = {
  blog: new Content({
    path: "/blog",
    directory: "./content/blogs",
    layout: "BlogLayout",
    menuItem: true,
    schema: baseSchema.extend({
      readTime: z.number().optional(),
    }),
  }),
  notes: new Content({
    path: "/notes",
    directory: "./content/notes", 
    layout: "NotesLayout",
    menuItem: true,
    schema: baseSchema,
  }),
  projects: new Content({
    path: "/projects",
    directory: "./content/projects",
    layout: "ProjectLayout", 
    menuItem: true,
    schema: baseSchema.extend({
      githubUrl: z.string().url().optional(),
      liveDemoUrl: z.string().url().optional(),
    }),
  })
} as const;

export const collections = {
  blog: contentTypes.blog.collection,
  projects: contentTypes.projects.collection,
  notes: contentTypes.notes.collection,
  configuration 
}