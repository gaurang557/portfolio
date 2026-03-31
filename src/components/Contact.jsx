import React from 'react'
import { Mail, Phone} from 'lucide-react';

const Contact = () => {
  return (
      <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>
          <div className="conspan flex flex-col mt-10 sm:flex-row justify-center gap-6 items-center">
            <a href="mailto:gaurangagarwal557@gmail.com" 
               className="conspan flex items-center gap-2 bg-white px-6 py-3 rounded-lg hover:bg-gray-100">
              <Mail size={20} /> gaurangagarwal557@gmail.com
            </a>
            <a href="tel:+919654325212"
               className="conspan flex items-center gap-2 bg-white text-black-600 px-6 py-3 rounded-lg hover:bg-gray-100">
              <Phone size={20} /> +91 9654325212
            </a>
          </div>
      </div>
  )
}

export default Contact