'use client';
import { useState } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
    {
        icon: '📧',
        label: 'Email',
        value: 'sumitkhodiya598@gmail.com',
        href: 'mailto:sumitkhodiya598@gmail.com',
    },
    {
        icon: '🎓',
        label: 'University',
        value: 'Lovely Professional University',
        href: 'https://www.lpu.in',
    },
    {
        icon: '💼',
        label: 'GitHub',
        value: 'github.com/sumitkhodiya',
        href: 'https://github.com/sumitkhodiya',
    },
    {
        icon: '🔗',
        label: 'LinkedIn',
        value: 'linkedin.com/in/sumitkumar0112',
        href: 'https://www.linkedin.com/in/sumitkumar0112',
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={`glow-orb ${styles.orb1}`} />
            <div className={`glow-orb ${styles.orb2}`} />
            <div className={styles.container}>
                <p className="section-title">Get In Touch</p>
                <p className="section-subtitle">Let&apos;s work together or just say hello!</p>

                <div className={styles.grid}>
                    {/* Left: Info */}
                    <div className={styles.left}>
                        <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                            <h3 className={styles.infoHeading}>Let&apos;s Connect</h3>
                            <p className={styles.infoText}>
                                I&apos;m currently looking for new opportunities. Whether you have a question,
                                a project idea, or just want to say hi — feel free to reach out!
                            </p>

                            <div className={styles.contactList}>
                                {contactInfo.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.contactItem}
                                        id={`contact-${item.label.toLowerCase()}`}
                                    >
                                        <div className={styles.contactIconWrap}>
                                            <span className={styles.contactIcon}>{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className={styles.contactLabel}>{item.label}</p>
                                            <p className={styles.contactValue}>{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Availability badge */}
                            <div className={styles.availBadge}>
                                <span className={styles.avDot} />
                                <span>Available for internships & projects</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className={styles.right}>
                        <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit}>
                            <h3 className={styles.formHeading}>Send a Message</h3>

                            {sent && (
                                <div className={styles.successMsg}>
                                    ✅ Message sent! I&apos;ll get back to you soon.
                                </div>
                            )}

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Project collaboration, internship..."
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project or idea..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn-primary" id="submit-contact-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                <span>🚀</span> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
