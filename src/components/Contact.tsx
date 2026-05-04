import React, { useState, useRef } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaSpinner, FaCheck } from "react-icons/fa";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

// EmailJS Credentials - Replace with your own from emailjs.com
const EMAILJS_SERVICE_ID = "service_1etwbio";  // e.g., "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_dkb29i7"; // e.g., "template_xyz789"
const EMAILJS_PUBLIC_KEY = "e6gzpGBcteQE8nZzk";   // e.g., "abcdefghijklmnop"

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Amandeep",
        },
        EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-lg" />,
      label: "Phone",
      value: "+91 8725971080",
      href: "tel:+918725971080",
    },
    {
      icon: <FaEnvelope className="text-lg" />,
      label: "Email",
      value: "amandeep.mca21.du@gmail.com",
      href: "mailto:amandeep.mca21.du@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-lg" />,
      label: "LinkedIn",
      value: "amandeep-virdhi",
      href: "https://www.linkedin.com/in/amandeep-virdhi/",
    },
    {
      icon: <FaMapMarkerAlt className="text-lg" />,
      label: "Location",
      value: "Pathankot, Punjab, India",
      href: "",
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center pt-16">
      <div className="container mx-auto px-5 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info Cards */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Contact Info</h3>
            {contactInfo.map((info, index) => 
              info.href ? (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white group-hover:scale-105 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-gray-800 font-medium text-sm">{info.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{info.label}</p>
                    <p className="text-gray-800 font-medium text-sm">{info.value}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                rows={4}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FaCheck />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    Try Again
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
