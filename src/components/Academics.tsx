
import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Academics = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2021 - 2025",
      gpa: "3.9/4.0",
      description: "Specializing in Software Engineering and Data Science with honors",
      achievements: ["Dean's List", "Programming Competition Winner", "Research Assistant"]
    },
    {
      degree: "High School Diploma",
      institution: "High School Name",
      period: "2017 - 2021",
      gpa: "4.0/4.0",
      description: "Valedictorian with focus on STEM subjects",
      achievements: ["Valedictorian", "National Merit Scholar", "Science Olympiad Champion"]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner",
    "Google Analytics Certified",
    "Microsoft Azure Fundamentals",
    "Python Programming Certificate"
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
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-inter text-gray-600 mb-4">
                {edu.description}
              </p>

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
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center hover:from-blue-50 hover:to-blue-100 transition-all duration-300"
              >
                <p className="font-inter font-medium text-gray-900">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
