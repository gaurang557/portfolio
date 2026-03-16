import React from 'react'
import { GraduationCap } from 'lucide-react';


const About = () => {
  return (
      <div id="about" className="sm:px-6 lg:px-8 bg-white">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h3>
        <div className="text-lg text-gray-700 aboutcontent">
          <div className='m-4'>
            I'm a Software Engineer at Accenture with nearly 3 years of experience 
            transforming ideas into robust, scalable systems. I specialize in 
            full-stack development, cloud architecture, and building tools that make 
            engineering teams more efficient. I thrive on solving complex problems—whether
            it's architecting cloud-native solutions, automating workflows to save
            thousands of engineering hours, or modernizing legacy systems for the modern web.
          </div>
          <p>
            My work has directly saved over 1,000 engineering hours through intelligent 
            automation and process optimization. When I'm not coding, I'm exploring 
            new technologies and finding ways to make development workflows smoother 
            and more efficient.
          </p>
          <div className="flex justify-center gap-2 pt-4 education">
            <GraduationCap className="text-blue-600" size={24} />
            <span className="font-semibold">B.Tech Computer Science - JSS Academy of Technical Education Noida (2018-2022)</span>
          </div>
        </div>
      </div>
      )
    }

export default About