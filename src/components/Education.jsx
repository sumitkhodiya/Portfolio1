import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University, Punjab, India',
      duration: 'August 2023 - Present',
      cgpa: '7.45',
      details: [
        'Focus on Full-Stack Development and Data Analysis',
        'Active participant in technical projects and workshops',
        'Member of coding and development communities'
      ]
    },
    {
      degree: 'Intermediate',
      field: 'Science',
      institution: 'Rao Pahlad Singh Ser. Sec. School, Mahendergarh, Haryana',
      duration: 'April 2021 - March 2022',
      percentage: 'Passed',
      details: [
        'Strong foundation in Physics, Chemistry, and Mathematics',
        'Participated in science exhibitions and competitions'
      ]
    },
    {
      degree: 'Matriculation',
      field: 'Science',
      institution: 'Rao Pahlad Singh Ser. Sec. Academy, Mahendergarh, Haryana',
      duration: 'April 2019 - March 2020',
      percentage: 'Passed',
      details: [
        'Strong academic foundation in core subjects',
        'Developed problem-solving and analytical skills'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Education</h2>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-effect p-8 rounded-lg hover-lift border-l-4 border-cyan-600">
              <div className="flex items-start gap-6">
                <div className="text-4xl text-orange-400 flex-shrink-0">
                  <FaGraduationCap />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-cyan-400 font-semibold mb-2">{edu.field}</p>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-4">{edu.duration}</p>
                  
                  {edu.cgpa && (
                    <p className="text-gray-300 font-medium mb-4">CGPA: <span className="text-orange-400 font-bold">{edu.cgpa}</span></p>
                  )}

                  <div className="space-y-2">
                    {edu.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-gray-300 flex items-start gap-3">
                        <span className="text-orange-400 font-bold mt-1">→</span>
                        <span>{detail}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Timeline */}
        <div className="mt-12 glass-effect rounded-lg p-8 border border-cyan-600">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text cinema-glow">Academic Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-600 to-orange-400"></div>
            
            <div className="space-y-8">
              {[
                { year: '2019-2020', label: 'Matriculation' },
                { year: '2021-2022', label: 'Intermediate' },
                { year: '2023-Present', label: 'Bachelor\'s Degree (CSE)' }
              ].map((item, idx) => (
                <div key={idx} className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} w-full`}>
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gradient-to-r from-cyan-600 to-orange-500 text-white rounded-lg p-4">
                      <p className="font-bold">{item.year}</p>
                      <p className="text-sm">{item.label}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-800 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
