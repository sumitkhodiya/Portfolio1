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
              Sadia Akhtar
            </h1>
            <p className="text-xl text-orange-400 mb-2 font-semibold">🚀 Cloud & Cybersecurity Engineer</p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Passionate cloud engineer and cybersecurity enthusiast with expertise in AWS, Docker, and Linux. 
              Skilled in developing secure applications and automating infrastructure with a focus on cyber threats and threat detection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="./my approved cv.pdf"
                download="Sadia_Akhtar_Resume.pdf"
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
                href="https://github.com/sadia712"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-300 hover:text-orange-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sadia-akhtar-shaikh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-cyan-400 hover:text-orange-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sakhtarshaik@gmail.com"
                className="text-3xl text-red-400 hover:text-orange-400 transition-colors"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+918240906402"
                className="text-3xl text-green-400 hover:text-orange-400 transition-colors"
              >
                <FaPhone />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="hidden md:flex flex-col items-center gap-6 slide-in-right">
            {/* Profile Image - No Outline */}
            <div className="relative w-full max-w-sm mx-auto">
              <img 
                src="./profile.png" 
                alt="Sadia Akhtar" 
                className="w-full h-auto rounded-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
