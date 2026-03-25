import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code, Contact } from 'lucide-react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ContactComp from './components/Contact';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navigation */}
        <div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex desktopnav">
              {['home', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'].map((section) => (
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['home', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'].map((section) => (
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
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <ContactComp />
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="mx-auto text-center">
          <p>&copy; 2026 Gaurang Agarwal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;