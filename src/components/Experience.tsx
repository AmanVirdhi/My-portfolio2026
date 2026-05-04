import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCertificate, FaCheckCircle } from "react-icons/fa";
import { SiAngular, SiTypescript, SiBootstrap, SiReact, SiDotnet, SiMongodb, SiPostgresql, SiKubernetes, SiDocker } from "react-icons/si";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  techStack: { name: string; icon: React.ReactNode }[];
  achievements: string[];
  certificateLink?: string;
  gradient: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "S&P Global",
      duration: "May 2025 - Present",
      location: "India",
      description: "Working on Automotive Mastermind - a Predictive Analytics Platform for automotive retailers.",
      techStack: [
        { name: "React.js", icon: <SiReact /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
      ],
      achievements: [
        "Built scalable React UI components",
        "Debugged .NET REST APIs",
        "Deployed microservices on GCP",
        "Increased test coverage to 80%",
      ],
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Software Development Engineer",
      company: "Nighwan Tech Pvt Ltd",
      duration: "Mar - Sept 2024",
      location: "India",
      description: "Built HRMS web application for streamlining HR processes.",
      techStack: [
        { name: "Angular", icon: <SiAngular /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
      ],
      achievements: [
        "Built multiple dashboards",
        "API integration for HR data",
        "Fixed 200+ bugs",
      ],
      certificateLink: "https://drive.google.com/file/d/1x8EevvxeZ0BaKwDMbrud5ErGE66i2aGK/view?usp=sharing",
      gradient: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center pt-16">
      <div className="container mx-auto px-5 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 pb-2 border-b border-white/20">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-lg flex-shrink-0`}>
                      <FaBriefcase className="text-white text-sm" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{exp.title}</h3>
                  </div>
                  <p className={`font-semibold text-sm ml-8 ${exp.company === "S&P Global" ? "text-red-500" : "text-blue-300"}`}>{exp.company}</p>
                </div>
                <div className="text-left sm:text-right text-xs text-gray-300 mt-2 sm:mt-0 ml-8 sm:ml-0">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-purple-400" /> {exp.duration}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-200 text-sm mb-3">{exp.description}</p>

              {/* Tech Stack */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-white text-xs border border-white/20">
                      <span className="text-xs">{tech.icon}</span>
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-3">
                <div className="grid grid-cols-1 gap-1 text-xs">
                  {exp.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-200">
                      <FaCheckCircle className="text-green-400 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificate Button */}
              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 bg-gradient-to-r ${exp.gradient} text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:shadow-lg transition-all`}
                >
                  <FaCertificate /> Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
