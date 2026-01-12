import React from 'react'
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
      {
      title: 'Analytics Dashboard',
      description: "A web-based dashboard application that visualizes visits on my portfolio \
      and amount of api hits on .NET Google Analytics Api (which fetches data from Google Analytics) \
      using interactive charts and graphs. Built with React.js for the frontend and .NET Core Web API for the backend.",
      technologies: ['React.js', '.NET'],
      githubUrl: 'https://github.com/gaurang557/analyticsportal',
      liveUrl: 'https://gaurang557.github.io/analyticsportal' 
    },
    {
      title: '.NET Google Analytics Api',
      description: "The API which serves as a bridge between the Google Analytics \
      and the Analytics Dashboard, built using .NET Core Web API. It fetches data \
      from Google Analytics and provides endpoints for the dashboard to consume.",
      technologies: ['.NET'],
      githubUrl: 'https://github.com/gaurang557/analyticsapi',
      liveUrl: 'https://analyticsapi-6qg1.onrender.com/swagger'
    },
    {
      title: 'Movie Explorer Angular App',
      description: "Created an Angular application which fetches a list of movies \
      from OMDB Api and displays them in a user-friendly interface. Implemented search functionality",
      technologies: ['Angular', 'Node.js'],
      githubUrl: 'https://github.com/gaurang557/angular_omdb_app',
      liveUrl: 'https://gaurang557.github.io/angular_omdb_app/index' 
    }
  ];
  return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && <a 
                    href={project.githubUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github size={18} className='text-gray-100' /> <span className="text-gray-100">Code</span>
                  </a>
                  }
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} className="text-gray-100" /> <span className="text-gray-100">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects