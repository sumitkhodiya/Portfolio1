import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-scroll">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Computer Science and Engineering student at Lovely Professional University pursuing my Bachelor of Technology with a CGPA of 7.45.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With expertise in full-stack development, data analysis, and healthcare systems, I specialize in building secure, user-centric applications. 
              I'm proficient in React, Next.JS, Django, and have strong skills in database design with MySQL and Python.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My recent projects include developing a Secure Healthcare Record Management System with OTP-based authentication, 
              consent-driven access control, and comprehensive audit logging for transparency and accountability.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm driven by curiosity about emerging technologies, adaptability in solving complex problems, 
              and a commitment to continuous learning through hands-on projects. I actively participate in hackathons, 
              online coding challenges, and structured learning programs from industry leaders.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">3+</div>
              <p className="text-gray-300">Major Projects</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
              <p className="text-gray-300">Certifications</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">7.45</div>
              <p className="text-gray-300">CGPA</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
              <p className="text-gray-300">Passion for Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
