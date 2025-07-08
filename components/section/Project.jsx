import React from "react";
import { RevealOnScroll } from '../RevealOnScroll'

export const Project = () => {
  const projectList = [
    {
      title: "College Website",
      description:
        "This project demonstrates a strong understanding of web fundamentals, DOM manipulation, responsive layout design, and static site structure—built without any frameworks or libraries, showing pure HTML/CSS/JS skills.",
      tech: ["HTML", "CSS", "Javascript",],
    demoLink: "https://sangolacollegesangola.netlify.app",

      codeLink: "#", // Replace with GitHub URL
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio site to showcase my skills, projects, and resume with smooth navigation and animation effects.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      demoLink: "https://sangolacollegesangola.netlify.app",
      codeLink: "#",
    },
    {
      title: "Weather App",
      description:"Upcoming in Few Days",
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
     <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
        <RevealOnScroll>
<div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 bg-white/5 p-6 rounded-xl hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  🔗 Live Demo
                </a>
                {/* <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 hover:underline"
                >
                  📁 View Code
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
