import {
  FaReact, FaNodeJs, FaGithub, FaDocker,
  FaAws, FaCode, FaServer, FaMobileAlt, FaRobot, FaBrain
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs,
  SiMongodb, SiPostgresql, SiExpress, SiNestjs, SiGraphql,
  SiPrisma, SiVercel, SiFirebase
} from 'react-icons/si';

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/rashik07",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rashik-saif/",
    icon: FaCode,
  },
];

export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'GraphQL', icon: SiGraphql },
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'GitHub', icon: FaGithub },
    ]
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'OpenAI API', icon: FaBrain },
      { name: 'AI Agents', icon: FaRobot },
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: 'AI Workflow Automator',
    shortDescription:
      'An AI-powered automation tool that streamlines business processes using OpenAI and LangChain.',
    fullDescription:
      'AI Workflow Automator helps businesses automate repetitive tasks using AI agents and workflow orchestration. Users can create custom workflows, connect external APIs, and leverage OpenAI models to process data automatically.',

    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',

    tags: ['AI', 'React', 'Node.js', 'OpenAI'],

    category: 'AI Projects',

    features: [
      'AI-powered workflow automation',
      'OpenAI integration',
      'Custom workflow builder',
      'Role-based authentication',
      'Real-time monitoring dashboard',
    ],

    challenges: [
      'Managing long-running AI tasks',
      'Optimizing API response times',
      'Handling workflow failures gracefully',
    ],

    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      deployment: ['Vercel', 'Render'],
    },

    liveUrl: '#',
    githubUrl: '#',
  },

  {
    id: 2,
    title: 'FinTech Dashboard',

    shortDescription:
      'A comprehensive financial dashboard with real-time data visualization and secure transaction handling.',

    fullDescription:
      'A modern fintech platform providing real-time financial insights, transaction analytics, portfolio management, and reporting tools for businesses and investors.',

    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',

    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],

    category: 'Full Stack',

    features: [
      'Interactive analytics dashboard',
      'Real-time financial data',
      'Advanced reporting system',
      'Secure user authentication',
      'Responsive design',
    ],

    challenges: [
      'Handling large financial datasets',
      'Ensuring transaction security',
      'Optimizing dashboard performance',
    ],

    techStack: {
      frontend: ['Next.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['PostgreSQL', 'Prisma'],
      deployment: ['Vercel'],
    },

    liveUrl: '#',
    githubUrl: '#',
  },

  {
    id: 3,
    title: 'E-Commerce Platform API',

    shortDescription:
      'A scalable RESTful API built with NestJS and PostgreSQL for a high-traffic e-commerce platform.',

    fullDescription:
      'Enterprise-grade backend system supporting product management, orders, payments, inventory tracking, authentication, and admin operations.',

    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',

    tags: ['NestJS', 'PostgreSQL', 'Docker'],

    category: 'Backend',

    features: [
      'JWT Authentication',
      'Product management',
      'Order processing',
      'Inventory tracking',
      'Role-based authorization',
    ],

    challenges: [
      'Scaling database queries',
      'Handling concurrent orders',
      'Securing payment workflows',
    ],

    techStack: {
      backend: ['NestJS', 'TypeScript'],
      database: ['PostgreSQL'],
      deployment: ['Docker', 'AWS'],
    },

    liveUrl: '#',
    githubUrl: '#',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "NorthByte Solution",
    position: "Full Stack Software Engineer",
    duration: "2024 - Present",
    description: [
      "Lead development of modern, scalable front-end applications using React, Next.js, Redux Toolkit, Tailwind CSS, and Ant Design. Build reusable UI components and optimize performance for better user experience and maintainability.",
      "Collaborate on back-end features using Node.js, Express.js, and Mongoose, ensuring smooth API integration with front-end systems.",
      "Work closely with project managers, designers, developers, and clients to analyze requirements and resolve technical issues efficiently."
    ],
      technologies: [
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
    ],
  },
  {
    id: 2,
    company: "The ICT Hub",
    position: "Software Engineer",
    duration: "2019 - 2024",
    description:
    [
      "Developed and maintained user-centric web applications with React, Next.js, Redux and Tailwind CSS focusing on clean UI and responsive design.",
      "Implemented and maintained back-end services using Node.js, Express.js, Mongoose to support front-end features.",
      "Worked closely with cross-functional teams and clients to debug issues, enhance features, and deliver reliable software solutions.",
      "Gradually transitioned into a front-end-heavy role while maintaining full-stack responsibilities.",

    ],
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "NestJS",
      "PostgreSQL",
    ],
  },
  {
    //     INDEPENDENT UNIVERSITY BANGLADESH / Teacher Assistant
    // April 2016 - April 2018,  Dhaka
    // Supported instructor with test administration, curriculum development and assignment grading for the course. 
    id: 3,
    company: "Independent University Bangladesh",
    position: "Teacher Assistant",
    duration: "2016 - 2018",
    description:
      ["Supported instructor with test administration, curriculum development and assignment grading for the course."],
    technologies: [
      "IUB",

    ],
  }
];

export const SERVICES = [
  {
    title: "Custom Software Development",
    description:
      "Building scalable software solutions tailored to business requirements.",
    icon: FaCode,
  },
  {
    title: "Web Application Development",
    description:
      "Modern React, Next.js, and MERN stack applications with responsive UI.",
    icon: FaReact,
  },
  {
    title: "Backend & API Development",
    description:
      "Secure and scalable REST APIs using Node.js, Express, NestJS, and PostgreSQL.",
    icon: FaServer,
  },
  {
    title: "AI Automation Solutions",
    description:
      "AI-powered automation systems using OpenAI and modern AI technologies.",
    icon: FaRobot,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO at TechStart',
    content: 'An exceptional engineer who delivered our MVP ahead of schedule with flawless code quality.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO at DataFlow',
    content: 'The AI integration work they did completely transformed our customer service workflow. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    content: 'Incredibly professional and communicative. The frontend architecture they set up is highly maintainable.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Building Scalable AI Agents with React and Node.js',
    category: 'AI & Web Dev',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    date: 'Oct 12, 2023',
  },
  {
    id: 2,
    title: 'Advanced Pattern in React Server Components',
    category: 'Frontend',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    date: 'Sep 28, 2023',
  },
  {
    id: 3,
    title: 'Optimizing PostgreSQL for High-Traffic Applications',
    category: 'Backend',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
    date: 'Sep 15, 2023',
  }
];
