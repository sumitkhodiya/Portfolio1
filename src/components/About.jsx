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
              I'm a passionate Full-Stack Developer currently pursuing my Bachelor of Technology 
              in Computer Science and Engineering at Lovely Professional University with a CGPA of 7.45.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in web development and data analysis, I specialize in building 
              scalable applications using React, Next.js, and Django. I'm particularly interested in 
              creating user-centric solutions that solve real-world problems.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey includes developing a Secure Healthcare Record Management System with 
              OTP-based authentication and consent-driven access, designing database systems that 
              automated critical business processes, and analyzing large datasets to extract 
              actionable insights.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm driven by curiosity, adaptability, and a commitment to continuous self-improvement. 
              I actively contribute to developer communities and enjoy tackling challenging problems 
              through coding platforms and hackathons.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">3+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
              <p className="text-gray-300">Certifications</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">6</div>
              <p className="text-gray-300">Technical Skills</p>
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
