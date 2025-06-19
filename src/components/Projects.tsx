import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Dyslexia-Prediction Using Machine Learning",
      description: "A machine learning model that predicts dyslexia in children using various features, enhancing early diagnosis and intervention.",
      image: "/dyslexia.jpg",
      technologies: ["Machine Learning"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Enhancing Wheat Disease Detection: A Convolutional Neural Network Approach",
      description: "A deep learning model utilizing convolutional neural networks to accurately detect and classify wheat diseases, improving agricultural productivity.",
      image: "./crop1.png",
      technologies: ["React", "D3.js", "Python", "Flask"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience.",
      image: "./portfolio.png",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      githubUrl: "https://github.com/Ranjith-2105/portfolio/tree/main",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical skills and creative problem-solving through various projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`flex flex-col lg:flex-row ${project.featured ? '' : ''}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : 'w-full'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className={`p-6 sm:p-8 ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="font-inter text-gray-600 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={20} />
                      <span className="font-medium">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
