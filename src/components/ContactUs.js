import React from 'react';
import { Mail, Phone, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffe5e5] p-6">
      <h2 className="text-4xl font-bold text-[#f76c6c] mb-8">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg text-center">
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/raj-maurya-271b32237/" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-[#f76c6c] transition-colors">
          <Linkedin className="text-[#f76c6c] hover:text-white mb-2" size={36} />
          <span className="text-[#333] hover:text-white font-medium">LinkedIn</span>
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/rajm012/?hl=en" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-[#f76c6c] transition-colors">
          <Instagram className="text-[#f76c6c] hover:text-white mb-2" size={36} />
          <span className="text-[#333] hover:text-white font-medium">Instagram</span>
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/rajm012" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-[#f76c6c] transition-colors">
          <Twitter className="text-[#f76c6c] hover:text-white mb-2" size={36} />
          <span className="text-[#333] hover:text-white font-medium">Twitter</span>
        </a>

        {/* Email */}
        <a href="mailto:syntaxajju@gmail.com" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-[#f76c6c] transition-colors">
          <Mail className="text-[#f76c6c] hover:text-white mb-2" size={36} />
          <span className="text-[#333] hover:text-white font-medium">Email Us</span>
        </a>

        {/* Phone */}
        <a href="tel:+91 9120552722" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-[#f76c6c] transition-colors">
          <Phone className="text-[#f76c6c] hover:text-white mb-2" size={36} />
          <span className="text-[#333] hover:text-white font-medium">+91 9120552722</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/ajju-raj" target="_blank" rel="noopener noreferrer" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-[#f76c6c] transition-colors">
          <Github className="text-[#f76c6c] hover:text-white mb-2" size={36} />
          <span className="text-[#333] hover:text-white font-medium">GitHub</span>
        </a>

      </div>
    </div>
  );
};

export default ContactUs;
