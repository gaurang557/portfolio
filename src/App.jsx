import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['C#', 'C++', 'Python','JavaScript', 'TypeScript', 'SQL'],
    backend: ['.NET Core', 'ASP.NET', 'Django', 'Spring Boot', 'Node.js', 'Express.js'],
    frontend: ['Next.js', 'React', 'Angular', 'Zustand', 'Redux', 'HTML5', 'CSS3', 'Tailwind', 'Material UI'],
    cloud: ['Azure', 'Azure DevOps','AWS', 'EC2', 'EKS', 'ECR', 'RDS', 'S3', 'Route53'],
    devops: ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'CI/CD Pipelines', 'Git'],
    databases: ['PostgreSQL','MongoDB']
  };

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

  const achievements = [
    {
      title: 'Star of the Month',
      date: 'October 2024',
      description: 'Awarded for building automation tool to upgrade legacy .NET applications to .NET Core 8'
    },
    {
      title: 'Impact Creator',
      date: '2024',
      description: 'Selected for high-impact technical contributions with monetary award'
    }
  ];

  const projects = [
    {
      title: 'Movie Explorer Angular App',
      description: "Created an Angular application which fetches a list of movies \
      from OMDB Api and displays them in a user-friendly interface. Implemented search functionality",
      technologies: ['Angular', 'Node.js'],
      githubUrl: 'https://github.com/gaurang557/project-name',
      liveUrl: 'https://gaurang557.github.io/angular_omdb_app/index' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gaurang Agarwal
              </h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-100'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 px-4 hover:bg-gray-100 capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Software Engineer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Specializing in Full-Stack Development and Cloud Architecture
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://github.com/gaurang557" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              <Github className="text-gray-100" size={20} /> <span className='text-gray-100'>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/gaurang-agarwal-512a4b197" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <Linkedin className="text-gray-100" size={20} /> <span className='text-gray-100'>LinkedIn</span>
            </a>
            <a href="mailto:gaurangagarwal557@gmail.com"
               className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              <Mail className='text-gray-100' size={20} /> <span className='text-gray-100'>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h3>
          <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-bold mb-4 capitalize text-blue-600 flex items-center gap-2">
                  <Code size={20} /> {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
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
      </section>

      {/* Projects Section */}
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
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github size={18} className='text-gray-100' /> <span className="text-gray-100">Code</span>
                  </a>
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

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Award className="text-yellow-500" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{achievement.date}</p>
                    <p className="text-gray-700">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
          <p className="text-xl mb-8">I'm always open to discussing new projects and opportunities</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <a href="mailto:gaurangagarwal557@gmail.com" 
               className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Mail size={20} /> gaurangagarwal557@gmail.com
            </a>
            <a href="tel:+919654325212"
               className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              <Phone size={20} /> +91 9654325212
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2026 Gaurang Agarwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;