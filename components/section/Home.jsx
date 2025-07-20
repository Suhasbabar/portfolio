import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import suhasImage from "/public/suhas.jpg";
import resume from "/public/UpdatedResume.pdf"
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 w-full max-w-6xl">
          {/* Text Section (left side) */}
          <div className="text-center md:text-left z-10 px-4 flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 leading-tight bg-clip-text text-transparent">
              Hello, I'm Suhas Babar
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
              I'm a passionate{" "}
              <span className="text-blue-400 font-semibold">
               Full Stack Developer
              </span>{" "}
              with a strong foundation in web development, eager to build
              modern, responsive, and accessible user interfaces. As a fresher,
              I'm driven by curiosity and a commitment to continuous learning.
            </p>

            <div className="flex justify-left gap-6 mt-6">
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faReact} size="2x" />
              </a>

              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
              </a>

              <a
                href="https://en.wikipedia.org/wiki/Database"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDatabase} size="2x" />
              </a>
              <a
                href="https://www.java.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faJava} size="2x" />
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a
                href={resume}
                download
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Download CV
              </a>
              <a
                href="/certificates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                View Certification
              </a>
            </div>
          </div>

          {/* Image Section (right side) */}

          <div className="mt-10 md:mt-0 md:ml-10 flex-1 flex justify-center">
            <div className="relative w-60 h-60 md:w-72 md:h-72 flex items-center justify-center">
              {/* Rotating Circle */}
              <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 p-[6px]">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>

              {/* Circular Image */}
              <div className="w-52 h-52 md:w-60 md:h-60 overflow-hidden rounded-full border-4 border-black relative z-10">
                <img
                   src={suhasImage}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
