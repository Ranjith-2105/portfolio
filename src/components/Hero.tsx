import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  // Scroll to the "projects" section
  const scrollToWork = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ranjith MV
            </span>
          </h1>

          <p className="font-inter text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            A passionate student and developer creating innovative solutions
            <br className="hidden sm:block" />
            with academic excellence and technical expertise
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToWork}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>

            <a
              href="./Ranjith_CV.pdf"
              download
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Ranjith-2105"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ranjith-mv-baab48295/"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:iamranjith21@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.instagram.com/itz._rxnju/"
              className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Scroll down arrow */}
        <button
          onClick={scrollToWork}
          className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
