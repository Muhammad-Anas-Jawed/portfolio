export type Project = {
  title: string
  desc: string
  tags: string[]
  category: 'Full Stack' | 'QA Automation' | 'VR' | 'Frontend' | 'Programming'
  highlights: string[]
  focus: string
}

export const PROFILE = {
  name: 'Muhammad Anas Jawed',
  email: 'anasjawed.1999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anas-jawed-a0559a285',
  github: 'https://github.com/Muhammad-Anas-Jawed?tab=repositories',
  githubProfile: 'https://github.com/Muhammad-Anas-Jawed',
  roles: [
    'Full Stack Developer',
    'Frontend Developer — HTML , CSS , JavaScript , React , TypeScript , Tailwind CSS ,  Bootstrap , Responsive Design & API Integration',
    'Backend Developer — Supabase , Express.j s, Node.js , REST APIs , MongoDB & SQL',
    'SQA Engineer — Manual & Automation',
  ],
}

export const SKILLS: { title: string; description: string; items: string[] }[] = [
  {
    title: 'Frontend Engineering',
    description: 'Accessible, responsive interfaces with component-driven architecture.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend & Data',
    description: 'API-first development, authentication, CRUD workflows and data modelling.',
    items: ['Node.js', 'Express', 'REST APIs', 'Supabase', 'MongoDB', 'SQL', 'MySQL'],
  },
  {
    title: 'Quality Engineering',
    description: 'Developer + tester mindset across functional, API and automation workflows.',
    items: ['Manual Testing', 'Automation Testing', 'API Testing', 'Test Cases', 'Bug Reporting', 'Database Validation'],
  },
  {
    title: 'Engineering Workflow',
    description: 'Practical tooling for shipping, debugging and maintaining software.',
    items: ['Git', 'GitHub', 'VS Code', 'Vite', 'Responsive Design', 'CI/CD Concepts'],
  },
  {
    title: 'Programming',
    description: 'Programming fundamentals used across academic and practical projects.',
    items: ['Python', 'Java', 'C# / OOP', 'Data Structures', 'Problem Solving'],
  },
]

export const QA = [
  {
    title: 'Manual Testing',
    icon: '01',
    points: [
      'Web and mobile applications across frontend and backend flows',
      'Test case design, execution, regression and exploratory testing',
      'API testing and database validation for end-to-end confidence',
      'Clear defect reporting with reproducible steps and expected vs actual results',
    ],
  },
  {
    title: 'Automation Testing',
    icon: '02',
    points: [
      'Automated unit tests for an e-commerce signup flow',
      'Automated integration tests for a payments flow',
      'Automation mindset applied to repeatable regression scenarios',
      'Continuously expanding modern automation tooling and practices',
    ],
  },
  {
    title: 'Quality Mindset',
    icon: '03',
    points: [
      'Think about testability while building features, not only after development',
      'Validate API, UI and data behaviour as one connected system',
      'Look for edge cases, failure states and user-impacting defects',
      'Use structured evidence to communicate software quality clearly',
    ],
  },
]

