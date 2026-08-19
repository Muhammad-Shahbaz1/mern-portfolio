import { FaReact, FaNodeJs, FaServer, FaDatabase, FaCode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiGit, SiGithub, SiPostman } from 'react-icons/si';

export const personalInfo = {
  name: "Muhammad Shahbaz",
  role: "MERN Stack Developer",
  tagline: "I build modern, scalable and user-focused web applications using MongoDB, Express.js, React and Node.js.",
  about: "I am a passionate MERN Stack Developer focused on building modern, responsive, and performant web applications. With expertise in both frontend and backend development, I create seamless user experiences and robust REST APIs. My goal is to write clean, maintainable code that solves real-world problems.",
  email: "shahbazcodes65@gmail.com",
  whatsapp: "https://wa.me/923417570902",
  linkedin: "https://www.linkedin.com/in/muhammad-shahbaz-a74ba5249?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/Muhammad-Shahbaz1"
};

export const techStack = {
  frontend: [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" }
  ],
  database: [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" }
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-white" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" }
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "API Integration"]
  },
  {
    category: "Database",
    items: ["MongoDB", "Database Design", "CRUD Operations"]
  },
  {
    category: "Development",
    items: ["Git", "GitHub", "Debugging", "Problem Solving", "Clean Code"]
  }
];

export const services = [
  {
    title: "Full Stack Web Development",
    description: "Build complete web applications using the MERN stack with scalable architecture.",
    icon: FaCode
  },
  {
    title: "Frontend Development",
    description: "Build responsive, fast, and modern React user interfaces.",
    icon: FaReact
  },
  {
    title: "Backend Development",
    description: "Create secure REST APIs and backend systems using Node.js and Express.",
    icon: FaServer
  },
  {
    title: "Database Development",
    description: "Design and integrate efficient MongoDB databases for your applications.",
    icon: FaDatabase
  }
];

