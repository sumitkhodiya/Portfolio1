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
              I'm a passionate Cloud and Cybersecurity Engineer pursuing my Bachelor of Technology 
              in Computer Science and Engineering at Lovely Professional University with a CGPA of 7.5.
            </p>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With expertise in AWS cloud technologies, Docker containerization, and cybersecurity fundamentals, 
              I specialize in building secure, automated infrastructure and developing detection tools for malicious threats. 
              I'm particularly interested in securing applications and identifying vulnerabilities through ethical hacking practices.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey includes developing a Static Malware Analyzer that detects malicious files with 
              automated hash computation across 1,000+ malware signatures, and building a real-time face detection 
              attendance system achieving 95%+ accuracy using OpenCV and LBPH.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm driven by curiosity about cybersecurity threats, adaptability in cloud technologies, 
              and a commitment to continuous learning through hands-on projects and certifications. 
              I actively engage in problem-solving across platforms like LeetCode with 150+ problems solved.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">2</div>
              <p className="text-gray-300">Major Projects</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">3</div>
              <p className="text-gray-300">Certifications</p>
            </div>
            <div className="glass-effect p-8 rounded-lg text-center hover-lift border border-cyan-600/30">
              <div className="text-4xl font-bold text-orange-400 mb-2">150+</div>
              <p className="text-gray-300">LeetCode Problems</p>
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
