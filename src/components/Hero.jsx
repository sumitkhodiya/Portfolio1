import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-scroll">
            <h1 className="text-6xl font-bold mb-4 gradient-text cinema-glow leading-tight">
              Sumit Kumar
            </h1>
            <p className="text-xl text-orange-400 mb-2 font-semibold">🚀 Full-Stack Developer</p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Full-Stack Developer passionate about building scalable web applications and solving complex problems. 
              Experienced in React, Next.js, Django, and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/sumitcv.pdf"
                download="Sumit_Kumar_Resume.pdf"
                className="btn-primary flex items-center justify-center gap-2 order-first"
              >
                <FaDownload /> Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 items-center">
              <span className="text-gray-400 font-medium">Connect:</span>
              <a
                href="https://github.com/sumitkhodiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-orange-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sumitkumar0112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-cyan-400 hover:text-orange-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sumitkhodiya598@gmail.com"
                className="text-3xl text-red-400 hover:text-orange-400 transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+918901193960"
                className="text-3xl text-green-400 hover:text-orange-400 transition-colors"
              >
                <FaPhone />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="hidden md:flex flex-col items-center gap-6 slide-in-right">
            {/* Profile Image - No Outline */}
            <div className="relative w-full max-w-2xl mx-auto">
              <img 
                src="/profile.png" 
                alt="Sumit Kumar" 
                className="w-full h-auto rounded-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
