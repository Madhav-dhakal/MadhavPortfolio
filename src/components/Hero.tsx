
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-teal-400 to-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
                  Madhav Dhakal
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-light">
                Blending Technology with Spiritual Inspiration
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Passionate about encouraging self-discovery and meaningful purpose through 
              the harmonious integration of technology and spiritual growth. 
              Inspiring young minds to explore their true potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Discover My Journey
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <div className="text-6xl text-gray-400">👤</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-teal-600 hover:text-indigo-600 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
