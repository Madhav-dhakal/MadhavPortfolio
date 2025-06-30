
import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Heart className="text-teal-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Spiritual Passion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deeply committed to spiritual growth and self-discovery, I believe in the transformative power of inner exploration. 
                  My mission is to inspire young people to connect with their authentic selves and discover their true purpose in life.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <GraduationCap className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Educational Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bachelor's in Computer Science and Information Technology from Amrit Science Campus (2024). 
                  This technical foundation provides the skills to bridge the gap between spiritual wisdom and modern technology.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Briefcase className="text-teal-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  From .NET intern at Giga Infosoft to MERN Stack training and currently working at 
                  Hanumante Adventures and Travel Company, my diverse experience spans web development, 
                  digital marketing, and creating meaningful user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Philosophy</h3>
            <blockquote className="text-lg text-gray-700 italic text-center leading-relaxed">
              "Technology is most powerful when it serves the human spirit. I strive to create digital experiences 
              that not only function beautifully but also inspire growth, connection, and self-discovery."
            </blockquote>
            <div className="mt-6 text-center">
              <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Core Values & Mission</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Mindful Technology</h4>
              <p className="text-gray-600 text-sm">Creating digital solutions with consciousness and purpose</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Inspire Growth</h4>
              <p className="text-gray-600 text-sm">Encouraging self-discovery and personal transformation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Authentic Purpose</h4>
              <p className="text-gray-600 text-sm">Helping others discover their true calling and potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
