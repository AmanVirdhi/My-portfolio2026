import React from "react";
import { FaExternalLinkAlt, FaAngular, FaServer, FaCode, FaDatabase, FaCloud } from "react-icons/fa";
import { SiReact, SiDotnet, SiSqlite, SiMongodb, SiPostgresql, SiKubernetes } from "react-icons/si";

interface ProjectItem {
  title: string;
  description: string;
  features: string[];
  tech: { name: string; icon: React.ReactNode }[];
  link: string;
  gradient: string;
}

const Project: React.FC = () => {
  const projectData: ProjectItem[] = [
    {
      title: "Automotive Mastermind",
      description: "Predictive Analytics Platform at S&P Global that enables automotive retailers to identify high-intent buyers and optimize sales strategies.",
      features: ["Predictive Analytics", "Scalable UI", "Microservices", "80% Test Coverage"],
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "GCP", icon: <FaCloud /> },
      ],
      link: "",
      gradient: "from-red-500 to-orange-500",
    },
    {
      title: "Hostel Grievance System",
      description: "A full-stack application to manage hostel-related issues with features like account creation, complaint submission, and CRUD operations.",
      features: ["User Authentication", "Complaint Management", "Admin Dashboard", "CRUD Operations"],
      tech: [
        { name: "React", icon: <SiReact /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "SQLite", icon: <SiSqlite /> },
      ],
      link: "https://amanvirdhi.github.io/Hostel-Grievance-System/",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "HR Management System",
      description: "Built multiple components such as Attendance, Employee Dashboard, Project Management, with API integration for real-time data.",
      features: ["Attendance Tracking", "Employee Dashboard", "Project Management", "API Integration"],
      tech: [
        { name: "Angular", icon: <FaAngular /> },
        { name: "REST APIs", icon: <FaCode /> },
      ],
      link: "https://drive.google.com/file/d/1XKczG_I3DoehMmGRMvH4hWuqz8vNvBCQ/view?usp=sharing",
      gradient: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center pt-16">
      <div className="container mx-auto px-5 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-5">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Button */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tech.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-gray-700 text-sm">
                        <span>{t.icon}</span>
                        <span className="text-xs">{t.name}</span>
                      </div>
                    ))}
                  </div>
                  {/* <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold hover:shadow-md transition-all`}
                  >
                    View <FaExternalLinkAlt className="text-xs" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
