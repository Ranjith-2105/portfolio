
import React from 'react';
import { Code, Database, Globe, Cpu, Palette, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "Java", level: 80 },
        { name: "C", level: 90 }
        
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "React", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "HTML/CSS", level: 95 }
       
      
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Git", level: 70 }
      ]
    },
    {
      title: "Design & Analytics",
      icon: Palette,
      skills: [
      
        { name: "Canva", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 95 },
        { name: "Deep Learning", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set developed through academic study and hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-inter font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving", "Team Leadership", "Project Management", 
              "Research & Analysis", "Technical Writing", "Public Speaking",
               "Version Control", "Creative Thinking", "Time Management"
            ].map((skill, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
