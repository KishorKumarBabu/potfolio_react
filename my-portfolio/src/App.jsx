import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const tools = [
  "Javascript (ES6+)",
  "HTML5",
  "CSS3",
  "Git",
  "Github",
  "Java",
  "Postman Tool",
];

const frameworks = [
  "React JS",
  "Redux",
  "React Router",
  "SQL Server",
  "PgAdmin",
  "Bootstrap",
  "Tailwind CSS",
];

const navItems = ["about", "skills", "projects", "experience", "contact"];

/* ================= APP ================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [openResume, setOpenResume] = useState(false);

  /* 🔥 Cursor Glow */
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* 🎯 Scroll Spy */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-gray-200">

      {/* 🔥 Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(99,102,241,0.15), transparent 80%)`,
        }}
      />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full backdrop-blur-lg bg-white/5 border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg tracking-wide">Kishor Kumar</h1>

          {/* Desktop */}
          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize transition ${
                  active === item ? "text-indigo-400" : "hover:text-indigo-400"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`block capitalize ${
                  active === item ? "text-indigo-400" : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white px-6 pt-28">

  {/* 🔥 Vertical Accent Strip */}
  <motion.div
    className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 6, repeat: Infinity }}
  />

  {/* 🔥 Large Editorial Background Text */}
  <motion.h1
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.03] tracking-tight select-none pointer-events-none"
    animate={{ x: [0, -40, 0] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  >
    PORTFOLIO
  </motion.h1>

  {/* 🔲 Massive Diagonal Block */}
  <motion.div
    className="absolute -right-40 top-1/3 w-[900px] h-[260px] bg-gradient-to-r from-indigo-600/30 to-purple-600/30"
    style={{ transform: "rotate(-12deg)" }}
    animate={{ x: [0, -60, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* 🔲 Thin Grid Line System */}
  <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }}
  />

  {/* ⭐ MAIN CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT — TEXT */}
    <div>
      <motion.p
        className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Frontend Developer
      </motion.p>

      <motion.h2
        className="text-5xl md:text-7xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Building<br />
        <span className="text-indigo-400">Interfaces</span><br />
        That Feel<br />
        Intentional.
      </motion.h2>

      <motion.p
        className="mt-6 text-gray-400 max-w-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I craft bold, modern frontend experiences where layout,
        motion, and clarity work together — not decoration.
      </motion.p>

      <motion.div
        className="mt-10 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
       <a
  href="./public/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-200 transition"
>
  View Resume
</a>


        <a
  href="#projects"
  className="border border-white/30 px-8 py-4 hover:border-indigo-400 transition"
>
  Selected Work
</a>

      </motion.div>
    </div>

    {/* RIGHT — IMAGE BLOCK */}
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="absolute inset-0 border border-white/20 translate-x-6 translate-y-6"></div>
      <img
        src="/profile.jpg"
        alt="Kishor"
        className="relative w-full h-[420px] object-cover transition duration-700"
      />
    </motion.div>

  </div>

</section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I am a final-year ECE student with a deep interest in Software development.
          I specialize in building frontend applications using modern tools like
          React, Tailwind CSS, and JavaScript.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 bg-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <h3 className="mb-4 font-semibold text-indigo-400">
            Tools & Languages
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {tools.map((t, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl text-center">
                {t}
              </div>
            ))}
          </div>

          <h3 className="mb-4 font-semibold text-indigo-400">Frameworks</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {frameworks.map((f, i) => (
              <div key={i} className="bg-white/10 p-4 rounded-xl text-center">
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Zapeats",
              img: "/zapeats.png",
              link: "https://react-sgmy.vercel.app/",
              desc:
                "Swiggy-like food ordering web app using React and Tailwind.",
            },
            {
              title: "Booksky",
              img: "/booksky.png",
              link:
                "https://kishorkumarbabu.github.io/potfolio/booksky/index.html",
              desc:
                "Lightweight book notes app using HTML, CSS and JavaScript.",
            },
          ].map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img src={p.img} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= GITHUB STATS ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">GitHub Stats</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=KishorKumarBabu&show_icons=true&theme=tokyonight"
            className="rounded-xl"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=KishorKumarBabu&theme=tokyonight"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-20 bg-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">
              Internship Experience
            </h2>

            {[
              {
                role:
                  "Software Developer Intern - Agaram Technologies",
                time: "Sep 2025 – Present",
                points: [
                  "Developed a full-stack Employee Management Application using React.js, Java (Spring Boot), Tailwind CSS, and SQL Server.",
                  "Built and integrated RESTful APIs.",
                  "Deployed the application on Apache Tomcat.",
                ],
              },
              {
                role:
                  "Frontend Development Intern - CodeAlpha",
                time: "1st April 2025 - 30th April 2025",
                points: [
                  "Built a responsive image gallery.",
                  "Developed a calculator app.",
                  "Created a custom music player.",
                ],
              },
              {
                role:
                  "Python Intern - ProcessDrive Pvt. Ltd",
                time: "July 2024 (15 Days)",
                points: [
                  "Worked on real-time API integration.",
                  "Used MongoDB for CRUD operations.",
                  "Built Python mini-projects.",
                ],
              },
            ].map((e, i) => (
              <div
                key={i}
                className="bg-black/40 p-6 rounded-xl mb-6"
              >
                <motion.h3
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="inline-block font-semibold text-lg relative pb-2"
>
  {e.role}

  {/* Gradient + Glow underline */}
  <motion.span
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="
      absolute left-0 bottom-0  w-[calc(100%-20px)] h-[3px]

      bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400
      rounded-full
      origin-left
      shadow-[0_0_12px_rgba(99,102,241,0.6)]
    "
  />
</motion.h3>

<p className="text-sm text-gray-400 mt-1">{e.time}</p>

<ul className="list-disc pl-5 mt-3 text-sm text-gray-300">
  {e.points.map((p, j) => (
    <li key={j}>{p}</li>
  ))}
</ul>

              </div>
            ))}
          </div>
        </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400">kishorkumarbabu5@gmail.com</p>
        <p className="text-gray-400 mb-6">9600817790</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/KishorKumarBabu"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kishor-kumar-babu-65379628b/"><FaLinkedin /></a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10">
        © 2025 Kishor Kumar. Built with React & Tailwind CSS.
      </footer>

      {/* ================= RESUME MODAL ================= */}
      {openResume && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-black w-[90%] md:w-[70%] h-[80%] rounded-xl relative">
            <button
              onClick={() => setOpenResume(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>
            <iframe
              src="/kishorkumarresume.pdf"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
