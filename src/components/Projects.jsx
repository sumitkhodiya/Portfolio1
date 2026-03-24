import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Static Malware Analyzer',
      date: 'May 2025 - July 2025',
      description: 'Developed a Python-based static analysis tool to detect malicious files by cross-referencing file hashes against a database of 1,000+ known malware signatures.',
      highlights: [
        'Engineered automated hash computation using MD5, SHA-1, and SHA-256, reducing manual file verification time by approximately 70%',
        'Implemented a structured reporting system (CSV/JSON) that increased accuracy of detection for known threats by eliminating human error during signature matching',
        'Cross-referenced file hashes against 1,000+ malware signatures for comprehensive threat detection',
        'Automated malware detection process with zero false positives in testing'
      ],
      tags: ['Python', 'Hashlib', 'Malware Detection', 'File Handling', 'Automation'],
      github: 'https://github.com/sadia712'
    },
    {
      title: 'Attendance Management System',
      date: 'November 2024 - February 2025',
      description: 'Built a real-time face detection system utilizing OpenCV and LBPH that maintains an accuracy rate of 95%+ under consistent lighting conditions.',
      highlights: [
        'Built a real-time face detection system utilizing OpenCV and LBPH achieving 95%+ accuracy under consistent lighting conditions',
        'Designed a high-performance dataset creation module capable of capturing and processing 50+ facial images per user for model training',
        'Automated attendance logging into CSV/XLS formats, reducing manual entry time from minutes to milliseconds per person',
        'Implemented multi-threading for real-time performance optimization'
      ],
      tags: ['Python', 'OpenCV', 'Kivy', 'NumPy', 'Pandas', 'LBPH'],
      github: 'https://github.com/sadia712'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-effect rounded-lg overflow-hidden hover-lift border border-cyan-600/30">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-400 font-medium">{project.date}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-700 hover:bg-orange-600 rounded-full transition-all text-gray-300 hover:text-white"
                      title="View on GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-yellow-400 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-gray-300">
                        <span className="text-orange-400 font-bold">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-cyan-600/30 border border-cyan-600/50 text-cyan-300 px-3 py-1 rounded-full text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
