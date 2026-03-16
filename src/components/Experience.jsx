import React from 'react'
import { Briefcase } from 'lucide-react';


const Experience = () => {
    const experience = [
    {
      title: 'Software Engineer',
      company: 'Accenture',
      location: 'Gurugram',
      period: 'January 2023 - Present',
      highlights: [
        'Developed 100+ .NET components for enterprise application serving 100,000+ users',
        'Created automation tool to upgrade C# ASP.NET to .NET 8.0, saving 500+ engineering hours',
        'Built .NET web application for mass Kubernetes deployment via Helm charts, saving 2 hours daily',
        'Led application modernization and framework migration, resolved 40+ critical issues',
        'Containerized 40+ applications using Docker and deployed to AWS EKS',
        'Developed Helm charts for 5 environments (DEV, INT, TEST, UAT, PROD)',
        'Built 10+ Next.js applications with PostgreSQL integration and authentication',
        'Created 15+ Angular applications with Express.js RESTful APIs and MongoDB'
      ]
    }
  ];
  return (
    <div id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div>
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Work Experience</h3>
          {experience.map((job, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">{job.title}</h4>
                  <p className="text-lg text-gray-700 font-semibold">{job.company} - {job.location}</p>
                  <p className="text-gray-600">{job.period}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-10">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">▹</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Experience