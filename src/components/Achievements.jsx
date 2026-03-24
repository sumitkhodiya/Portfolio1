import React from 'react'
import { FaStar, FaTrophy, FaUsers, FaLaptop } from 'react-icons/fa'

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-orange-400" />,
      title: 'Solved 150+ LeetCode Problems',
      description: 'Strengthening expertise in data structures, algorithms, and logical problem-solving through consistent practice on LeetCode, demonstrating strong competitive programming abilities.',
      color: 'yellow'
    },
    {
      icon: <FaStar className="text-4xl text-orange-400" />,
      title: '3rd Position in PSBTE',
      description: 'Ranked 3rd across the state in Diploma - Information Technology (Punjab State Board of Technical Education), demonstrating exceptional academic performance and dedication.',
      color: 'blue'
    },
    {
      icon: <FaUsers className="text-4xl text-cyan-400" />,
      title: 'Cybersecurity Training',
      description: 'Completed practical Cyber Security training from CipherSchools covering security fundamentals, vulnerability analysis, ethical hacking basics, and real-world threat identification.',
      color: 'green'
    },
    {
      icon: <FaLaptop className="text-4xl text-orange-400" />,
      title: 'Web Development Certification',
      description: 'Completed hands-on Web Development training from VPRO INFOTECH covering frontend and backend fundamentals, responsive UI design, API integration, and building dynamic applications.',
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
            { number: '150+', label: 'LeetCode Problems' },
            { number: '70%', label: 'Malware Detection' },
            { number: '95%+', label: 'Face Recognition Accuracy' },
            { number: '7.5', label: 'CGPA' }
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
