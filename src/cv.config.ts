type Position = {
  title: string,
  startDate: string,
  endDate: string,
  bullets: [string]
}

interface Experience {
  positions: [Position]  
}

const p1: Position = {
  title: "Software Engineer",
  startDate: "2023-01-01",
  endDate: "2024-01-01",
  bullets: ["Developed web applications"]
};

type Degree = {
  title: string,
  startDate: string,
  endDate: string,
  school: [string]
}

interface Education {
  degrees: [Degree]  
}

export const cvConfig = {
};
