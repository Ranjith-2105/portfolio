
import React from 'react';
import { User, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated student passionate about technology and innovation, combining academic excellence 
            with practical skills to create meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
              alt="Profile"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>

          <div className="animate-slide-in-right">
            <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-6">
              Passionate About Excellence
            </h3>
            <p className="font-inter text-gray-600 mb-6 leading-relaxed">
              As a dedicated student, I believe in the power of continuous learning and innovation. 
              My academic journey has been marked by excellence, and I'm always eager to apply 
              theoretical knowledge to real-world challenges.
            </p>
            <p className="font-inter text-gray-600 mb-8 leading-relaxed">
              I combine strong analytical thinking with creative problem-solving to deliver 
              exceptional results in both academic and professional environments.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Leadership</h4>
                  <p className="text-sm text-gray-600">Team player</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Target className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Focus</h4>
                  <p className="text-sm text-gray-600">Goal-oriented</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Excellence</h4>
                  <p className="text-sm text-gray-600">High achiever</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Passion</h4>
                  <p className="text-sm text-gray-600">Driven learner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
