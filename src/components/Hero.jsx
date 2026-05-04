import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FaJsSquare, FaCss3Alt, FaDatabase, FaPython, FaDocker } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl name font-bold text-gray-900 mb-3">
          Gaurang Agarwal
        </h2>
        <h2 className="text-2xl sm:text-3xl name font-semibold text-gray-700 mb-8">
          Full-Stack Web Developer
        </h2>
        <div className="flex justify-center pt-4 gap-4 flex-wrap">
          <FaPython className="text-gray-800" size={44} />
          <FaDocker color="#2496ED" size={44} />
          <FaReact className="text-gray-800" size={44} />
          <SiNextdotjs className="text-gray-800" size={44} />
          <FaJsSquare className="text-yellow-500" size={44} />
          <FaCss3Alt className="text-blue-600" size={44} />
          <FaDatabase className="text-green-600" size={44} />
        </div>
        <div className="socialpanel">
          <a
            href="https://github.com/gaurang557"
            target="_blank"
            rel="noopener noreferrer"
            className="socialbutton bg-gray-800"
          >
            <Github size={18} /> <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/gaurang-agarwal-512a4b197"
            target="_blank"
            rel="noopener noreferrer"
            className="socialbutton bg-blue-600"
          >
            <Linkedin size={18} /> <span>LinkedIn</span>
          </a>
          <a
            href="mailto:gaurangagarwal557@gmail.com"
            className="socialbutton bg-purple-600"
          >
            <Mail size={18} /> <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
