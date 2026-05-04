import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['home', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];

  return (
    <div>
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        {/* Desktop Navigation */}
        <div className="desktopnav hidden md:flex">
          {navItems.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize hover:text-blue-600 transition-colors ${
                activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between px-4 py-3">
          <span className="text-lg font-bold text-gray-900">Gaurang Agarwal</span>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white pb-2">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-3 px-6 capitalize transition-colors hover:bg-gray-50 ${
                  activeSection === section ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
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
