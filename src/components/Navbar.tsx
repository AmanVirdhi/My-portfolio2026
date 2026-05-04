import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const container = document.querySelector('.snap-y');
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - windowHeight / 2 && 
              scrollPosition < sectionTop + section.offsetHeight - windowHeight / 2) {
            setActiveSection(link.id);
          }
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 text-white py-3 px-6 z-50 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
        >
          Hire Me!
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'hover:bg-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col space-y-2 pt-4 pb-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-white/10 text-gray-300'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
