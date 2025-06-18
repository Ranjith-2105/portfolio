import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_2ci8vxn',
      'template_78uyff9',
      formData,
      'hL4t7RcfWyBJRzzDD'
    ).then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error Sending Message",
        description: "Please try again later.",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a collaborator or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">iamranjith21@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 9443774973</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Erode, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Redesigned Social Links Section */}
            <div className="pt-8">
              <h4 className="font-inter font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="grid grid-cols-5 gap-4 max-w-xs">
                <a href="https://github.com/Ranjith-2105" target="_blank" rel="noreferrer"
                  className="p-3 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/ranjith-mv-baab48295" target="_blank" rel="noreferrer"
                  className="p-3 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/itz._rxnju/" target="_blank" rel="noreferrer"
                  className="p-3 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition">
                  <Instagram size={20} />
                </a>
                
                <a href="mailto:iamranjith21@gmail.com"
                  className="p-3 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
