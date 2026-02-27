'use client';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const roles = [
    'B.Tech CSE (Data Science)',
    'Full Stack Developer',
    'Machine Learning Enthusiast',
    'Python & Django Developer',
    'Next.js Developer',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const current = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.slice(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), 1800);
                }
            } else {
                setDisplayText(current.slice(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 80);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section id="home" className={`${styles.hero} bg-grid`}>
            <div className={`glow-orb ${styles.orb1}`} />
            <div className={`glow-orb ${styles.orb2}`} />
            <div className={`glow-orb ${styles.orb3}`} />

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={`pill ${styles.badge}`}>
                        <span>🎓</span>
                        <span>Lovely Professional University</span>
                    </div>

                    <h1 className={styles.heading}>
                        Hey, I&apos;m{' '}
                        <span className="gradient-text">Sumit Kumar</span>
                    </h1>

                    <div className={styles.roleContainer}>
                        <span className={styles.rolePrefix}>I&apos;m a </span>
                        <span className={styles.typingText}>{displayText}</span>
                        <span className="cursor">|</span>
                    </div>

                    <p className={styles.description}>
                        Passionate about building intelligent web applications and data-driven solutions.
                        Experienced in full-stack development with Django & Next.js, machine learning,
                        and database systems.
                    </p>

                    <div className={styles.ctas}>
                        <a href="#projects" className="btn-primary" id="view-projects-btn">
                            <span>🚀</span> View Projects
                        </a>
                        <a href="#contact" className="btn-secondary" id="contact-hero-btn">
                            <span>✉️</span> Get In Touch
                        </a>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>3+</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>10+</span>
                            <span className={styles.statLabel}>Technologies</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>LPU</span>
                            <span className={styles.statLabel}>University</span>
                        </div>
                    </div>
                </div>

                <div className={styles.codeBlock}>
                    <div className={styles.codeHeader}>
                        <div className={styles.dot} style={{ background: '#ff5f57' }} />
                        <div className={styles.dot} style={{ background: '#febc2e' }} />
                        <div className={styles.dot} style={{ background: '#28c840' }} />
                        <span className={styles.codeFileName}>sumit.py</span>
                    </div>
                    <pre className={styles.code}>
                        {`class SumitKumar:
    def __init__(self):
        self.name = "Sumit Kumar"
        self.university = "LPU"
        self.degree = "B.Tech CSE"
        self.spec = "Data Science"
        self.skills = [
            "Python", "Django",
            "Next.js", "React",
            "ML", "PL/SQL", "C++"
        ]
    
    def build_solutions(self):
        return "🚀 Innovative Apps"
    
    def learn_everyday(self):
        return True

me = SumitKumar()
print(me.build_solutions())`}
                    </pre>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.scrollDot} />
            </div>
        </section>
    );
}
