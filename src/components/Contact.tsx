
import React, { useState } from 'react';
import { Mail, Phone, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend service
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-teal-600" size={24} />,
      label: "Email",
      value: "satishdhakal4@gmail.com",
      href: "mailto:satishdhakal4@gmail.com"
    },
    {
      icon: <Phone className="text-indigo-600" size={24} />,
      label: "Phone",
      value: "+977 9842290280",
      href: "tel:+9779842290280"
    },
    {
      icon: <Github className="text-gray-700" size={24} />,
      label: "GitHub",
      value: "github.com/Madhavdhakal",
      href: "https://github.com/Madhavdhakal/"
    },
    {
      icon: <MapPin className="text-rose-600" size={24} />,
      label: "Location",
      value: "Nepal",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to embark on a meaningful digital journey? Let's connect and create something extraordinary together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-indigo-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking to build a meaningful digital presence, need creative design work, 
                or want to explore how technology can serve your higher purpose, I'm here to help. 
                Let's start a conversation about your vision.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-gray-800 hover:text-teal-600 transition-colors duration-200 text-sm font-medium"
                          target={info.label === 'GitHub' ? '_blank' : undefined}
                          rel={info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 text-sm font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Unique blend of technical expertise and spiritual awareness</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Focus on creating meaningful, purpose-driven solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Commitment to helping you discover and express your authentic self</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Share your thoughts, project ideas, or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            "In every interaction, let us plant seeds of wisdom and compassion."
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Madhav Dhakal. All rights reserved. • Built with love and mindful intention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
