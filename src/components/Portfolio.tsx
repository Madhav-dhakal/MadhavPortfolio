
import React from 'react';
import { ExternalLink, Github, Code, Database, Shield, Smartphone } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Yes Blog Web App",
      description: "A full-featured blogging platform built with MERN Stack, featuring user authentication, responsive design, and a seamless content management experience.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT Authentication"],
      features: [
        "User registration and authentication",
        "Rich text editor for blog posts",
        "Responsive design for all devices",
        "Comment system and user interactions",
        "Admin dashboard for content management"
      ],
      icon: <Code className="text-teal-600" size={32} />,
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      title: "iReview Movie Application",
      description: "An interactive movie review application developed with .NET technologies, providing secure user authentication and dynamic content management.",
      techStack: [".NET Core", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
      features: [
        "Secure user login and registration",
        "Movie database with detailed information",
        "User review and rating system",
        "Advanced search and filtering",
        "Admin panel for movie management"
      ],
      icon: <Database className="text-indigo-600" size={32} />,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing projects that blend technical excellence with meaningful user experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Shield className="mr-2 text-teal-600" size={20} />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-teal-100 hover:text-teal-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Smartphone className="mr-2 text-indigo-600" size={20} />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <ExternalLink size={18} className="mr-2" />
                    View Project
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-full hover:border-teal-500 hover:text-teal-600 transition-all duration-300 flex items-center">
                    <Github size={18} className="mr-2" />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Each project reflects my commitment to creating technology that serves a higher purpose
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-full border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
