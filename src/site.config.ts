export interface MetaData {
  title?: string;
  titleSuffix?: string;
  description: string;
  longDescription: string;
  cardImage: string;
  keywords: string[];
  allowSearch?: boolean;
  url: string;
}

export const siteConfig = {
  site: {
    devPort: 4321,
    site: "https://clint-jordan.github.io",
    base: "/dark-matter"
  },
  globalMeta: {
    title: "John Doe",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  blogMeta: {
    titleSuffix: "Blog",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/blog"
  },
  projectMeta: {
    titleSuffix: "Projects",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/projects"
  },
  notesMeta: {
    titleSuffix: "Notes",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/notes"
  },
  cvMeta: {
    titleSuffix: "CV",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    allowSearch: false,
    url: "/cv"
  },
  searchMeta: {
    titleSuffix: "Search",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/search"
  },
  notFoundMeta: {
    titleSuffix: "404",
    description: "The page you are looking for does not exist.",
    longDescription: "The page you are looking for does not exist.",
    allowSearch: false,
    cardImage: "/card-image.webp",
  },
  hero: {
    title: "Foo",
    subtitle: "A profound defining statement",
    image: "/card-image.webp",
    ctaText: "View Projects",
    ctaUrl: "/projects"
  },
  personal: {
    name: "John Doe",
    githubProfile: "https://github.com",
    twitterProfile: "https://twitter.com",
    linkedinProfile: "https://linkedin.com/"
  },
  texts: {
    blogName: "Blog",
    projectsName: "Projects",
    notesName: "Notes",
    cvName: "cv",
    viewAll: "View All",
    noPosts: "No posts found.",
    noProjects: "No projects found."
  },
  menu: {
    // home: "/",
    blog: "/blog",
    notes: "/notes",
    projects: "/projects",
    cv: "/cv",
    search: "/search"
  }
};
