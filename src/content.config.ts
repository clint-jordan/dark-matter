import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


// Loader and schema for the configuration collection.
// It loads a TOML file from the `content/configuration.toml` path and defines the schema for the configuration data.
// Configuration object with all values from configuration.toml
const configData = {
  site: {
    devPort: 4321,
    baseUrl: "https://clint-jordan.github.io/dark-matter"
  },
  globalMeta: {
    title: "dark-matter",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  blogMeta: {
    title: "John Doe Blog",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  projectMeta: {
    title: "dark-matter",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  notesMeta: {
    title: "dark-matter",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  Meta: {
    title: "dark-matter",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  searchMeta: {
    title: "dark-matter",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  notFoundMeta: {
    title: "404",
    description: "The page you are looking for does not exist.",
    longDescription: "The page you are looking for does not exist. Maybe it never existed. Spooky.",
    cardImage: "/card-image.webp",
    foo: "bar"
  },
  hero: {
    title: "John Doe",
    subtitle: "A profound defining statement",
    image: "/card-image.webp",
    ctaText: "View Projects",
    ctaUrl: "/projects"
  },
  personal: {
    name: "John Doe",
    githubProfile: "https://github.com/clint-jordan",
    twitterProfile: "https://twitter.com",
    linkedinProfile: "https://linkedin.com/"
  },
  texts: {
    blogName: "Blog",
    projectsName: "Projects",
    viewAll: "View All",
    noPosts: "No posts found.",
    noProjects: "No projects found."
  },
  menu: {
    home: "/",
    projects: "/projects",
    blog: "/blog",
    notes: "/notes",
    search: "/search"
  }
};

const configuration = defineCollection({
  type: "data",
  schema: z.object({
    site: z.object({
      baseUrl: z.string().url(),
      devPort: z.number().default(4321),
    }),
    globalMeta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    notFoundMeta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    blogMeta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    projectMeta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    notesMeta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    Meta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    searchMeta: z.object({
      title: z.string(),
      description: z.string(),
      longDescription: z.string().optional(),
      cardImage: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    }),
    hero: z.object({
      title: z.string().default("Zaggonaut"),
      subtitle: z.string().default("Retro-Inspired Theme &<br>Built for Astro"),
      image: z.string().optional(),
      ctaText: z.string().default("View Projects"),
      ctaUrl: z.string().default("/projects"),
    }),
    personal: z.object({
      name: z.string().default("Zaggonaut"),
      githubProfile: z.string().url().optional(),
      twitterProfile: z.string().url().optional(),
      linkedinProfile: z.string().url().optional(),
    }),
    texts: z.object({
      blogName: z.string().default("Blog"),
      projectsName: z.string().default("Projects"),
      viewAll: z.string().default("View All"),
      noPosts: z.string().default("No posts found."),
      noProjects: z.string().default("No projects found."),
    }),
    menu: z.object({
      home: z.string().default("/"),
      projects: z.string().default("/projects"),
      blog: z.string().default("/blog"),
      notes: z.string().default("/notes"),
      search: z.string().default("/search"),
    }),
  }),
});

// Export the configuration data for use in components
export const siteConfig = configData;

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