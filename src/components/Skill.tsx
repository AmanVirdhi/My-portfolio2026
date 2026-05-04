import React from 'react';
import { 
  SiCplusplus, SiJavascript, SiTypescript, SiCsharp,
  SiAngular, SiDotnet, SiGit, SiReact, SiDocker, SiKubernetes,
  SiMongodb, SiPostgresql, SiGithub
} from 'react-icons/si';
import { FaDatabase, FaCode, FaLaptopCode, FaServer, FaCloud, FaMobileAlt } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skill: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      icon: <FaCode className="text-lg" />,
      skills: [
        { name: 'C++', icon: <SiCplusplus />, level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85, color: 'from-yellow-400 to-yellow-600' },
        { name: 'C#', icon: <SiCsharp />, level: 80, color: 'from-purple-500 to-purple-700' },
        { name: 'SQL', icon: <FaDatabase />, level: 80, color: 'from-green-500 to-teal-500' },
      ],
    },
    {
      category: 'Frameworks & Tools',
      icon: <FaLaptopCode className="text-lg" />,
      skills: [
        { name: 'React', icon: <SiReact />, level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: '.NET', icon: <SiDotnet />, level: 80, color: 'from-purple-500 to-indigo-600' },
        { name: 'Angular', icon: <SiAngular />, level: 85, color: 'from-red-500 to-red-700' },
        { name: 'Git', icon: <SiGit />, level: 85, color: 'from-orange-500 to-red-600' },
        { name: 'GitHub Desktop', icon: <SiGithub />, level: 85, color: 'from-gray-700 to-gray-900' },
        { name: 'BrowserStack', icon: <FaMobileAlt />, level: 85, color: 'from-orange-400 to-orange-600' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: <FaCloud className="text-lg" />,
      skills: [
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'Docker', icon: <SiDocker />, level: 75, color: 'from-blue-400 to-cyan-500' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: 'from-blue-600 to-indigo-600' },
      ],
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center pt-16">
      <div className="container mx-auto px-5 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="space-y-4">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-xl shadow-md p-4">
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-gray-50 rounded-lg p-3 text-center"
                  >
                    <span className="text-2xl text-gray-700 block mb-1">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-gray-800 text-sm block">{skill.name}</span>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mt-1">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
