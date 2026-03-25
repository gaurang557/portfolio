import React from 'react'
import { GraduationCap } from 'lucide-react';


const About = () => {
  return (
      <div id="about" className="sm:px-6 lg:px-8">
        <div className="text-lg text-gray-700 aboutcontent">
          <p>
            A Software Engineer currently working at Accenture with over 3 years of 
            professional experience. 
          </p>
          
          <div className="flex justify-center gap-2 pt-4 education">
            <GraduationCap className="text-blue-600" size={24} />
            <a style={{color: "#444", fontWeight: "bold"}}
            href="https://jssaten.ac.in/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900">
              B.Tech Computer Science - JSS Academy of Technical Education Noida (2018-2022)
            </a>
          </div>
        </div>
      </div>
      )
    }

export default About