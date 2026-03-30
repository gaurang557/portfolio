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
        "Designed and Developed a full-stack tool, automating frequent deployments to AWS EKS cluster for non-production environments, increasing deployment speed by 70%",
        "Accelerated api’s performance by 80% by designing and implementing caching in the backend application.",
        "Developed CI/CD pipeline's yaml configurations for ~20 components, managing the image build and image push to AWS ECR, including automated tag increment and vulnerability scanning, increasing developer’s productivity by 50%",
        "Resolved production errors across ~25 components under crucial deadlines through analysing the root causes and fixing application code and helm configuration.",
        "Upgraded 80 legacy web components to latest version of framework through developing a Flask  application, automating manual development steps and dependency version upgrade in project files by fetching dependencies metadata from enterprise nuget feed, saving ~800 developer hours",
        "Delivered 20+ full-stack web applications for production, accelerating the internal product launch by 60% by coding a reusable boilerplate in JavaScript using Express and Angular as frameworks integrated with MongoDB",
        "Restored SQL database integrity by diagnosing cross-environment data mismatches and executing corrective updates across relational tables, recovering broken data pipelines and stabilizing backend services.",
        "Modernized 50+ web pages by refactoring legacy CSS into a modular SASS architecture, improving initial load performance by 60% and enforcing consistent design standards."

      ]
    }
  ];
  return (
    <div id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Work Experience</h3>
          {experience.map((job, index) => (
            <div key={index} className="expitem bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg">
                <div className="expheading">
                  <div className='flex items-center'>
                    <Briefcase className="text-blue-600 mt-1" size={24} />
                      <h4 className="text-2xl font-bold text-gray-900">{job.title}</h4>
                  </div>
                    <p className="text-lg text-gray-700 font-semibold">{job.company} - {job.location}</p>
                    <p className="text-gray-600">{job.period}</p>
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
  )
}

export default Experience
