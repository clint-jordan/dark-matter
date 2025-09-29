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
    base: "/dark-matter",
    showHomeHero: true,
    allowThemeToggle: true,
    defaultTheme: "dark"
  },
  personal: {
    name: "John Doe",
    firstName: "John",
    lastName: "Doe",
    githubProfile: "https://github.com",
    twitterProfile: "https://twitter.com",
    linkedinProfile: "https://linkedin.com/"
  },
  global: {
    title: "John Doe",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"]
  },
  blog: {
    titleSuffix: "Blog",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/blog"
  },
  project: {
    titleSuffix: "Projects",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/projects"
  },
  notes: {
    titleSuffix: "Notes",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/notes"
  },
  cv: {
    titleSuffix: "CV",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    allowSearch: false,
    publish: ["cv", "special"]
  },
  search: {
    titleSuffix: "Search",
    description: "",
    longDescription: "",
    cardImage: "/card-image.webp",
    keywords: ["web development", "design", "technology"],
    url: "/search"
  },
  notFound: {
    titleSuffix: "404",
    description: "The page you are looking for does not exist.",
    longDescription: "The page you are looking for does not exist.",
    allowSearch: false,
    cardImage: "/card-image.webp",
  },
  homeHero: {
    title: ["Software Developer.", "Robotics Enthusiast.", "Dork."],
    subtitle: "This is a profound defining statement.",
  },
  aboutHero: {
    title: "Hi, I'm John",
    subtitle: "I'm a software developer and this is my page",
    image: "/hero.webp",
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
    // nav_bar_name: "path/to/page",
    blog: "blog",
    notes: "notes",
    projects: "projects",
    cv: "cv",
    about: "about",
    search: "search"
  }
};
