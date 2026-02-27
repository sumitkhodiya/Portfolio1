import styles from './About.module.css';

const highlights = [
    { icon: '🎓', title: 'University', value: 'Lovely Professional University (LPU)' },
    { icon: '📚', title: 'Degree', value: 'B.Tech CSE – Data Science' },
    { icon: '💡', title: 'Focus', value: 'Full Stack Dev & Machine Learning' },
    { icon: '📍', title: 'Location', value: 'Punjab, India' },
];

const education = [
    {
        year: '2023 – Present',
        degree: 'B.Tech CSE (Data Science)',
        school: 'Lovely Professional University',
        desc: 'Pursuing Bachelor of Technology in Computer Science & Engineering with specialization in Data Science.',
        icon: '🎓',
    },
];

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={`glow-orb ${styles.orb}`} />
            <div className={styles.container}>
                <p className="section-title">About Me</p>
                <p className="section-subtitle">Who I am and what drives me</p>

                <div className={styles.grid}>
                    <div className={styles.left}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <div className={styles.avatarRing}>
                                <div className={styles.avatar}>S</div>
                            </div>
                            <h3 className={styles.name}>
                                Hi, I&apos;m <span className="gradient-text">Sumit Kumar</span> 👋
                            </h3>
                            <p className={styles.bio}>
                                I&apos;m a passionate <strong>B.Tech CSE (Data Science)</strong> student at
                                <strong> Lovely Professional University</strong>. I love turning complex
                                problems into elegant digital solutions — whether it&apos;s building full-stack
                                web applications, analyzing data, or creating machine learning models.
                            </p>
                            <p className={styles.bio}>
                                My journey in tech spans across backend development with <strong>Django</strong>,
                                modern frontends with <strong>Next.js & React</strong>, predictive analytics
                                with <strong>Machine Learning</strong>, and robust database systems using
                                <strong> PL/SQL & DBMS</strong>.
                            </p>
                            <div className={styles.tags}>
                                {['Team Player', 'Fast Learner', 'Problem Solver', 'Creative Thinker'].map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.highlights}>
                            {highlights.map((h) => (
                                <div key={h.title} className={`glass-card ${styles.highlightCard}`}>
                                    <span className={styles.highlightIcon}>{h.icon}</span>
                                    <div>
                                        <p className={styles.highlightTitle}>{h.title}</p>
                                        <p className={styles.highlightValue}>{h.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={`glass-card ${styles.educationCard}`}>
                            <h3 className={styles.eduHeading}>🎓 Education</h3>
                            {education.map((edu) => (
                                <div key={edu.degree} className={styles.eduItem}>
                                    <div className={styles.eduLeft}>
                                        <span className={styles.eduIcon}>{edu.icon}</span>
                                        <div className={styles.eduLine} />
                                    </div>
                                    <div className={styles.eduContent}>
                                        <span className={styles.eduYear}>{edu.year}</span>
                                        <h4 className={styles.eduDegree}>{edu.degree}</h4>
                                        <p className={styles.eduSchool}>{edu.school}</p>
                                        <p className={styles.eduDesc}>{edu.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
