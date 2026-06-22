/**
 * Single source of truth for all site content.
 *
 * All data here is drawn from Yu Ming Law's CV. Components stay purely
 * presentational and read from these exports.
 */

export const PERSON = {
  name: "Yu Ming Law",
  /** Short mark used as the nav logo. */
  initials: "YML",
  role: "Computer Science Student & Software Developer",
  location: "Hong Kong SAR",
  school: "HKUST",
  year: "Year 1",
  /**
   * Public contact email. The CV lists the HKUST address; swap to a personal
   * address here if you'd rather route enquiries elsewhere.
   */
  email: "ymlawad@connect.ust.hk",
  /**
   * Drop an image in /public (e.g. /public/portrait.jpg) and set the path here
   * to render a portrait in the About section. Leave as null to omit it.
   */
  // TODO: add a real portrait path if desired, e.g. "/portrait.jpg"
  photo: null as string | null,
} as const;

/** Hero headline + supporting copy. */
export const HERO = {
  eyebrow: `${PERSON.year} · Computer Science · ${PERSON.school}`,
  // Split so the last word can be accented.
  headline: ["Yu Ming", "Law"],
  tagline:
    "First-year Computer Science student at HKUST who builds practical software " +
    "— from full-stack web platforms to cross-platform mobile apps used by " +
    "500+ people.",
} as const;

/** About-section narrative + fact list. Kept factual and verifiable. */
export const ABOUT = {
  heading: ["Algorithms, shipped", "as real products."],
  paragraphs: [
    "I'm a first-year Computer Science student at HKUST with a strong " +
      "foundation in algorithms and software development. I've built and " +
      "deployed applications used by 500+ people across web and mobile.",
    "My interests run from systems and algorithms to functional programming. " +
      "I care about software that is correct, efficient, and genuinely useful — " +
      "and I enjoy leading teams to ship it, whether that's a magazine platform " +
      "or a real-time mobile app.",
  ],
  facts: [
    { label: "Education", value: "HKUST — B.Eng. Computer Science · GPA 3.823" },
    { label: "Previously", value: "SHSID — IB Diploma, 44/45" },
    { label: "Location", value: "Hong Kong SAR" },
    { label: "Languages", value: "English · Mandarin · Cantonese (conversational)" },
  ],
} as const;

export type Project = {
  title: string;
  description: string;
  role: string;
  tags: string[];
  github: string | null;
  live: string | null;
  year: string;
  /** Optional screenshot in /public/projects/<file>. Falls back to a monogram. */
  image: string | null;
};

/**
 * Real projects only — all public repos under github.com/ymlaw1125.
 * Add a screenshot to /public/projects/ and set `image` to surface it.
 * Ordered most-impressive first; the first entry is rendered as the feature.
 */
export const PROJECTS: Project[] = [
  {
    title: "PTC Queue Manager",
    description:
      "A cross-platform mobile app for real-time parent–teacher conference queue " +
      "management. Features role-based authentication, push notifications for " +
      "upcoming turns, and auto-skip timing logic that keeps queues moving efficiently.",
    role: "Full-Stack Developer",
    tags: ["React Native", "Firebase", "Expo", "Push Notifications"],
    github: "https://github.com/ymlaw1125/ptc-queue",
    live: null,
    year: "2024–25",
    image: "/projects/ptc-queue.png",
  },
  {
    title: "SHSID Times Website",
    description:
      "A digital magazine platform serving 500+ users for viewing, downloading, " +
      "and discussing SHSID Times. Led a team of 8, training them on Django's MVT " +
      "framework and GitHub to streamline development.",
    role: "Team Lead & Full-Stack Developer",
    tags: ["Django", "MySQL", "Python", "HTML/CSS"],
    github: "https://github.com/ymlaw1125/TimesWebsite",
    live: null,
    year: "2024",
    image: "/projects/timeswebsite.png", 
  },
  {
    title: "SHSID Navigator",
    description:
      "A real-time campus navigation app using the Bellman–Ford algorithm with " +
      "dynamic rerouting for optimal pathfinding.",
    role: "Solo Developer",
    tags: ["WeChat Mini Program", "WXML/WXSS", "Bellman–Ford", "Graph Algorithms"],
    github: "https://github.com/ymlaw1125/SHSID-Navigation",
    live: null,
    year: "2023",
    image: "/projects/shsid-navigator.png", 
  },
];

export type Role = {
  org: string;
  title: string;
  period: string;
  location: string;
  points: string[];
};

/** Work experience + leadership, most recent first. */
export const EXPERIENCE: Role[] = [
  {
    org: "Intelli Global Corporation Ltd.",
    title: "Software Engineer Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Hong Kong SAR",
    points: [
      "QA engineering for BuildingOS, a construction management platform.",
    ],
  },
  {
    org: "KidaLion Academy",
    title: "Mathematics Tutor (Part-time)",
    period: "Aug 2025 – Present",
    location: "Remote",
    points: [
      "Lead two weekly Algebra and Counting sessions for 70+ students — five placed in the top 5% of AMC 8.",
    ],
  },
  {
    org: "Google Developer Group on Campus, HKUST",
    title: "Technical Member",
    period: "Mar 2026 – Present",
    location: "Hong Kong SAR",
    points: [
      "Collaborate with 10+ student developers and help organize the GDGoC Hackathon.",
    ],
  },
  {
    org: "Computer & Programming Club, SHSID",
    title: "Founder & President",
    period: "Sep 2023 – Jun 2025",
    location: "Shanghai",
    points: [
      "Founded the club and ran coding tutorials and software projects for 20+ students.",
      "Directed a team of 8 to build the SHSID Times platform, reaching 500+ users.",
    ],
  },
];

export type Achievement = { title: string; body: string; year?: string };

/** Genuine awards only. */
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "HK Jockey Club Chairman's Scholarship",
    body: "Awarded to the top 15 students across Hong Kong.",
  },
];

/**
 * Skills grouped by category — honest lists from the CV, no invented
 * proficiency percentages.
 */
export const SKILLS: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C/C++", "Java", "SQL", "JavaScript", "HTML/CSS", "R"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "Flutter", "Django", "Flask", "Firebase", "REST API"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "VS Code", "Visual Studio", "PyCharm", "IntelliJ"],
  },
  {
    label: "Libraries",
    items: ["pandas", "NumPy", "TensorFlow", "PyTorch", "Matplotlib"],
  },
];

/** Contact / social links. */
export const SOCIALS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/ymlaw1125" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuminglaw" },
];

/** Section ids in render order — used for nav links and scrollspy. */
export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "achievements", label: "Awards" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
