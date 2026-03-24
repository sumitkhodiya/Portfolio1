import React from 'react'
import { FaCode } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C++', 'Python', 'C', 'Java']
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS (EC2, S3, IAM, VPC, CloudWatch)', 'Docker', 'Linux', 'CI/CD Pipelines', 'IaC']
    },
    {
      category: 'Tools & Platforms',
      skills: ['MySQL', 'Git', 'GitHub', 'HTML', 'CSS', 'MS Office']
    },
    {
      category: 'Soft Skills',
      skills: ['Team Player', 'Project Management', 'Leadership', 'Adaptability']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-effect p-8 rounded-lg hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-2xl text-orange-400" />
                <h3 className="text-2xl font-bold text-orange-400">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="bg-gradient-to-r from-cyan-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency */}
        <div className="mt-12 glass-effect rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text cinema-glow">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'React & Next.js', level: 85 },
              { name: 'Python & Django', level: 80 },
              { name: 'Database Design', level: 75 },
              { name: 'Full-Stack Development', level: 80 },
              { name: 'Data Analysis', level: 70 },
              { name: 'UI/UX & CSS', level: 75 }
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-300">{skill.name}</span>
                  <span className="text-orange-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-600 to-orange-400 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
