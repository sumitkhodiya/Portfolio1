import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Certifications() {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      name: 'Responsive Web Design',
      issuer: 'Developer Certification',
      date: 'November 28, 2023',
      hours: 'approximately 280 hours of work',
      image: '/cert3.png'
    },
    {
      id: 2,
      name: 'Computational Theory: Language Principle & Finite Automata Theory',
      issuer: 'Infosys Springguard',
      date: 'August 30, 2025',
      image: '/cert2.png'
    },
    {
      id: 3,
      name: 'Computer Communications',
      issuer: 'Coursera',
      date: 'November 7, 2024',
      image: '/cert1.png'
    }
  ])

  const [previewImage, setPreviewImage] = useState(null)

  const removeImage = (certId) => {
    setCertificates(certificates.map(cert =>
      cert.id === certId ? { ...cert, image: null } : cert
    ))
  }

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="glass-effect rounded-lg overflow-hidden hover-lift border border-cyan-600/30">
              {/* Image Display Area */}
              <div className="relative bg-gray-700 h-48 flex items-center justify-center">
                {cert.image && (
                  <div className="relative w-full h-full">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90"
                      onClick={() => setPreviewImage(cert.image)}
                    />
                  </div>
                )}
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-2">{cert.name}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                {cert.hours && <p className="text-gray-400 text-sm italic">{cert.hours}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
              <button
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 text-white bg-red-600 p-2 rounded-full hover:bg-red-700"
              >
                <FaTimes size={24} />
              </button>
              <img src={previewImage} alt="Certificate Preview" className="w-full rounded-lg" />
            </div>
          </div>
        )}

        {/* Info Card */}
        <div className="mt-12 bg-cyan-600/20 border-l-4 border-cyan-400 p-6 rounded-lg">
          <h3 className="font-bold text-orange-400 mb-2">🏆 Professional Certifications</h3>
          <p className="text-gray-300">
            Click on any certification to view it in full size. These certifications represent my professional development and expertise in various domains.
          </p>
        </div>
      </div>
    </section>
  )
}
