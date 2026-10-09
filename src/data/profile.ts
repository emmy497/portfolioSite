export const PROFILE = {
  name: 'Emmanuel Israel',
  role: 'Software Engineer',
  email: 'emmanuelisrael497@gmail.com',
  github: 'https://github.com/emmy497',
  linkedin: 'https://www.linkedin.com/in/israel-emmanuel-3884bb241',
  resume: '/Emmanuel-Israel-CV.pdf',
  education: {
    degree: 'B.Sc. Computer Science',
    school: 'University of Lagos',
  },
  summary:
    'Results-driven Software Engineer with hands-on experience developing responsive, user-focused web applications using React, TypeScript, Node.js, and Python. Skilled in building scalable front-end architectures and implementing RESTful APIs. Passionate about leveraging modern frameworks to create intuitive user interfaces and data-driven platforms that enhance user engagement and performance. Alongside shipping products, I teach and mentor developers, running code reviews, live workshops, and portfolio sessions that help people land their first tech roles.',
}

export const SKILLS = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Django', 'Flask', 'Python'],
  tools: ['Git', 'GitHub', 'REST APIs', 'MySQL', 'Agile', 'Responsive Design'],
}

export type Project = {
  title: string
  description: string
  stack: string[]
  url?: string
  frame: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Estatery',
    description:
      'Property rental platform with dynamic search, filtering, and listing management, built with modular, responsive components (95% mobile accessibility score).',
    stack: ['React', 'TypeScript', 'Tailwind'],
    url: 'https://esstatery-front.vercel.app/',
    frame: '/images/RectangleBlue.png',
  },
  {
    title: 'Samiway Learning',
    description:
      'Online learning platform for 500+ students with interactive modules, quizzes, progress tracking, and role-based dashboards for students, instructors, and admins.',
    stack: ['React', 'Flask', 'Tailwind'],
    url: 'https://samiway.com/',
    frame: '/images/RectRed.png',
  },
  {
    title: 'ICSL Self-Service Portal',
    description:
      'Front-end redesign of a customer self-service portal with real-time billing and usage analytics dashboards, improving mobile responsiveness and satisfaction by 45%.',
    stack: ['React', 'Chart.js', 'JavaScript'],
    frame: '/images/RectYellow.png',
  },
  {
    title: 'Portfolio Site',
    description:
      'A responsive personal portfolio showcasing my projects, skills, and experience, deployed on Vercel.',
    stack: ['React', 'Vercel'],
    url: 'https://portfolio-site-nine-nu-93.vercel.app/',
    frame: '/images/RectGreen.png',
  },
]

export type Job = {
  company: string
  role: string
  period: string
  points: string[]
}

export const EXPERIENCE: Job[] = [
  {
    company: 'TechStudio Academy',
    role: 'Full-Stack Developer',
    period: 'Nov 2025 — Present',
    points: [
      'Teach full-stack web development (HTML, CSS, JavaScript, React, Node.js, Git) to cohorts of 20–40 students.',
      'Deliver structured lessons, coding exercises, and real-world projects that improved student comprehension by 70%.',
      'Run weekly code reviews and debugging sessions, and mentor students on portfolios, project architecture, and interview readiness.',
    ],
  },
  {
    company: 'Samiway Educational Consult',
    role: 'Software Engineer',
    period: 'Aug 2024 — Sep 2025',
    points: [
      'Developed and maintained a responsive learning platform used by 500+ students with React, Tailwind CSS, and TypeScript.',
      'Built 12+ reusable UI components (course cards, quizzes, progress bars, video players), cutting development time by 30%.',
      'Implemented role-based dashboards that improved navigation and engagement by 40%, and optimised API data flow to speed up page loads by 25%.',
    ],
  },
  {
    company: 'Lagos Internal Revenue Service (LIRS)',
    role: 'IT Support Technician',
    period: 'Sep 2023 — Oct 2024',
    points: [
      'Supported 150+ staff systems, keeping 99% uptime across the department’s network and infrastructure.',
      'Diagnosed hardware, software, and network issues, improving workflow efficiency by 35%.',
      'Assisted with system upgrades, data backup and recovery, and proactive network security monitoring.',
    ],
  },
  {
    company: 'ICSL (Information Connectivity Solutions Limited)',
    role: 'Software Engineer Intern',
    period: 'Jun 2022 — Aug 2023',
    points: [
      'Led the front-end redesign of the customer self-service portal, raising mobile responsiveness and satisfaction by 45%.',
      'Built interactive real-time billing and usage dashboards with React and Chart.js.',
      'Introduced a modular front-end architecture that cut bug frequency by 20%, and mentored 5+ junior developers.',
    ],
  },
  {
    company: 'Genius Camp',
    role: 'Web Development Mentor',
    period: 'Nov 2021 — Dec 2022',
    points: [
      'Mentored 15+ junior developers on HTML, CSS, JavaScript, React, and Git.',
      'Designed and delivered 5 custom learning modules, boosting mentee project completion by 60%.',
    ],
  },
]

export const CERTIFICATES = [
  'Web Development Certification — CK Digital',
  'React Certification — Maximilian Schwarzmüller (Udemy)',
  'Complete Node.js Developer Course — Maximilian Schwarzmüller (Udemy)',
  'Backend Development Bootcamp — NITHUB',
]

export const VOLUNTEERING = [
  'Google Developer Student Club — Member',
  'Nithub Community — Volunteer',
]
