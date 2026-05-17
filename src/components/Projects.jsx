import { useState, useEffect } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'NanoLink',
      description:
        'A Web Service providing URL shortening and redirecting to end users, with async processing for analytics updates in the database.',
      technologies: ['Django', 'Redis', 'Celery', 'PostgreSQL'],
      githubUrl: 'https://github.com/gaurang557/analyticsportal',
      liveUrl: 'https://nanolink.sbs',
      diagram: 'systemdiagrams/urlshortener.png',
      screenshots: [],
    },
    {
      title: 'LLM Orchestrator',
      description:
        'An LLM protection tool with ability to use multiple LLM\'s with advanced LLM interaction features',
      technologies: ['SpringBoot', 'PostgreSQL', 'Groq AI Api', 'Authorization'],
      githubUrl: 'https://github.com/gaurang557/llmwrapper',
      liveUrl: '',
      diagram: '',
      screenshots: ['llm/1.png', 'llm/2.png', 'llm/3.png'],
    },
    {
      title: 'RAG Studio',
      description:
        'A Retreival Augmented Generation application which integrates with Groq LLM and answers the questions from a document\'s context',
      technologies: ['FastAPI', 'PostgreSQL', 'In-memory caching', 'Angular'],
      githubUrl: 'https://github.com/gaurang557/rag',
      liveUrl: '',
      diagram: '',
      screenshots: ['rag/4.png', 'rag/1.png', 'rag/2.png', 'rag/3.png'],
    },
    {
      title: 'Analytics API',
      description:
        'A .NET Core Web API that bridges Google Analytics and the Analytics Dashboard. Fetches GA data and exposes REST endpoints for dashboard consumption.',
      technologies: ['.NET', 'Google Analytics', 'Redis'],
      githubUrl: 'https://github.com/gaurang557/analyticsapi',
      liveUrl: '',
      diagram: '',
      screenshots: [],
    },
    {
      title: 'Analytics Dashboard',
      description:
        'A React dashboard visualising portfolio visits and .NET API hits using interactive charts and graphs, backed by Google Analytics data.',
      technologies: ['React', '.NET Core'],
      githubUrl: 'https://github.com/gaurang557/analyticsportal',
      liveUrl: 'https://gaurang557.github.io/analyticsportal',
      diagram: '',
      screenshots: [],
    },
    {
      title: 'Movie Explorer Angular App',
      description:
        'An Angular application that fetches movies from the OMDB API and displays them in a user-friendly interface with search functionality.',
      technologies: ['Angular', 'Node.js', 'OMDB API'],
      githubUrl: 'https://github.com/gaurang557/angular_omdb_app',
      liveUrl: 'https://gaurang557.github.io/angular_omdb_app/index',
      diagram: '',
      screenshots: [],
    },
  ];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setSelectedProject(null);
  };

  return (
    <div id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <h3 className="text-4xl font-bold text-center text-gray-900 mb-2">Projects</h3>
      <p className="text-center text-gray-500 mb-8 text-sm">Click any card to explore details</p>

      <div className="projectpanel">
        {projects.map((project, index) => (
          <div
            key={index}
            className="projectcard"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
          >
            <div className="card-accent" />
            <div className="card-body">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
              <p className="text-gray-600 text-sm flex-grow mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="techbutton">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <span className="view-details-btn">View Details →</span>
              <div className="card-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="card-icon-btn"
                    title="View Code"
                  >
                    <Github size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="card-icon-btn card-icon-btn--blue"
                    title="Live Demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-container">
            {/* Header */}
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="modal-close-btn"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* About */}
              <section>
                <p className="modal-section-title">About</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {selectedProject.description}
                </p>
              </section>

              {/* Tech Stack */}
              <section>
                <p className="modal-section-title">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="techbutton">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <section>
                  <p className="modal-section-title">Links</p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link-btn modal-link-btn--dark"
                      >
                        <Github size={15} /> View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-link-btn modal-link-btn--blue"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </section>
              )}

              {/* System Design Diagram */}
              {selectedProject.diagram && (
                <section>
                  <p className="modal-section-title">System Design</p>
                  <img
                    src={selectedProject.diagram}
                    alt={`${selectedProject.title} system design`}
                    className="w-full rounded-xl border border-gray-200 object-contain"
                  />
                </section>
              )}

              {/* Screenshots */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <section>
                  <p className="modal-section-title">Screenshots</p>
                  <div className="flex flex-col gap-4">
                    {selectedProject.screenshots.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        className="w-full rounded-xl border border-gray-200"
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
