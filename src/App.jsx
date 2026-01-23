import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { GoStar } from "react-icons/go";
import resume from "./assets/CHANDRA_VAMSI_RESUME.pdf";

const EXPERIENCES = [
  {
    date: "Feb 2025 — Present",
    title: "Software Developer",
    company: "Quantum Works Private Limited",
    description:
      "Contributing to the development of production web applications across company and client projects. Focused on backend development with Java and Spring Boot, building reliable APIs and working with relational and NoSQL databases. Collaborate closely with frontend engineers and cross-functional teams to deliver clean, maintainable features.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "MongoDB",
      "Firebase",
      "React",
      "Tailwind CSS",
      "Git",
      "Maven",
      "Postman",
    ],
  },
];

const PROJECTS = [
  {
    title: "E-commerce Platform (Retail Products Website)",
    description:
      "A full-stack e-commerce web application built to support product browsing, secure checkout, and order management. The platform includes both customer-facing flows and an admin interface for managing orders and inventory. The application focuses on clean user experience, secure authentication, and reliable payment processing, with attention to responsive design and maintainable backend architecture.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Firebase",
      "Razorpay",
    ],
  },
  {
    title: "Medical Survey Web Application",
    description:
      "A backend-focused web application built to manage medical survey data, including patient registration, survey submission, and structured data retrieval. The system emphasizes data integrity, validation, and clean API design. Designed to support flexible data models and smooth frontend integration, this project highlights backend reliability and clear separation of concerns.",
    technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Postman"],
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "A backend-driven Learning Management System built to support Admin, Instructor, and Student roles. The platform enables course creation, student enrollment, and controlled access to learning content through well-structured backend APIs. The system places strong emphasis on security and reliability, implementing JWT-based role management, OAuth2 login, and email OTP–based authentication, along with a normalized relational data model to ensure scalability and maintainability.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "JPA",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "Postman",
    ],
  },
];

export default function App() {
  const [activeSection, setActiveSection] = React.useState("about");

  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.pageX, y: ev.pageY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0f172a] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      {/* Spotlight effect overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-4 font-sans md:px-12 md:py-16 lg:px-12 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-24">
          {/* Left Column: Header / Nav */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-28">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Chandra Vamsi Malluru</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Java Full Stack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Building reliable backend systems and intuitive web experiences
                with Java and React.
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-8 w-max">
                  <li>
                    <a
                      className={`group flex items-center py-3 ${activeSection === "about" ? "active" : ""}`}
                      href="#about"
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "about" ? "!w-16 !bg-slate-200" : ""}`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "about" ? "!text-slate-200" : ""}`}
                      >
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-3 ${activeSection === "experience" ? "active" : ""}`}
                      href="#experience"
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "experience" ? "!w-16 !bg-slate-200" : ""}`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "experience" ? "!text-slate-200" : ""}`}
                      >
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className={`group flex items-center py-3 ${activeSection === "projects" ? "active" : ""}`}
                      href="#projects"
                    >
                      <span
                        className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === "projects" ? "!w-16 !bg-slate-200" : ""}`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === "projects" ? "!text-slate-200" : ""}`}
                      >
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.linkedin.com/in/chandravamsim/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="mailto:chandravamsi.malluru@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Email</span>
                  <FaEnvelope className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://github.com/chandravamsi-m"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="h-6 w-6" />
                </a>
              </li>
              {/* <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://www.instagram.com/vam_si_26"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li> */}
            </ul>
          </header>

          {/* Right Column: Content */}
          <main id="content" className="pt-12 lg:w-1/2 lg:pb-24 lg:pt-0">
            <section
              id="about"
              className="mb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:min-h-screen lg:pb-24 lg:pt-[7.5rem]"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4 leading-loose">
                  I’m a Java Full Stack Developer who enjoys building reliable,
                  well-structured web applications, with a strong backend
                  foundation. I like working across the stack—designing clear
                  APIs, implementing business logic, and crafting interfaces
                  that feel intuitive and purposeful.{" "}
                </p>
                <p className="mb-4 leading-loose">
                  I’m comfortable working in environments where requirements
                  evolve and problems aren’t always clearly defined. I enjoy
                  breaking down complex ideas, asking the right questions, and
                  turning them into simple, dependable solutions.{" "}
                </p>
                <p className="mb-4 leading-loose">
                  I care deeply about clean architecture, thoughtful
                  problem-solving, and writing code that’s easy to understand
                  and evolve over time. I’m always learning, refining my
                  approach, and looking for better ways to build software that
                  scales gracefully.{" "}
                </p>
              </div>
            </section>

            <section
              id="experience"
              className="mb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:pt-[1.5rem]"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <ol className="group/list">
                {EXPERIENCES.map((exp, index) => (
                  <li key={index} className="mb-12 md:mb-20">
                    <div className="group relative grid pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10">
                        <header
                          className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500"
                          aria-label={exp.date}
                        >
                          {exp.date}
                        </header>
                        <h3 className="mb-3 font-medium leading-snug text-slate-200">
                          <div className="text-lg font-bold leading-tight text-slate-200">
                            {exp.title} - <span className="text-teal-300">{exp.company}</span>
                          </div>
                        </h3>
                        <p className="text-sm leading-loose text-slate-400">
                          {exp.description}
                        </p>
                        {exp.links && (
                          <ul
                            className="mt-2 flex flex-wrap"
                            aria-label="Related links"
                          >
                            {exp.links.map((link, i) => (
                              <li key={i} className="mr-4">
                                <a
                                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="mr-1 h-3 w-3"
                                    aria-hidden="true"
                                  >
                                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.14-3.667l3-3z" />
                                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.14 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                                  </svg>
                                  <span>{link.label}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {exp.technologies.map((tech, i) => (
                            <li key={i} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <a
                  className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                  aria-label="View Full Resume"
                  href={resume} target="_blank"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      View Full Resume
                    </span>
                    <span className="whitespace-nowrap">
                      <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </div>
            </section>

            <section
              id="projects"
              className="mb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:pt-[1.5rem]"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <ul className="group/list">
                {PROJECTS.map((project, index) => (
                  <li key={index} className="mb-10 md:mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10">
                        <h3>
                          <div className="text-base font-medium leading-tight text-slate-200">
                            {project.title}
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {project.description}
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {project.technologies.map((tech, i) => (
                            <li key={i} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              {/* <div className="mt-12">
                <a
                  className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                  aria-label="View Full Project Archive"
                  href="/archive"
                >
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                      View Full Project Archive
                    </span>
                    <span className="whitespace-nowrap">
                      <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </div> */}
            </section>

            <footer className="max-w-md pb-8 text-sm text-slate-500 sm:pb-0">
              <p>
                Built with curiosity, coffee, and a lot of console.logs,
                embracing the process of learning, breaking, and improving.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
