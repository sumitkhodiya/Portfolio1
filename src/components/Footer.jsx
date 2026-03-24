import React from 'react'
import { FaHeart, FaArrowUp } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-cyan-600/30 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">SK</h3>
            <p className="text-gray-400">
              Full-Stack Developer passionate about creating innovative solutions with Python and JavaScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-orange-400 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <ScrollLink to="hero" smooth={true} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors">Home</ScrollLink>
              <ScrollLink to="about" smooth={true} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors">About</ScrollLink>
              <ScrollLink to="projects" smooth={true} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors">Projects</ScrollLink>
              <ScrollLink to="contact" smooth={true} className="text-gray-400 hover:text-orange-400 cursor-pointer transition-colors">Contact</ScrollLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-orange-400 mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Web Development</p>
              <p className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Full-Stack Solutions</p>
              <p className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Database Design</p>
              <p className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">Data Analysis</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg text-orange-400 mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong className="text-orange-400">Email:</strong> <br />
                sumitkhodiya598@gmail.com
              </p>
              <p className="text-gray-400">
                <strong className="text-orange-400">Phone:</strong> <br />
                +91-8901193960
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-2 mb-4 md:mb-0">
            Made with <FaHeart className="text-red-500" /> by Sumit Kumar © {currentYear}
          </p>
          
          <ScrollLink
            to="hero"
            smooth={true}
            className="bg-gradient-to-r from-cyan-600 to-orange-500 hover:from-cyan-500 hover:to-orange-400 text-white p-3 rounded-full cursor-pointer transition-all"
            title="Back to top"
          >
            <FaArrowUp size={20} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  )
}