export const projects = [
  {
    id: 1,
    title: "Lexora — AI Legal Document Companion",
    shortDescription: "AI-powered legal assistant that analyzes contracts, detects hidden risks & unfair clauses, and explains them in Roman Urdu & English.",
    overview: "Lexora is an intelligent legal tech companion engineered to democratize legal comprehension. Powered by Google Gemini Multimodal Vision, it audits complex legal agreements (such as Rent Agreements, Employment Contracts, NDAs, and Vendor terms) uploaded as PDFs or images, providing line-by-line bilingual breakdowns, automated risk radar ratings, and actionable negotiation strategies before signing.",
    problem: "Legal contracts are deliberately written in dense, obscure legalese. Everyday individuals and freelancers frequently sign agreements containing predatory clauses, non-refundable deposits, and unfair penalties without understanding the hidden risks.",
    solution: "Developed a full-stack Next.js 14 and Express/Node.js application powered by Google Gemini Multimodal AI. Features a split-screen audit viewer with side-by-side original contract preview, real-time risk radar (High/Medium/Low flags), simplified bilingual translations in Roman Urdu & English, and smart negotiation talking points.",
    features: [
      "Multimodal Contract Upload (PDFs & Images up to 10MB)",
      "Bilingual Explanation Toggle (English & Roman Urdu)",
      "Risk Radar & Red Flag Detection (High, Med, Low ratings)",
      "Split-Screen Interactive Audit Viewer",
      "Key Clause Breakdown & Simplified Explanations",
      "Smart Negotiation Assistant (3–5 customized talking points)",
      "Personal Contract Vault & Risk Status Timeline",
      "Secure JWT Auth & 6-Digit Password Reset System"
    ],
    technologies: ["Next.js 14", "React", "Node.js", "Express.js", "MongoDB Atlas", "Gemini AI", "Tailwind CSS", "Framer Motion", "Cloudinary", "JWT"],
    image: "/lexora-preview.jpg",
    githubUrl: "https://github.com/Muhammad-Shahbaz1/Lexora",
    liveUrl: "https://lexora-app-wheat.vercel.app"
  },
  {
    id: 2,
    title: "HealthMate – Sehat ka Smart Dost",
    shortDescription: "AI-powered bilingual medical vault & health assistant that analyzes complex medical reports & prescriptions in Roman Urdu & English.",
    overview: "HealthMate is a smart AI health platform engineered to bridge the gap between complex medical diagnostics and patient understanding. Powered by Google Gemini Multimodal Vision intelligence, it extracts and interprets lab reports, prescriptions, and test results (PDFs & Images), delivering crystal-clear explanations in both Roman Urdu and English alongside daily vitals logging and personal medical vault management.",
    problem: "Medical lab reports, diagnostic tests, and handwritten prescriptions are packed with complex clinical terms and abnormal values that patients struggle to interpret, often leading to unasked critical questions during doctor visits and poorly organized medical records.",
    solution: "Built a full-stack Next.js 14 and Express/Node.js application powered by Google Gemini Flash Multimodal AI. It instantly parses uploaded medical documents (PDF/Images), highlights abnormal values & medication dosages with visual flags, generates 3 tailored questions for doctors, recommends customized diet & home remedies, and maintains a secure, JWT-authenticated bilingual health timeline.",
    features: [
      "Multimodal Medical Report Analysis (PDFs & Images)",
      "Bilingual Output (Dual Language: Roman Urdu & English)",
      "Abnormal Values & Dosage Detection with Visual Flags",
      "Doctor Consultation Questions Generator (3 Custom Questions)",
      "Personalized Diet & Home Remedies Guide",
      "Daily Vitals Tracker (BP, Sugar, Heart Rate) & History Timeline",
      "Smooth Dark / Light Mode Theme Toggle",
      "Secure JWT Authentication & Cloudinary Document Vault"
    ],
    technologies: ["Next.js 14", "React", "Node.js", "Express.js", "MongoDB Atlas", "Gemini AI", "Tailwind CSS", "Cloudinary", "JWT"],
    image: "/healthmate-preview.jpg",
    githubUrl: "https://github.com/Muhammad-Shahbaz1/Healthmate",
    liveUrl: "https://frontend-nine-bice-20.vercel.app"
  },
  {
    id: 3,
    title: "PitchCraft AI",
    shortDescription: "AI-powered pitch deck builder that generates 10-slide venture-grade investor decks in minutes.",
    overview: "PitchCraft AI is an intelligent full-stack presentation builder engineered for startup founders and creators. It transforms raw business concepts into structured, 10-slide venture-grade investor decks with automated market sizing (TAM/SAM/SOM), growth analytics, speaker notes, and real-time PowerPoint (.pptx) & PDF exports.",
    problem: "Founders spend weeks manually crafting pitch decks, often lacking structured market analysis and professional investor-grade formatting, which delays fundraising efforts.",
    solution: "Built a Next.js 14 application powered by Google Gemini AI that generates a complete 10-slide pitch deck from a business idea in seconds, with automated TAM/SAM/SOM calculations, financial projections, interactive editing, and one-click .pptx & PDF export.",
    features: [
      "1-Click AI Deck Generator (10 slides)",
      "Interactive Slide Studio & Live Editing",
      "Dynamic Charts & Market Visualizers (TAM/SAM/SOM)",
      "Dual-Screen Presenter Mode & VC Q&A Simulator",
      "Instant .PPTX & .PDF Export",
      "Dark/Light Theme with Local Storage"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Gemini AI", "PptxGenJS", "jsPDF"],
    image: "/pitchcraft-preview.jpg",
    githubUrl: "https://github.com/Muhammad-Shahbaz1/pitch-craft",
    liveUrl: "https://pitch-craft-brown.vercel.app"
  }
];

export const experience = [
  {
    id: 1,
    position: "Junior Full Stack Developer",
    company: "Fintech Approach",
    duration: "Jan 2024 - Present",
    description: "Developed and maintained web applications using the MERN stack. Collaborated with the design team to implement responsive user interfaces.",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"]
  },
  {
    id: 2,
    position: "Web Development Intern",
    company: "SFX Mentor Agency",
    duration: "Jun 2023 - Dec 2023",
    description: "Assisted in building REST APIs and creating frontend components for internal tools.",
    technologies: ["JavaScript", "React", "Express"]
  }
];

export const education = [
  {
    id: 1,
    degree: "BS Information Technology",
    institution: "Virtual University of Pakistan",
    duration: "2024 - 2029",
    skills: ["Software Engineering", "Web Development", "Database Systems", "Programming Fundamentals"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ameenullah",
    role: "CEO",
    company: "Universal Engineering Services",
    text: "Muhammad Shahbaz is an exceptional developer. He built a robust, scalable backend and a seamless user experience that greatly improved our operations. His attention to clean code is top-notch."
  },
  {
    id: 2,
    name: "Asadullah",
    role: "Project Manager",
    company: "Tech Startup",
    text: "Working with Shahbaz was a great experience. He brought our startup idea to life with a modern, high-performance UI and clean integration. Highly recommended for full-stack projects."
  }
];
