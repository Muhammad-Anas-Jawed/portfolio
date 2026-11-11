// Apni personal details yahan change karein.
export const profile = {
  name: "Muhammad Anas Jawed",
  shortName: "Anas Jawed",
  initials: "AJ",
  role: "Software Engineer · Full Stack Developer · SQA Engineer",
  location: "Karachi, Pakistan",
  email: "anasjawed.1999@gmail.com",
  phone: "+92 331 3475734",
  whatsapp: "923313475734",
  github: "https://github.com/Muhammad-Anas-Jawed?tab=repositories",
  linkedin: "https://www.linkedin.com/in/anas-jawed-a0559a285",
  resume: "Anas-Jawed-Resume.pdf",
  // Photo lagani ho to public folder mein photo.jpg rakhein aur neeche naam likhein.
  photo: "",
  intro:
    "I build thoughtful web experiences and test the details that make them dependable. Bringing development and quality assurance together, from the first interface to the final check.",
  about:
    "I'm a software engineering graduate from Sir Syed University of Engineering and Technology, based in Karachi. My work brings together responsive frontend development, backend integration, and hands-on testing of web and mobile applications.",
  approach:
    "My SQA background shapes how I build: think through the edge cases, make interfaces clear, and check that the experience works across devices. I'm continuing to develop my full stack skills through the Saylani Mass IT Training Program.",
};

export const skills = [
  {
    title: "Development",
    number: "01",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Supabase",
      "MongoDB",
      "REST APIs",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Quality assurance",
    number: "02",
    items: [
      "Manual Testing",
      "Automation Testing",
      "API Testing",
      "Test Case Design",
      "Web & Mobile Testing",
      "SQL",
      "MySQL",
    ],
  },
  {
    title: "Tools & foundations",
    number: "03",
    items: [
      "Git",
      "GitHub",
      "Python",
      "Java",
      "WordPress",
      "Problem Solving",
      "Teamwork",
    ],
  },
];

// Original animated counter cards ke liye CV se verified values.
export const aboutCounters = [
  { end: 2, suffix: "", label: "Years in SQA roles" },
  { end: 3, suffix: "", label: "Remote internships" },
  { end: 2024, suffix: "", label: "Software engineering graduate" },
  { end: 3, suffix: "", label: "Selected projects" },
];

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
    color: "group-hover:border-primary/50 group-hover:shadow-primary/15",
  },
  {
    category: "Backend & Data",
    items: [
      "REST APIs",
      "Supabase",
      "MongoDB",
      "SQL",
      "MySQL",
      "CRUD Operations",
    ],
    color: "group-hover:border-primary/50 group-hover:shadow-primary/15",
  },
  {
    category: "Quality Assurance",
    items: [
      "Manual Testing",
      "Automation Testing",
      "API Testing",
      "Test Case Design",
      "Web & Mobile Testing",
      "Bug Reporting",
    ],
    color: "group-hover:border-primary/50 group-hover:shadow-primary/15",
  },
  {
    category: "Tools & More",
    items: [
      "Git & GitHub",
      "Python",
      "Java",
      "WordPress",
      "Problem Solving",
      "Teamwork",
    ],
    color: "group-hover:border-primary/50 group-hover:shadow-primary/15",
  },
];

// Naya project add karne ke liye ek object copy karke details badal dein.
export const projects = [
  {
    id: "restropos",
    title: "RestroPOS",
    category: "Web application",
    description:
      "A restaurant point-of-sale project with separate admin and user entry points. Explore both live login experiences using the links below.",
    tags: ["Restaurant POS", "Admin portal", "User portal"],
    featured: true,
    links: [
      {
        label: "Admin login",
        url: "https://restropos-frontend.vercel.app/admin/login",
      },
      {
        label: "User login",
        url: "https://restropos-frontend.vercel.app/login",
      },
    ],
  },
  {
    id: "automation",
    title: "E-commerce test automation",
    category: "Software testing",
    description:
      "Automated signup unit testing and payment integration testing for an e-commerce application, focusing on essential customer journeys.",
    tags: ["Automation", "Unit Testing", "Integration Testing"],
    links: [],
  },
  {
    id: "vr",
    title: "VR pilgrimage experience",
    category: "Final year project",
    description:
      "Led the development and design of an immersive pilgrimage experience with interactive features and guided tours, while managing project timelines and resources.",
    tags: ["Virtual Reality", "Interactive Learning", "Project Leadership"],
    links: [],
  },
];

