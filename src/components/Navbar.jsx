import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="fixed w-full top-0 bg-gray-950/95 backdrop-blur-md shadow-lg z-50 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text cinema-glow">SK</h1>
            <span className="ml-2 text-xs text-orange-400">Full-Stack Dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-orange-400 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-orange-400 hover:text-cyan-400"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 pb-4 border-t border-cyan-500/30">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="block px-4 py-2 text-gray-300 hover:bg-cyan-500/20 hover:text-orange-400 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
