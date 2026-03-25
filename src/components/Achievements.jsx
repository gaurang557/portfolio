import React from 'react'
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const Achievements = () => {
    const achievements = [
    {
      title: 'Star of the Month',
      date: 'October 2024',
      description: 'Awarded for building automation tool to upgrade legacy .NET applications to .NET Core 8'
    },
    {
      title: 'Impact Creator',
      date: 'Mar 2025',
      description: 'Selected for high-impact technical contributions with monetary award'
    }
  ];
  return (
      <div id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl achheading font-bold text-center text-gray-900">Achievements</h3>
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
  )
}

export default Achievements