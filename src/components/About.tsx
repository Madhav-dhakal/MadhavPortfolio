
import React from 'react';
import { GraduationCap, Briefcase, Heart, Award, Monitor, Database } from 'lucide-react';

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

        {/* Education Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-indigo-600" size={28} />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">2019 – 2024</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800">BSc CSIT</h4>
              <p className="text-gray-600 text-sm">Bachelor of Science in Computer Science & Information Technology</p>
              <p className="text-teal-600 text-sm font-medium mt-1">Tribhuvan University, Kathmandu, Nepal</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-indigo-100 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">2017 – 2019</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800">+2 Science Stream (NEB)</h4>
              <p className="text-gray-600 text-sm">Physics, Chemistry & Mathematics</p>
              <p className="text-teal-600 text-sm font-medium mt-1">Paramount Higher Boarding Secondary School</p>
            </div>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-teal-600" size={28} />
            Professional Experience
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Monitor className="text-white" size={22} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-gray-800">.NET Software Developer</h4>
                  <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Jan 2016 – Jul 2016</span>
                </div>
                <p className="text-teal-600 text-sm font-medium mb-2">Giga Infos Pvt. Ltd.</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>Worked on .NET-based application development</li>
                  <li>Assisted in backend development and database integration</li>
                  <li>Gained practical experience in software development lifecycle</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={22} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-gray-800">MERN Stack Training</h4>
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Sep 2023 – Dec 2023</span>
                </div>
                <p className="text-indigo-600 text-sm font-medium mb-2">3 Months Training Program</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>Trained in MongoDB, Express.js, React.js, and Node.js</li>
                  <li>Built full-stack web applications using the MERN stack</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Database className="text-white" size={22} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-gray-800">Computer Operator</h4>
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Jun 2019 – Dec 2019</span>
                </div>
                <p className="text-teal-600 text-sm font-medium mb-2">DIT Solutions</p>
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                  <li>Managed databases and handled data entry operations</li>
                  <li>Worked with MS Word, MS Excel, and Microsoft Office Package</li>
                  <li>Basic Internet Networking and system handling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <Award className="text-teal-600" size={28} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Feb 2026</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">Cyber Threat Management</h4>
              <p className="text-indigo-600 text-sm font-medium mb-2">Cisco Networking Academy</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Understanding of cyber threats, risk assessment, incident management, and proactive security strategies.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Jan 2026</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-1">Introduction to Cybersecurity</h4>
              <p className="text-indigo-600 text-sm font-medium mb-2">Cisco Networking Academy</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fundamentals of cybersecurity, online safety, and core security concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
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
