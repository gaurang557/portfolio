import React from 'react'
import { Mail, Phone} from 'lucide-react';

const Contact = () => {
  return (
      <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
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
      </div>
  )
}

export default Contact