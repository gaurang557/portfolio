import React from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FaJsSquare, FaCss3Alt, FaDatabase, FaPython, FaDocker, FaNodeJs } from 'react-icons/fa';
// import { FaDotNet } from 'react-icons/fa';

const Hero = () => {
  return (
      <div id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl name sm:text-5xl font-bold text-gray-900 mb-6">
            Gaurang Agarwal
          </h2>
          <h2 className="text-3xl name sm:text-3xl font-bold text-gray-900 mb-6">
            Full-Stack Web Developer
          </h2>
          <div className='flex justify-center pt-10 gap-2 flex-wrap'>
            <FaPython className="text-gray-800" size={50} />
            <FaDocker color="#2496ED" size={50} />
            <FaReact className="text-gray-800" size={50} />
            <SiNextdotjs className="text-gray-800" size={50} />
            <FaJsSquare className="text-yellow-500" size={50} />
            <FaCss3Alt className="text-blue-600" size={50} />
            <FaDatabase className="text-green-600" size={50} />
          </div>
          <div className="socialpanel">
            <a href="https://github.com/gaurang557" target="_blank" rel="noopener noreferrer" 
               className="socialbutton bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              <Github  /> <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/gaurang-agarwal-512a4b197" target="_blank" rel="noopener noreferrer"
               className="socialbutton bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <Linkedin/> <span>LinkedIn</span>
            </a>
            <a href="mailto:gaurangagarwal557@gmail.com"
               className="socialbutton bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              <Mail  /> <span>Email</span>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Hero