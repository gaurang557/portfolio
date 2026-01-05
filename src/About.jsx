import React from 'react'
import { GraduationCap } from 'lucide-react';


const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-labelledby="about-heading">
  <div className="max-w-7xl mx-auto">
    <h3 id="about-heading" className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h3>
    <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
      <p>
        I'm a Software Engineer at Accenture with nearly 3 years of experience 
        transforming ideas into robust, scalable systems. I specialize in 
        full-stack development, cloud architecture, and building tools that make 
        engineering teams more efficient. I thrive on solving complex problems—whether
        it's architecting cloud-native solutions, automating workflows to save
        thousands of engineering hours, or modernizing legacy systems for the modern web.
      </p>
      <p>
        My work has directly saved over 1,000 engineering hours through intelligent 
        automation and process optimization. When I'm not coding, I'm exploring 
        new technologies and finding ways to make development workflows smoother 
        and more efficient.
      </p>
      <div className="flex items-center gap-2 pt-4">
        <GraduationCap className="text-blue-600" size={24} />
        <span className="font-semibold">B.Tech Computer Science - JSS Academy of Technical Education Noida (2018-2022)</span>
      </div>
    </div>
  </div>
</section>
  )
}

export default About