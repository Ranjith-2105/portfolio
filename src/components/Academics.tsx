import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Academics = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "Kongu Engineering College",
      period: "2023 - 2027",
      gpa: "8.43/10.00 (till 3rd semester)",
      description: "",
      achievements: []
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Kongu Matriculation Higher Secondary School",
      period: "2022 - 2023",
      gpa: "85.16%",
      description: "",
      achievements: []
    }
  ];

  const certifications = [
    {
      name: "MongoDB Certified Associate Developer",
      url: "mongodb.pdf",
    },
    {
      name: "Oracle APEX Cloud Developer Certified Professional",
      url: "/oracle_certificate.pdf",
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            My educational journey reflects a commitment to excellence and continuous learning
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-inter text-blue-600 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award size={16} />
                      <span>Percentage: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-inter text-gray-600 mb-4">{edu.description}</p>

              {edu.achievements.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-inter font-semibold text-gray-900 text-sm">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <span
                        key={achIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-gray-900">
              Certifications & Training
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:scale-105"
              >
                <p className="font-inter font-medium text-gray-900 hover:text-blue-600">
                  {cert.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
