import React from 'react'
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaArrowDown } from 'react-icons/fa';

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Department of Computer Science, University of Delhi",
      batch: "2021 - 2024",
      icon: <FaGraduationCap />,
    },
    {
      degree: "BSc Computer Science",
      institution: "SRPAAB College, Pathankot, Punjab",
      batch: "",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center pt-16">
      <div className="container mx-auto px-5 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
              <FaCode className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Who I Am</h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            I am a <span className="text-blue-600 font-semibold">Software Engineer</span> at <span className="text-red-500 font-semibold">S&P Global</span> with 1+ year of experience 
            building scalable web applications using React.js, .NET, and cloud technologies (GCP, Kubernetes). 
            Proven ability to debug APIs, improve system reliability, and deliver production-ready features.
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-purple-600">🎓</span> Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <div className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                  {edu.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{edu.degree}</h4>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                  {edu.batch && <p className="text-blue-600 text-xs font-medium">{edu.batch}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <div>
            <span className="font-semibold text-gray-800">Resident: </span>
            <span className="text-gray-600">Pathankot, Punjab, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
