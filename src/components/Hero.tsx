import React from 'react'
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa';
import profileImage from '../assets/Aman1.jpg'; 

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden pt-14">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-6 animate-fade-in-down">
          <img 
            src={profileImage}
            alt="Amandeep Virdhi" 
            className="w-36 h-36 rounded-full mx-auto border-4 border-white/30 shadow-2xl object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Name & Title */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Amandeep Virdhi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Welcome to my Portfolio
          </p>
          <p className="text-base md:text-lg text-blue-300 mb-8 font-medium">
            Software Engineer | React & .NET | 1+ Year Experience
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 animate-fade-in-up animation-delay-200 px-4 sm:px-0">
          <a
            href="https://drive.google.com/file/d/1_uuukvwxZg-gWrFYsguydw34amvrt6C1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </a>
          <button
            onClick={() => scrollToSection('experience')}
            className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            My Work at <span className="text-red-500">S&P Global</span>
            <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-transparent border-2 border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            About Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 animate-fade-in-up animation-delay-400">
          <a 
            href="https://github.com/AmanVirdhi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-gray-900 text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/amandeep-virdhi/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
