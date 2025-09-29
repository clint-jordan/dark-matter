import type { 
  Position, 
  Experience, 
  Degree, 
  Education,
  StrengthItem,
  Strengths
} from "../../lib/cv.types"

const p1: Position = {
  title: "Lead Software Engineer",
  employer: "Super Impressive Tech Company",
  startDate: "Dec 2023",
  endDate: "Current",
  bullets: [
    "Mentored others that develop complicated web applications",
    "Shipped many features",
    "Occasionally glanced at phone"
  ],
};
const p2: Position = {
  title: "Senior Software Engineer",
  employer: "Super Impressive Tech Company",
  startDate: "Dec 2023",
  endDate: "Dec 2024",
  bullets: [
    "Developed complicated web applications",
    "Shipped features",
    "Very little time spent looking at phone"
  ],
};
const p3: Position = {
  title: "Software Engineer",
  employer: "Big Impressive Tech Company",
  startDate: "Dec 2022",
  endDate: "Dec 2023:",
  bullets: [
    "Developed web applications",
    "Tested, deployed",
    "Significant time spent looking at phone"
  ],
};
const p4: Position = {
  title: "Graduate Teaching Assistant",
  employer: "Super Elite Ivy League College",
  startDate: "Jan 2018",
  endDate: "Dec 2022",
  bullets: [
    "Assisted teaching intro to computer science",
    "Led laboratory exercises",
    "Watched students look at their phones constantly"
  ],
};
export const experience: Experience = {
  sectionTitle: "Relevant Experience",
  positions: [
    p1,
    p2,
    p3,
    p4
  ]
}

const po1: Position = {
  title: "Lifeguard",
  employer: "US Olympic Training Center",
  startDate: "Dec 2014",
  endDate: "Dec 2018",
  bullets: [
    "Occassionally rescued olympic athletes",
  ],
};
const po2: Position = {
  title: "Head of Robotics Club",
  employer: "Super Elite High School",
  startDate: "Dec 2014",
  endDate: "Dec 2018",
  bullets: [
    "Led robotics labs for fellow high school students",
    "Taught robotics to gifted toddlers",
  ],
};
export const otherExperience: Experience = {
  sectionTitle: "Other Experience",
  positions: [
    po1,
    po2,
  ]
}

const d1: Degree = {
  title: "PhD Computer Science",
  honors: "summa cum laude",
  dateObtained: "Dec 2023",
  school: "Super Elite Ivy League School"

}
const d2: Degree = {
  title: "MS Computer Science",
  honors: "summa cum laude",
  dateObtained: "Dec 2021",
  school: "Another Ivy League School"
}
const d3: Degree = {
  title: "BS Computer Science",
  honors: "summa cum laude",
  dateObtained: "Dec 2017",
  school: "Ivy League School"
}
export const education: Education = {
  degrees: [
    d1,
    d2,
    d3
  ]
}

const strengthBulletsLeft: StrengthItem[] = [
  { 
    item: "Programming Languages that I know and love",
    subItem: ["Visual Basic", "COBOL", "Pascal"]
  },
  { 
    item: "Web Development",
    subItem: ["React", "Vue", "Angular"]
  },
  { 
    item: "Technical Work",
    subItem: {
      item: "Doing lots of stuff",
      subItem: ["Computers", "Printers", "Fax Machines"]
    }
  },
];

const strengthBulletsRight: StrengthItem[] = [
  { 
    item: "Programming Languages that I know and love",
    subItem: ["Visual Basic", "COBOL", "Pascal"]
  },
  { 
    item: "Web Development",
    subItem: ["React", "Vue", "Angular"]
  },
  { 
    item: "Technical Work",
    subItem: {
      item: "Doing lots of stuff",
      subItem: ["Computers", "Printers", "Fax Machines"]
    }
  },
];

export const strengths: Strengths = {
  sectionTitle: "Technical Strengths",
  strengths: [strengthBulletsLeft, strengthBulletsRight]
}

export const hero = {
  title: "Clint Jordan",
  subtitle: "If you're looking at this, I want to work for you",
  image: "/hero.webp",
}