export const EXPERIENCE = [
  {
    role: 'Modern Web & App Development Training',
    org: 'Saylani Mass IT Training Program',
    period: '2025 — Present',
    points: [
      'Built responsive, mobile-first interfaces with HTML, CSS, JavaScript, React, Bootstrap and Tailwind',
      'Integrated Supabase authentication and real-time data and designed MongoDB schemas',
      'Built RESTful CRUD workflows using GET, POST, PUT and DELETE operations',
    ],
  },
  {
    role: 'Mid-Level SQA Engineer',
    org: '7CTech',
    period: '6 months',
    points: [
      'Tested product-based web and mobile applications across Android/iOS, frontend and backend layers',
      'Performed API and database testing and created/executed structured test cases',
      'Reported defects with a focus on reproducibility and functional impact',
    ],
  },
  {
    role: 'Jr. SQA Engineer',
    org: 'Stallyons Technology',
    period: '1 year 6 months',
    points: [
      'Performed manual testing of websites and mobile applications',
      'Created test cases and tested API-driven website functionality',
    ],
  },
  {
    role: 'Remote Internships',
    org: 'Grow With Code · TechnoHacksEduTech · CodSoft',
    points: [
      'Worked on WordPress, HTML/CSS/JS applications, Python tools and games, and Java systems',
      'Built practical projects including an ATM interface, quiz application and course registration system',
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'VR Pilgrimage Experience',
    desc: 'Final Year Project focused on an immersive VR experience with interactive features and guided tours.',
    tags: ['VR', 'Interactive UX', 'Leadership'],
    category: 'VR',
    focus: 'Immersive product experience',
    highlights: ['Final Year Project', 'Interactive experience design', 'Guided-tour workflow', 'Team/project leadership'],
  },
  {
    title: 'E-commerce Test Automation',
    desc: 'Automation work covering signup and payment-flow scenarios with a focus on repeatable quality checks.',
    tags: ['Automation', 'Unit Tests', 'Integration Tests'],
    category: 'QA Automation',
    focus: 'Regression confidence',
    highlights: ['Signup automation', 'Payment integration coverage', 'Repeatable test scenarios', 'QA-focused engineering'],
  },
  {
    title: 'React + Supabase Applications',
    desc: 'Component-based applications using authentication, real-time data and CRUD workflows.',
    tags: ['React', 'TypeScript', 'Supabase', 'CRUD'],
    category: 'Full Stack',
    focus: 'Full-stack application development',
    highlights: ['Authentication', 'Real-time data', 'CRUD operations', 'Component-based UI'],
  },
  {
    title: 'Web Mini Projects',
    desc: 'A collection of practical browser applications built while strengthening frontend fundamentals.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    focus: 'Frontend fundamentals',
    highlights: ['To-do app', 'Calculators', 'Landing page', 'Portfolio UI'],
  },
  {
    title: 'Java & Python Projects',
    desc: 'Small systems and games demonstrating programming fundamentals and problem-solving.',
    tags: ['Java', 'Python', 'OOP'],
    category: 'Programming',
    focus: 'Programming & OOP fundamentals',
    highlights: ['ATM interface', 'Quiz app with timer', 'Course registration', 'Tic Tac Toe / utilities'],
  },
]

export const NAV_ITEMS = ['about', 'skills', 'qa', 'experience', 'projects', 'contact'] as const

export const SKILL_BARS: { title: string; items: { name: string; level: number; note: string }[] }[] = [
  {
    title: 'Development',
    items: [
      { name: 'React + TypeScript', level: 80, note: 'Component-driven UIs, hooks, typed props and state.' },
      { name: 'HTML / CSS / JavaScript', level: 90, note: 'Responsive layouts, animations and clean semantics.' },
      { name: 'Node.js & REST APIs', level: 75, note: 'CRUD workflows, routing and API design.' },
      { name: 'Supabase / MongoDB / SQL', level: 75, note: 'Auth, real-time data, schemas and queries.' },
      { name: 'Git & GitHub', level: 80, note: 'Branching, pull requests and daily workflow.' },
    ],
  },
  {
    title: 'Quality Engineering',
    items: [
      { name: 'Manual Testing', level: 95, note: 'Functional, regression and exploratory testing.' },
      { name: 'API Testing', level: 85, note: 'Status codes, payloads and schema validation.' },
      { name: 'Database Validation', level: 85, note: 'Verifying backend data against UI behaviour.' },
      { name: 'Bug Reporting', level: 95, note: 'Reproducible steps, evidence and clear severity.' },
      { name: 'Test Automation', level: 70, note: 'Repeatable regression scenarios, still growing.' },
    ],
  },
]

export const EXP_TAGS: Record<string, string[]> = {
  'Saylani Mass IT Training Program': ['React', 'Supabase', 'MongoDB', 'REST'],
  '7CTech': ['API Testing', 'Database', 'Android / iOS', 'Test Cases'],
  'Stallyons Technology': ['Manual Testing', 'Test Cases', 'API-driven Web'],
}
