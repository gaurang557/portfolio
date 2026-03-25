import React from 'react'
import { Github, Linkedin, Code } from 'lucide-react';


const Skills = () => {
    const skills = {
    languages: ['Python', 'C#', 'TypeScript', 'MySQL'],
    backend: ['Django','.NET','Node.js', 'Express.js'],
    cloud: ['AWS', 'EC2', 'EKS', 'ECR', 'S3'],
    devops: ['CI/CD Pipelines', 'GitHub Actions', 'Docker', 'Kubernetes', 'Helm',],
    frontend: ['Next.js', 'Angular', 'CSS3'],
    databases: ['PostgreSQL','MongoDB']
  };
  return (
    <div id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h3>
          <div className="skills">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skillcard rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="skillheading text-xl font-bold mb-4 capitalize text-blue-600 flex items-center justify-center gap-2">
                  <Code size={20} /> {category}
                </h4>
                <div className="flex flex-wrap justify-center  gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="skillbutton">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
      </div>
  )
}

export default Skills