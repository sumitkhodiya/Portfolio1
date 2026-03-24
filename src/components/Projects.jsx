import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'Secure Healthcare Record Management System',
      date: 'February 2026',
      description: 'A patient-centric healthcare platform with full control over medical records, featuring OTP-based authentication, consent-driven access, and comprehensive audit logs.',
      highlights: [
        'OTP-based secure authentication for patients, doctors, and administrators',
        'Consent-driven access system with patient approval',
        'Time-bound and revocable access permissions',
        'Integrated audit logs for transparency and accountability',
        'Emergency access workflows with mandatory logging'
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Security'],
      github: 'https://github.com/sumitkhodiya'
    },
    {
      title: 'Exam Invigilation Management System',
      date: 'June 2025 - August 2025',
      description: 'Automated database system for invigilator-to-exam scheduling with conflict detection and real-time reporting.',
      highlights: [
        'Automated 100% of invigilator-to-exam scheduling',
        '4+ optimized relational tables improving retrieval speed by 30%',
        'Conflict-detection logic reducing errors by 90%',
        'Real-time reports cutting administrative workload by 40%'
      ],
      tags: ['SQL', 'Database Design', 'Python'],
      github: 'https://github.com/sumitkhodiya'
    },
    {
      title: 'Exploratory Data Analysis - Mortality Trends',
      date: 'November 2023 - December 2024',
      description: 'Comprehensive analysis of 50,000+ records identifying trends and patterns in mortality data with advanced visualizations.',
      highlights: [
        'Analyzed 50,000+ records to identify trends and patterns',
        'Cleaned and processed datasets, reducing issues by 70%',
        'Created 10+ visualizations highlighting key risk factors',
        'Improved reporting efficiency by 40%'
      ],
      tags: ['Python', 'Data Analysis', 'Visualization', 'SQL'],
      github: 'https://github.com/sumitkhodiya'
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
