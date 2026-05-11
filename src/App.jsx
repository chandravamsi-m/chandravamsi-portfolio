import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaCode, FaLaptopCode, FaDatabase, FaLightbulb, FaRocket, FaCheckCircle } from "react-icons/fa";
import { FiArrowUpRight, FiUser, FiUsers, FiBriefcase, FiGrid, FiCode, FiDownload } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import resume from "./assets/CHANDRA_VAMSI_RESUME.pdf";
import ClickSpark from "./ClickSpark";
import Typewriter from "./Typewriter";

// Import project images
import hrmsImg from "./assets/hrms.png";
import ecommerceImg from "./assets/ecommerce.png";
import medicalImg from "./assets/medical.png";
import lmsImg from "./assets/lms.png";

const EXPERIENCES = [
  {
    date: "Feb 2025 — Present",
    title: "Software Developer",
    company: "Quantum Works Private Limited",
    description:
      "Working on backend-driven web applications using Java and Spring Boot, focusing on building secure APIs, authentication systems, and workflow-based business logic. Collaborating with cross-functional teams to develop production-ready features, integrate frontend systems, and ensure application reliability and maintainability.",
    responsibilities: [
      "Developing and maintaining REST APIs and backend services using Spring Boot",
      "Implementing authentication and authorization using JWT, OAuth2, and role-based access control",
      "Designing business workflows using DTO architecture, validation, and exception handling",
      "Managing relational and NoSQL databases including MySQL and MongoDB",
      "Debugging, testing, and improving system performance and stability",
    ],
    technologies: [
      "Java", "Spring Boot", "Spring Security", "REST APIs", "MySQL", "MongoDB", "React", "Firebase", "Tailwind CSS", "Git", "Maven", "Postman"
    ],
  },
];

const PROJECTS = [
  {
    title: "Enterprise HRMS & Employee Portal",
    image: hrmsImg,
    description:
      "An enterprise HRMS platform with employee and admin portals supporting attendance tracking, leave management, and workflow-driven operations with role-based access control.",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    link: "#",
  },
  {
    title: "E-commerce Platform",
    image: ecommerceImg,
    description:
      "A full-stack e-commerce application supporting product management, secure checkout, order workflows, and admin dashboards with payment and logistics integrations.",
    technologies: ["React", "Node.js", "Express", "Firebase"],
    link: "#",
  },
  {
    title: "Medical Survey Web Application",
    image: medicalImg,
    description:
      "Backend application for managing patient data and survey workflows with secure APIs, validation handling, and structured MongoDB data storage.",
    technologies: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
    link: "#",
  },
  {
    title: "Learning Management System (LMS)",
    image: lmsImg,
    description:
      "Backend system supporting role-based learning workflows with course management, authentication, and secure access control using Spring Boot.",
    technologies: ["Java", "Spring Boot", "MySQL", "JWT"],
    link: "#",
  },
];

const SKILLS = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "REST APIs",
  "JWT",
  "OAuth2",
  "MySQL",
  "MongoDB",
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Firebase",
  "Git",
  "Maven",
  "Postman",
  "JUnit",
];