// Original pinned-scroll showcase. Images public/project-images mein hain.
export const showcaseProjects = [
  {
    id: "01",
    title: "RestroPOS",
    subtitle: "Admin portal",
    description: projects[0].description,
    tags: ["Restaurant POS", "Admin access", "Web application"],
    image: "/project-images/restropos-admin.svg",
    link: projects[0].links[0].url,
    color: "#28665c",
  },
  {
    id: "02",
    title: "RestroPOS",
    subtitle: "User portal",
    description:
      "The user-facing entry point for my restaurant point-of-sale project. Open the live login page to explore the user side.",
    tags: ["Restaurant POS", "User access", "Web application"],
    image: "/project-images/restropos-user.svg",
    link: projects[0].links[1].url,
    color: "#596b39",
  },
  {
    id: "03",
    title: "E-commerce QA",
    subtitle: "Test automation",
    description: projects[1].description,
    tags: projects[1].tags,
    image: "/project-images/automation.svg",
    link: `/${profile.resume}`,
    color: "#48787d",
  },
  {
    id: "04",
    title: "VR Pilgrimage",
    subtitle: "Final year project",
    description: projects[2].description,
    tags: projects[2].tags,
    image: "/project-images/vr.svg",
    link: `/${profile.resume}`,
    color: "#8a6939",
  },
];

export const experience = [
  {
    title: "Modern Web & App Development Training",
    company: "Saylani Mass IT Training Program",
    period: "2025 — Present",
    description: [
      "Built responsive, mobile-first web interfaces using HTML5, CSS3, and JavaScript, ensuring smooth cross-device compatibility.",
      "Developed dynamic, component-based user interfaces with React.js, improving code reusability and reducing development time.",
      "Styled and structured layouts using Bootstrap and Tailwind CSS for faster, consistent, and visually clean designs.",
      "Completed end-to-end frontend development, from UI structuring to fully responsive styling, across multiple real-world project modules.",
      "Integrated Supabase for authentication, real-time data handling, and backend services.",
      "Worked with MongoDB for database design, schema structuring, and data storage/management.",
      "Designed and implemented RESTful APIs, including GET, POST, PUT, and DELETE endpoints, to support full CRUD operations.",
    ],
  },
  {
    title: "Mid-Level SQA Engineer",
    company: "7CTech",
    period: "6 months",
    description: [
      "Worked on company product-based web and mobile applications.",
      "Performed manual testing of web and mobile applications (frontend, backend, Android/iOS) to find bugs and ensure proper functionality.",
      "Performed API and basic database testing with different scenarios and validations.",
      "Created and executed test cases and reported bugs.",
    ],
  },
  {
    title: "Jr. SQA Engineer",
    company: "Stallyons Technology",
    period: "1 year 6 months",
    description: [
      "Conducted manual testing for website and mobile applications.",
      "Tested website frontend and its functionality.",
      "Performed API testing to some extent.",
      "Created test cases for website functionality.",
      "Tested mobile apps for both frontend and functionality.",
    ],
  },
];

export const internships = [
  {
    title: "Web & WordPress Development",
    company: "Grow With Code",
    description: [
      "Worked on basic WordPress website setup using the Astra theme, learning to customize layouts and improve design aesthetics.",
      "Built a to-do list web app using HTML, CSS, and JavaScript.",
      "Developed a basic calculator app.",
      "Designed a simple landing page showcasing layout and styling skills.",
      "Created a portfolio using HTML, CSS, and basic JS.",
      "Developed a calculator for basic math operations with HTML, CSS, and JS.",
    ],
  },
  {
    title: "Python Development",
    company: "TechnoHacksEduTech",
    description: [
      "Developed a calculator for basic arithmetic operations.",
      "Designed a Tic Tac Toe game for two players.",
      "Built a temperature converter between Fahrenheit and Celsius.",
      "Developed a music player with playlist management.",
    ],
  },
  {
    title: "Java Programming",
    company: "CodSoft",
    description: [
      "Created a number guessing game with user interaction and feedback.",
      "Designed a student grade calculator for automated grading.",
      "Developed an ATM interface with deposit, withdrawal, and balance check.",
      "Built a course registration system for student enrollments.",
      "Implemented a quiz app with a timer and score tracking.",
    ],
  },
];

export const education = [
  {
    degree: "BS Software Engineering",
    school: "Sir Syed University of Engineering and Technology",
    period: "2020 — 2024",
  },
  {
    degree: "Intermediate · Pre-Engineering",
    school: "PECHS College, Karachi",
    period: "2018 — 2020",
  },
  {
    degree: "Secondary Education",
    school: "Al-Badar School, Karachi",
    period: "2013 — 2018",
  },
];
