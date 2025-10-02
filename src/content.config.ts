import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  slug: z.string().optional(),
  description: z.string().optional(),
  longDescription: z.string().optional(),
  cardImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  feature: z.boolean().default(false),
  draft: z.boolean().default(true),
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
      repoUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
    }),
  })
} as const;

// CV Collection Schema
const cvSchema = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
  }),
  summary: z.string(),
  experience: z.object({
    sectionTitle: z.string(),
    positions: z.array(z.object({
      title: z.string(),
      employer: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      bullets: z.array(z.string()),
    })),
  }),
  otherExperience: z.object({
    sectionTitle: z.string(),
    positions: z.array(z.object({
      title: z.string(),
      employer: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      bullets: z.array(z.string()),
    })),
  }),
  education: z.object({
    degrees: z.array(z.object({
      title: z.string(),
      school: z.string(),
      dateObtained: z.string(),
      honors: z.string().optional(),
    })),
  }),
  strengths: z.object({
    sectionTitle: z.string(),
    strengths: z.array(z.any()),
  }),
});

const cvCollection = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./content/cv" }),
  schema: cvSchema,
});

export const collections = {
  blog: contentTypes.blog.collection,
  projects: contentTypes.projects.collection,
  notes: contentTypes.notes.collection,
  cv: cvCollection,
}