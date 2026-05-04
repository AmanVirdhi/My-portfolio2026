import React from "react";
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AmanVirdhi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <FaGithub className="text-lg" />
            </a>
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              aria-label="Back to Top"
            >
              <FaArrowUp className="text-lg" />
            </button>
            <a
              href="https://www.linkedin.com/in/amandeep-virdhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> by Amandeep Virdhi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
