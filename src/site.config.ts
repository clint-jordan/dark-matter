// Site configuration that can be imported in astro.config.mjs
export const siteConfig = {
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
    notesName: "Notes",
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