export default function App() {
  const [activeSection, setActiveSection] = React.useState("about");
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

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
    let scrollTimeout;
    const handleScrollVisibility = () => {
      document.documentElement.classList.add("is-scrolling");
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove("is-scrolling");
      }, 1000);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
      clearTimeout(scrollTimeout);
    };
  }, []);

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={4}
      sparkRadius={15}
      sparkCount={10}
      duration={400}
    >
      <div className="relative min-h-screen bg-[#0f172a] leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        {/* Spotlight effect overlay */}
        {/* <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
          style={{
            background: `radial-gradient(350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div> */}

        {/* Dotted pattern background */}
        {/* <div
          className="pointer-events-none fixed inset-0 z-20 hidden lg:block"
          style={{
            backgroundPosition: "0 0",
            backgroundSize: "35px 35px",
            backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 2px)",
            maskImage: `radial-gradient(350px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(350px at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 80%)`,
          }}
        ></div> */}

        <div className="relative">
          {/* Left Column: Header / Nav - Now independent of the centered container */}
          <header className="lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:w-[25%] lg:flex-col lg:justify-between lg:pt-20 lg:pb-24 lg:pl-10 lg:pr-6 z-40 bg-[#0f172a] sidebar-solid-bg px-4 py-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
                <a href="/">Chandra Vamsi Malluru</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-teal-300 sm:text-xl">
                <Typewriter
                  texts={["Java Full Stack Developer", "Backend Developer", "Web Developer"]}
                  typingSpeed={80}
                  deletingSpeed={40}
                />
              </h2>
              <p className="mt-4 leading-normal text-slate-400">
                Building secure, production-ready web applications with strong backend systems and modern frontend experiences.
              </p>

              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-12 w-max">
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
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-slate-200"
                  href="https://wa.me/916304162737"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Whatsapp</span>
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column: Content */}
          <main
            id="content"
            className="lg:ml-[25%] pt-8 lg:pt-20 lg:pb-8 px-6 md:px-12 lg:px-6"
          >
            <div className="max-w-screen-xl">
              <section
                id="about"
                className="mb-16 scroll-mt-8 md:mb-24 lg:mb-36 lg:scroll-mt-20"
                aria-label="About me"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  {/* Left: Main content — takes all remaining space */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-1">About Me</p>
                    <h3 className="text-3xl font-bold text-slate-200 mb-2 leading-tight">
                      Full Stack Developer who builds <span className="text-teal-300">real-world solutions.</span>
                    </h3>
                    <p className="mb-8 text-sm leading-relaxed text-slate-400">
                      I’m a Java Full Stack Developer with hands-on experience building production-oriented applications using Spring Boot, React.js, and modern web technologies. I specialize in developing secure REST APIs, authentication systems, and workflow-driven platforms. I enjoy designing backend services, structuring business logic, and building applications that are reliable, maintainable, and easy to scale. I focus on writing clean, structured code and continuously improving how systems are designed and implemented.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      {[
                        { title: "Full Stack Development", icon: <FaLaptopCode />, desc: "Building end-to-end applications with React.js, API integrations, and scalable backend services." },
                        { title: "Backend Expertise", icon: <FaCode />, desc: "Java, Spring Boot, REST APIs, Spring Security, JWT, OAuth2, and business logic implementation." },
                        { title: "Database Systems ", icon: <FaDatabase />, desc: "MySQL, MongoDB, and Firebase with efficient data modeling and query handling." },
                        { title: "Problem Solving", icon: <FaLightbulb />, desc: "Breaking down complex requirements into structured, maintainable, and efficient solutions." }
                      ].map((item, i) => (
                        <div key={i} className="glass p-4 rounded-xl border border-slate-700/50 hover:border-teal-500/30 transition-all group">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-teal-300 text-lg group-hover:scale-110 transition-transform shrink-0">{item.icon}</div>
                            <h4 className="text-slate-200 font-bold leading-tight text-sm">{item.title}</h4>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4">Technologies I Work With</p>
                      <div className="flex flex-wrap gap-2">
                        {SKILLS.map((skill, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-full bg-teal-400/5 border border-teal-400/10 text-teal-300 text-[10px] font-medium flex items-center gap-1.5 hover:bg-teal-400/10 transition-colors">
                            <span className="w-1 h-1 rounded-full bg-teal-400"></span>
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Stats + Buttons — fixed narrow column */}
                  <div className="hidden lg:flex flex-col justify-between gap-8 w-48 shrink-0">
                    <div className="flex flex-col gap-10">
                      {[
                        { label: "Years of Experience", value: "1+", icon: <FiUser /> },
                        { label: "Projects Built", value: "5+", icon: <GrProjects /> },
                        { label: "Technologies Used", value: "10+", icon: <FiCode /> },
                        { label: "Commitment", value: "100%", icon: <GoShieldCheck /> }
                      ].map((stat, i) => (
                        <div key={i} className="group">
                          <div className="flex items-center gap-3 mb-1.5">
                            <div className="text-teal-400 text-2xl transition-transform group-hover:scale-110 shrink-0">
                              {stat.icon}
                            </div>
                            <p className="text-2xl font-extrabold text-teal-400 leading-none">{stat.value}</p>
                          </div>
                          <p className="text-[12px] font-medium text-slate-500 leading-tight ml-9">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 mt-4">
                      <a
                        href={resume}
                        target="_blank"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-teal-500 text-slate-900 font-bold text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20 active:scale-[0.98]"
                      >
                        <FiDownload className="text-lg stroke-[3]" />
                        View Resume
                      </a>
                      <a
                        href="mailto:chandravamsi.malluru@gmail.com"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-slate-700 bg-transparent text-slate-200 font-bold text-sm hover:border-slate-500 hover:bg-slate-800/30 transition-all active:scale-[0.98]"
                      >
                        <FaEnvelope className="text-base" />
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="experience"
                className="mb-16 scroll-mt-8 md:mb-24 lg:mb-36 lg:scroll-mt-20"
                aria-label="Work experience"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                  </h2>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-1">Experience</p>
                  <h3 className="text-3xl font-bold text-slate-200">My Professional <span className="text-teal-300">Journey</span></h3>
                </div>

                <ol className="relative space-y-8">
                  {/* Vertical timeline line */}
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-slate-700/50"></div>

                  {EXPERIENCES.map((exp, index) => (
                    <li key={index} className="pl-10 relative">
                      {/* Teal bullet aligned to card top */}
                      <span className="absolute left-0 top-5 w-4 h-4 rounded-full bg-teal-400 border-2 border-[#0f172a] ring-2 ring-teal-400/30 z-10"></span>

                      {/* Horizontal connector line */}
                      <div className="absolute left-4 top-[27px] w-6 h-px bg-slate-700/50"></div>

                      {/* Always-visible card */}
                      <div className="group relative rounded-xl bg-slate-800/40 border border-white/5 shadow-lg backdrop-blur-sm p-4">
                        {/* Beam — only on hover via CSS */}
                        <div className="beam-container">
                          <svg className="absolute inset-0 w-full h-full overflow-visible">
                            <rect
                              x="0" y="0" width="100%" height="100%"
                              rx="12" ry="12"
                              pathLength="1"
                              fill="none"
                              stroke="#5eead4"
                              strokeWidth="1.5"
                              className="beam-svg-rect"
                            />
                          </svg>
                        </div>

                        {/* Date */}
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">{exp.date}</span>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-slate-200 mb-0.5">{exp.title}</h3>
                        {/* Company */}
                        <p className="text-sm font-semibold text-teal-400 mb-3">{exp.company}</p>

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-slate-400 mb-4">{exp.description}</p>

                        {/* Responsibilities */}
                        {exp.responsibilities && (
                          <ul className="space-y-1.5 mb-5">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                                <FaCheckCircle className="text-teal-400 mt-0.5 shrink-0 text-xs" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Technologies & Tools */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Technologies &amp; Tools</p>
                          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                            {exp.technologies.map((tech, i) => (
                              <li key={i}>
                                <div className="flex items-center rounded-full bg-teal-900/20 px-3 py-1 text-[11px] font-semibold leading-5 text-teal-300 border border-teal-800/30">
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

              </section>

              <section
                id="projects"
                className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-20"
                aria-label="Selected projects"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Projects
                  </h2>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-1">Projects</p>
                  <h3 className="text-4xl font-bold text-slate-200">Things I've Built</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {PROJECTS.map((project, index) => (
                    <div key={index} className="group relative flex flex-col lg:flex-row items-start gap-4 p-3 glass rounded-xl border border-slate-800/50 hover:border-teal-500/30 transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Left: Project Image */}
                      <div className="lg:w-1/3 shrink-0 overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900/50">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-square"
                        />
                      </div>

                      {/* Right: Project Info */}
                      <div className="flex flex-col flex-grow py-0.5">
                        <h4 className="text-base font-bold text-slate-200 mb-1.5 group-hover:text-teal-300 transition-colors leading-tight">
                          {project.title}
                        </h4>
                        <p className="text-[11px] leading-relaxed text-slate-400 mb-3 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-full bg-teal-400/5 text-teal-300 text-[8px] font-bold border border-teal-400/10">
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto py-3 rounded-xl glass border border-slate-700 text-slate-200 font-bold text-base hover:border-teal-500/50 transition-all group"
                    href="https://github.com/chandravamsi-m"
                    target="_blank"
                  >
                    View All Projects on GitHub
                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </section>

              <footer className="max-w-md pb-4 text-xs text-slate-500">
                <p>
                  Built with curiosity, coffee, and a lot of console.logs,
                  embracing the process of learning, breaking, and improving.
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </ClickSpark>
  );
}
