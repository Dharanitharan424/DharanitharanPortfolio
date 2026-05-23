import { useEffect } from "react";
import ContactForm from "./ContactForm";
import ThemeToggle from "./ThemeToggle";
import "./theme-global.css";

const projects = [
  {
    title: "Design System Conversion",
    stack: "React.js, Next.js, Material UI, Redux Toolkit",
    challenge:
      "Converted Figma designs into reusable UI components and established a consistent design system for production applications.",
    outcome:
      "Reduced implementation time across screens and improved UI consistency for cross-device experiences.",
  },
  {
    title: "Performance-Optimized Dashboard",
    stack: "React.js, Redux Toolkit, Tailwind CSS, GraphQL, REST",
    challenge:
      "Built a responsive dashboard with optimized data fetching and predictable state management.",
    outcome:
      "Delivered a fast, scalable interface with strong user experience and maintainable architecture.",
  },
  {
    title: "Testing-First Feature Delivery",
    stack:
      "React.js, Next.js, TypeScript, Jest, React Testing Library, Cypress",
    challenge:
      "Shipped new customer-facing features with reliable test coverage and stable deployments.",
    outcome:
      "Increased release confidence and reduced regressions through automated unit and E2E testing.",
  },
];

const skills = [
  "React.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "HTML5 / CSS3 / Sass",
  "JavaScript (ES6+) / TypeScript",
  "Next.js",
  "Material UI",
  "GraphQL / REST APIs",
  "Unit testing with Jest & React Testing Library",
  "E2E testing with Cypress",
  "Figma-to-code workflows",
  "Responsive & cross-browser design",
];

const experience = [
  {
    company: "Tata Consultancy Services",
    role: "IT Analyst",
    period: "November 2022 – Current",
    location: "Chennai, India",
    bullets: [
      "Developed responsive, user-friendly UI using React.js, Next.js, HTML5, CSS3, and SASS.",
      "Converted Figma designs into reusable components with Material UI, maintaining design consistency.",
      "Managed scalable state using Redux Toolkit for predictable and efficient data flow.",
      "Integrated and optimized GraphQL & REST APIs for faster, reliable data handling.",
      "Ensured type safety with TypeScript to reduce runtime issues and improve maintainability.",
      "Implemented performance optimizations such as memoization and lazy loading.",
      "Wrote unit tests with Jest and React Testing Library, and performed E2E testing with Cypress.",
      "Collaborated in Agile workflows using JIRA and Git, while conducting code reviews to enforce best practices.",
    ],
  },
  {
    company: "Tech Mahindra",
    role: "Associate Software Engineer",
    period: "August 2021 – September 2022",
    location: "Chennai, India",
    bullets: [
      "Developed high-performance web UI using React.js, Next.js, HTML5, CSS3, and JavaScript (ES6).",
      "Built responsive and cross-browser compatible applications using SASS, Flexbox, and modern CSS patterns.",
      "Managed application state efficiently with Redux Toolkit actions, reducers, and selectors.",
      "Converted UI/UX designs into reusable Material UI components for production deliverables.",
      "Integrated REST and GraphQL APIs to enable dynamic application data workflows.",
      "Used TypeScript to improve code quality, maintainability, and reduce runtime errors.",
      "Implemented unit testing with Jest and React Testing Library, plus Cypress E2E tests.",
      "Worked in Agile teams using JIRA and Git while collaborating with product and QA stakeholders.",
    ],
  },
];

const contact = {
  linkedin: "https://linkedin.com/in/dharanitharan-velusamy",
  github: "https://github.com/your-username",
  email: "dharanitharan2080@gmail.com",
};

function SectionHeading({ number, title }) {
  return (
    <div className="mb-6">
      <p className="text-brand-300 font-semibold tracking-[0.2em] text-sm uppercase">
        0{number} — {title}
      </p>
      <div className="mt-3 h-1 w-24 rounded-full bg-brand-600" />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    document.querySelectorAll(".fade-up").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ThemeToggle />
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <header className="fade-up mb-12 overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-10 shadow-[0_35px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500">
          <div className="flex flex-col gap-8 text-center text-slate-200 sm:text-left">
            <div className="mx-auto max-w-3xl">
              <p className="text-brand-300 font-medium uppercase tracking-[0.25em] text-sm">
                Front-End Developer
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
                Dharanitharan
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Front-End Developer with 4.8 years of experience building
                responsive, scalable web applications with React.js, Next.js,
                Redux Toolkit, Tailwind CSS, and Material UI. Skilled at
                converting Figma designs into reusable UI components,
                integrating GraphQL and REST APIs, and strengthening quality
                through Jest, React Testing Library, and Cypress.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_rgba(56,189,248,0.22)] transition duration-300 hover:-translate-y-1 hover:from-sky-300 hover:to-sky-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-700/70 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-20">
          <section id="projects" className="fade-up">
            <SectionHeading number="1" title="Projects" />
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:bg-slate-900/95"
                >
                  <div className="relative z-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-sm uppercase tracking-[0.22em] text-sky-300">
                      {project.stack}
                    </p>
                    <div className="mt-5 space-y-4 text-slate-300">
                      <p className="text-sm leading-7">
                        <span className="font-semibold text-slate-100">
                          Challenge:
                        </span>{" "}
                        {project.challenge}
                      </p>
                      <p className="text-sm leading-7">
                        <span className="font-semibold text-slate-100">
                          Outcome:
                        </span>{" "}
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-6 bottom-6 z-20 rounded-[1.5rem] border border-slate-700/70 bg-slate-950/95 p-5 text-slate-100 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="space-y-3 break-words">
                      <p className="text-base font-semibold leading-6">
                        {project.title}
                      </p>
                      <p className="text-sm leading-6 text-slate-300 whitespace-normal">
                        <span className="font-semibold text-slate-100">
                          Challenge:
                        </span>{" "}
                        {project.challenge}
                      </p>
                      <p className="text-sm leading-6 text-slate-300 whitespace-normal">
                        <span className="font-semibold text-slate-100">
                          Outcome:
                        </span>{" "}
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="fade-up">
            <SectionHeading number="2" title="Skills" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700/50 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-1 hover:bg-sky-400/10 hover:border-sky-400/40"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <section id="experience" className="fade-up">
            <SectionHeading number="3" title="Experience" />
            <div className="grid gap-6">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
                >
                  <h3 className="text-xl font-semibold text-slate-100">
                    {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-sky-300">
                    {item.role} · {item.period} · {item.location}
                  </p>
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="fade-up">
            <SectionHeading number="4" title="Contact" />
            <ContactForm />
          </section>
        </main>
      </div>
    </div>
  );
}
