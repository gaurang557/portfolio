import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experience = [
    {
      title: 'Software Engineer II',
      company: 'Accenture',
      duration: 'Mar 2025 - Present',
      domain: 'Full Stack Development / Cloud Engineering',
      techStack: ['Django', 'Flask', 'AWS', 'SQL', 'React']
    },
    {
      title: 'Software Engineer I',
      company: 'Accenture',
      duration: 'Jan 2023 - Mar 2025',
      domain: 'Full Stack Development / Cloud Engineering',
      techStack: ['Django', 'Angular', '.NET', 'Node.js', 'Express', 'MongoDB']
    }
  ];

  return (
    <div id="experience" className="py-20 px-6">
      <h3 className="exp-title">Work Experience (3+ years)</h3>

      <div className="exp-grid">
        {experience.map((job, index) => (
          <div key={index} className="exp-card">
            
            <div className="exp-header">
              <Briefcase className="exp-icon" size={22} />
              <h4>{job.title}</h4>
            </div>

            {/* 🔥 Highlighted Company */}
            <p className="exp-company">{job.company}</p>

            {/* Meta Info */}
            <div className="exp-meta">
              <span>{job.duration}</span>
            </div>

            <p className="exp-domain">
              <span>Domain:</span> {job.domain}
            </p>

            <div className="exp-tech">
              {job.techStack.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;