import { useState } from 'react';
import React from 'react'
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [selectedDiagram, setSelectedDiagram] = useState(null);
    const projects = [
      {
        title: 'NanoLink',
        description: "A Web Service to provide the URL shortening and redirecting\
         service to end users, enabled async processing for analytics updation in database",
        technologies: ['Django', 'redis', 'celery', 'postgres'],
        githubUrl: 'https://github.com/gaurang557/analyticsportal',
        liveUrl: 'https://nanolink.sbs',
        diagram: 'systemdiagrams/urlshortener.png'
      },
      {
      title: 'Analytics Api',
      description: "The API which serves as a bridge between the Google Analytics \
      and the Analytics Dashboard, built using .NET Core Web API. It fetches data \
      from Google Analytics and provides endpoints for the dashboard to consume.",
      technologies: ['.NET', 'google analytics','redis'],
      githubUrl: 'https://github.com/gaurang557/analyticsapi',
      liveUrl: 'https://analyticsapi-6qg1.onrender.com/swagger',
      diagram: ''
    },
      {
      title: 'Analytics Dashboard',
      description: "A web-based dashboard application that visualizes visits on my portfolio \
      and amount of api hits on .NET Google Analytics Api (which fetches data from Google Analytics) \
      using interactive charts and graphs. Built with React.js for the frontend and .NET Core Web API for the backend.",
      technologies: ['React'],
      githubUrl: 'https://github.com/gaurang557/analyticsportal',
      liveUrl: 'https://gaurang557.github.io/analyticsportal',
      diagram: ''
    },
    {
      title: 'Movie Explorer Angular App',
      description: "Created an Angular application which fetches a list of movies \
      from OMDB Api and displays them in a user-friendly interface. Implemented search functionality",
      technologies: ['Angular', 'Node.js'],
      githubUrl: 'https://github.com/gaurang557/angular_omdb_app',
      liveUrl: 'https://gaurang557.github.io/angular_omdb_app/index',
      diagram: ''
    }
  ];
  return (
      <div id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center text-gray-900">Projects</h3>
          <div className="projectpanel">
            {projects.map((project, index) => (
              <div key={index} className="projectcard bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h4 className="text-2xl font-bold text-gray-900 ">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div>
                  <div className="technologies flex flex-wrap gap-2">
                    <h6 className='text-gray-900 font-bold'>Technologies: </h6>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="techbutton">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 justify-center">
                    <a 
                      href={project.githubUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{width: "fit-content"}}
                      className="flex socialbutton items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Github size={18} className='text-gray-100' /> <span className="text-gray-100">Code</span>
                    </a>
                    <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{width: "fit-content"}}
                        className="flex socialbutton items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} className="text-gray-100" /> <span className="text-gray-100">Live Demo</span>
                      </a>
                      {project.diagram && <button
                        onClick={() => setSelectedDiagram(project.diagram)}
                        style={{width: "fit-content"}}
                        className="flex socialbutton items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        System Design
                      </button>}
                  </div>
                </div>

              </div>
            ))}
          </div>
          {selectedDiagram && (
            // <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="relative bg-white p-4 rounded-xl max-w-5xl w-full">
                
                <button
                  onClick={() => setSelectedDiagram(null)}
                  className="absolute top-3 right-3 z-50 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black"
                >
                  ✕
                </button>

                <img
  src={selectedDiagram}
  alt="System Design"
  className="max-h-[80vh] w-auto mx-auto rounded-lg object-contain"
/>

              </div>

            </div>
          )}
      </div>
  )
}

export default Projects