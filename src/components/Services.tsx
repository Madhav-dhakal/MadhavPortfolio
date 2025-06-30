
import React from 'react';
import { Palette, Code, Megaphone, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-white" size={32} />,
      title: "Web Design",
      description: "Modern, responsive websites that blend beautiful aesthetics with meaningful user experiences.",
      features: [
        "Responsive Design",
        "User Experience Focus",
        "Modern Technologies",
        "SEO Optimization"
      ],
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500"
    },
    {
      icon: <Palette className="text-white" size={32} />,
      title: "Graphic Design",
      description: "Creative visual solutions including logos, banners, and print/digital media with spiritual aesthetics.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Print Materials",
        "Digital Graphics"
      ],
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500"
    },
    {
      icon: <Megaphone className="text-white" size={32} />,
      title: "Facebook & Meta Ads",
      description: "Targeted advertising campaigns that connect with audiences on a deeper, more meaningful level.",
      features: [
        "Campaign Strategy",
        "Audience Targeting",
        "Creative Development",
        "Performance Analytics"
      ],
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500"
    },
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: "Digital Marketing",
      description: "Comprehensive online presence solutions that align with your authentic purpose and values.",
      features: [
        "SEO Strategy",
        "Content Marketing",
        "Social Media Management",
        "Brand Development"
      ],
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with spiritual insight to create meaningful digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-transparent">
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create something meaningful together. Whether you need a website, design work, or digital marketing, 
            I bring both technical expertise and spiritual awareness to every project.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-teal-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
