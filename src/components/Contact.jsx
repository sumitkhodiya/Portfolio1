import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-3xl text-cyan-400 mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">Email</h4>
                  <a
                    href="mailto:sakhtarshaik@gmail.com"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    sakhtarshaik@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-3xl text-green-400 mt-1">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">Phone</h4>
                  <a
                    href="tel:+918240906402"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    +91-8240906402
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="text-3xl text-red-400 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">Location</h4>
                  <p className="text-gray-300">
                    Punjab, India
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="text-3xl text-cyan-400 mt-1">
                  <FaLinkedin />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/sadia-akhtar-shaikh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    linkedin.com/in/sadia-akhtar-shaikh
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-4">
                <div className="text-3xl text-gray-300 mt-1">
                  <FaGithub />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-400 mb-1">GitHub</h4>
                  <a
                    href="https://github.com/sadia712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    github.com/sadia712
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Links */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://linkedin.com/in/sumitkumar0112"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/sumitkhodiya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:sumitkhodiya598@gmail.com"
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:+918901193960"
                className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <FaPhone size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-orange-400 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:border-orange-400 focus:outline-none transition-colors placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-orange-400 font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:border-orange-400 focus:outline-none transition-colors placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-orange-400 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:border-orange-400 focus:outline-none transition-colors placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-orange-400 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-600 bg-gray-700 text-white rounded-lg focus:border-orange-400 focus:outline-none transition-colors resize-none placeholder-gray-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                <FaPaperPlane /> Send Message
              </button>

              {submitted && (
                <div className="bg-green-600/30 border-2 border-green-500 text-green-300 px-4 py-3 rounded-lg">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
