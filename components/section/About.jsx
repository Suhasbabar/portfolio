import React from "react";
import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
  const frontedSkills = [
    "HTML 5",
    "CSS 3",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Responsive Design",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Mongo DB",
    "MySQL (basic)",
    "REST APIs",
  ];
  const tools = ["Git & GitHub", "VS Code", "Netlify", "Vercel"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-10 text-center">
            I'm a recent computer science graduate with a deep interest in full
            stack development. I enjoy building responsive, user-friendly web
            applications using modern technologies. I'm constantly learning and
            exploring new tools to improve my craft and deliver real-world
            solutions.
          </p>

          {/* Skill Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Frontend */}
            <div className="flex-1 rounded-xl p-6 border border-white/10 bg-white/5 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-green-400 text-center">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {frontedSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="flex-1 rounded-xl p-6 border border-white/10 bg-white/5 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-green-400 text-center">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="flex-1 rounded-xl p-6 border border-white/10 bg-white/5 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-green-400 text-center">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 bg-white/5">
              <h3 className="text-xl text-green-400 font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.Sc (ECS)</strong> – CGPA: 9.25/10<br />
                  (3rd Year, Expected: May 2026)
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 bg-white/7">
              <h3 className="text-xl font-bold mb-4 text-green-400">💼 Experience</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold">💡 Personal Projects</h4>
                  <p>Developed and maintained full-stack applications.</p>
                </div>
                <div>
                  <h4 className="font-semibold">🧑‍💻 Intern at DEF (2019)</h4>
                  <p>
                    Assisted in building frontend components and integrating REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
