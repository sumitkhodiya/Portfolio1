import React from 'react'
import { FaStar, FaTrophy, FaUsers, FaLaptop } from 'react-icons/fa'

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-orange-400" />,
      title: 'Hackathon Participation',
      description: 'Participated in national-level and inter-college hackathons, developing innovative solutions under time constraints and collaborating with diverse teams.',
      color: 'yellow'
    },
    {
      icon: <FaStar className="text-4xl text-orange-400" />,
      title: 'Continuous Learning',
      description: 'Completed structured learning programs from industry leaders including Microsoft Learn, Coursera, and Google to enhance technical expertise.',
      color: 'blue'
    },
    {
      icon: <FaUsers className="text-4xl text-cyan-400" />,
      title: 'Community Contribution',
      description: 'Actively contributed to developer communities and participated in technical events, sharing knowledge and collaborating with peers.',
      color: 'green'
    },
    {
      icon: <FaLaptop className="text-4xl text-orange-400" />,
      title: 'Coding Excellence',
      description: 'Participated in online coding platforms and challenges, demonstrating problem-solving skills and competitive programming abilities.',
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
            { number: '10+', label: 'Competitions' },
            { number: '50K+', label: 'Data Records Analyzed' },
            { number: '100%', label: 'Automation Success' },
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
