import React from 'react'
import { Github, Linkedin, Code } from 'lucide-react';


const Skills = () => {
    const skills = {
    languages: ['C#', 'C++', 'Python','JavaScript', 'TypeScript', 'SQL'],
    backend: ['.NET Core', 'ASP.NET', 'Django', 'Spring Boot', 'Node.js', 'Express.js'],
    frontend: ['Next.js', 'React', 'Angular', 'Zustand', 'Redux', 'HTML5', 'CSS3', 'Tailwind', 'Material UI'],
    cloud: ['Azure','AWS', 'EC2', 'EKS', 'ECR', 'RDS', 'S3', 'Route53'],
    devops: ['Azure Devops', 'Docker', 'Kubernetes', 'Helm', 'Git', 'CI/CD Pipelines', 'GitHub Actions',],
    databases: ['PostgreSQL','MongoDB']
  };
  return (
    <div id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h3>
          <div className="skills">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skillcard rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold mb-4 capitalize text-blue-600 flex justify-center gap-2">
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