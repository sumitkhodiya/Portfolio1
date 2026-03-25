import React from 'react'
import { FaStar, FaTrophy, FaUsers, FaLaptop } from 'react-icons/fa'

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-orange-400" />,
      title: 'Hackathon Participant',
      description: 'Actively participated in national-level and inter-college hackathons, demonstrating innovation and problem-solving skills through real-world project development.',
      color: 'yellow'
    },
    {
      icon: <FaStar className="text-4xl text-orange-400" />,
      title: 'Structured Learning Programs',
      description: 'Successfully completed comprehensive learning programs from industry leaders including Microsoft Learn, Coursera, and Google, expanding technical expertise and industry knowledge.',
      color: 'blue'
    },
    {
      icon: <FaUsers className="text-4xl text-cyan-400" />,
      title: 'Developer Community Contributor',
      description: 'Actively contributed to developer communities and technical events, sharing knowledge and collaborating with peers on cutting-edge technology projects.',
      color: 'green'
    },
    {
      icon: <FaLaptop className="text-4xl text-orange-400" />,
      title: 'Online Coding Challenges',
      description: 'Regularly participated in online coding platforms and challenges, consistently improving problem-solving abilities and competitive programming skills.',
      color: 'purple'
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="glass-effect p-8 rounded-lg hover-lift border-l-4 border-cyan-600 hover:border-orange-400 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-orange-400 mb-3">{achievement.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '50K+', label: 'Records Analyzed' },
            { number: '70%', label: 'Data Quality Improved' },
            { number: '10+', label: 'Visualizations Created' },
            { number: '7.45', label: 'CGPA' }
          ].map((item, idx) => (
            <div key={idx} className="text-center glass-effect p-6 rounded-lg border border-cyan-600/30">
              <div className="text-3xl font-bold text-orange-400 mb-2">{item.number}</div>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
