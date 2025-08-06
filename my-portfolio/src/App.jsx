// App.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const tools = [
  "Javascript (ES6+)", "HTML5", "CSS3", "Git", "Github", "Python", "Postman Tool"
];

const frameworks = [
  "React JS", "Redux", "React Router","MongoDB", "Bootstrap","Tailwind CSS"
];


const App = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-xl fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 className="text-xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Kishor Kumar
          </motion.h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-indigo-500">About</a>
            <a href="#skills" className="hover:text-indigo-500">Skills</a>
            <a href="#projects" className="hover:text-indigo-500">Projects</a>
            <a href="#experience" className="hover:text-indigo-500">Experience</a>
            <a href="#contact" className="hover:text-indigo-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-100 text-center w-full">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="mx-auto mb-4 w-32 h-32 rounded-full object-cover border-4 border-white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2 className="text-4xl font-bold mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Hello, I'm Kishor 👋
        </motion.h2>
        <motion.p className="text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Frontend Developer passionate about interactive and responsive UI
        </motion.p>
        <motion.div className="mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <a href="/kishorkumarresume.pdf" download className="inline-flex items-center bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-gray-100">
            <FaDownload className="mr-2" /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 max-w-5xl mx-auto px-4">
        <motion.h2 className="text-2xl font-bold mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>About Me</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          I am a final-year ECE student with a deep interest in web development. I specialize in building frontend applications using modern tools like React, Tailwind CSS, and JavaScript.
        </motion.p>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-16 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4">
    <motion.h2 className="text-2xl font-bold mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      Skills
    </motion.h2>

    {/* Frameworks */}
    <motion.h3 className="text-xl font-semibold mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      Tools & Languages
    </motion.h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mb-8">
      {tools.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-3 rounded shadow text-center hover:scale-105 transition-transform duration-200"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </div>

    {/* Tools */}
    <motion.h3 className="text-xl font-semibold mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      Frameworks
    </motion.h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
      {frameworks.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-3 rounded shadow text-center hover:scale-105 transition-transform duration-200"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Projects */}
      <section id="projects" className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <motion.h2
      className="text-2xl font-bold mb-8"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Projects
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "Zapeats",
          img: "/zapeats.png",
          link: "https://react-sgmy.vercel.app/",
          desc: "Zapeats is a Swiggy-like food ordering web app built using HTML, CSS, Tailwind CSS, and React, featuring real-time restaurant and menu data. It replicates core Swiggy features like dynamic routing, live search, and responsive UI using Swiggy’s public API data."
        },
        {
          title: "Booksky",
          img: "/booksky.png",
          link: "https://kishorkumarbabu.github.io/potfolio/booksky/index.html",
          desc: "BookSky is a lightweight web app built using HTML, CSS, and JavaScript that lets users add, view, and manage book notes in the browser without any backend. It uses localStorage for data persistence and was developed using VS Code, Chrome DevTools, Git, and GitHub."
        }
      ].map((project, i) => (
        <motion.a
          key={i}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <img
            src={project.img}
            alt={project.title}
            className="rounded mb-4 w-full h-[250px]"
          />
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm">{project.desc}</p>
        </motion.a>
      ))}
    </div>
  </div>
</section>


      {/* Experience */}
      <section id="experience" className="py-16 max-w-5xl mx-auto px-4">
        <motion.h2 className="text-2xl font-bold mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>Internship Experience</motion.h2>
        <motion.div className="bg-white p-6 rounded-xl shadow-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h3 className="text-lg font-semibold">Frontend Development Intern -  CodeAlpha</h3>
          <p className="text-sm mt-2 text-gray-700">1st April 2025 - 30th April 2025</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>🖼️ Image Gallery – Built a responsive image gallery using HTML, CSS, and JavaScript with modal view and interactive navigation.</li>
            <li>🧮 Calculator App – Developed a web-based calculator for basic arithmetic operations using HTML, CSS, and JavaScript.</li>
            <li>🎵 Music Player – Created a custom music player with play, pause, and next features using HTML, CSS, and JavaScript.</li>
          </ul>
        </motion.div>
        <motion.h2 className="text-2xl font-bold mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>Internship Experience</motion.h2>
        <motion.div className="bg-white p-6 rounded-xl shadow-md" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <h3 className="text-lg font-semibold">Python Intern -  ProcessDrive Pvt. Ltd,</h3>
          <p className="text-sm mt-2 text-gray-700">July 2024 - July 2024 (15 Days)</p>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>🔗 Worked on real-time API integration using Postman and Python, including external service calls and response handling for projects like image-to-text conversion using the Gemini API.</li>
            <li>🗃️ Hands-on experience with MongoDB, performing CRUD operations and integrating it seamlessly into Python-based applications for dynamic data management.</li>
            <li>🛠️ Built multiple mini-projects, including a video-to-image frame extractor and a fun chat application, applying core programming concepts in real-world use cases.</li>
          </ul>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <motion.div className="max-w-4xl mx-auto px-4 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="mb-4">Feel free to connect with me for opportunities or collaborations.</p>
          <p className="mb-4">kishorkumarbabu5@gmail.com</p>
          <p className="mb-4">9600817790</p>
          <div className="flex justify-center space-x-4 text-2xl">
            <a href="https://github.com/KishorKumarBabu" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kishor-kumar-babu-65379628b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white border-t w-full">
        <p className="text-sm">&copy; 2025 Kishor Kumar. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
