import styles from './Projects.module.css';

const projects = [
    {
        id: 1,
        title: 'Full-Stack Web Application',
        subtitle: 'Django + Next.js',
        description:
            'A complete full-stack web application built with Django REST Framework as the backend API and Next.js for the frontend. Features user authentication, RESTful APIs, dynamic data fetching, and a responsive modern UI.',
        tech: ['Django', 'Next.js', 'React', 'Python', 'REST API', 'PostgreSQL'],
        icon: '🌐',
        gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        features: ['User Authentication', 'REST APIs', 'Dynamic frontend', 'Responsive design'],
        tags: ['Full Stack', 'Web Dev'],
        color: '#3b82f6',
    },
    {
        id: 2,
        title: 'Health Prediction System',
        subtitle: 'Machine Learning & Predictive Analysis',
        description:
            'A machine learning-powered health prediction application that uses predictive analytics to analyze patient data and predict potential health risks. Built with Python, Scikit-learn, and Pandas for data processing and model training.',
        tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Science'],
        icon: '🏥',
        gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        features: ['ML Model Training', 'Data Preprocessing', 'Predictive Analytics', 'Health Risk Assessment'],
        tags: ['Machine Learning', 'Data Science'],
        color: '#8b5cf6',
    },
    {
        id: 3,
        title: 'Exam Invigilation System',
        subtitle: 'PL/SQL Database System',
        description:
            'A comprehensive exam invigilation management system developed using PL/SQL and advanced DBMS concepts. Manages exam schedules, seat allocation, invigilator assignments, and attendance tracking with stored procedures and triggers.',
        tech: ['PL/SQL', 'DBMS', 'Oracle', 'Stored Procedures', 'Triggers', 'SQL'],
        icon: '📝',
        gradient: 'linear-gradient(135deg, #06b6d4, #0284c7)',
        features: ['Seat Allocation', 'Invigilator Management', 'Stored Procedures', 'Triggers & Cursors'],
        tags: ['Database', 'PL/SQL'],
        color: '#06b6d4',
    },
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={`glow-orb ${styles.orb}`} />
            <div className={styles.container}>
                <p className="section-title">My Projects</p>
                <p className="section-subtitle">Things I&apos;ve built</p>

                <div className={styles.grid}>
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className={`${styles.projectCard} glass-card`}
                            id={`project-card-${project.id}`}
                        >
                            {/* Card header */}
                            <div className={styles.cardHeader} style={{ background: project.gradient }}>
                                <span className={styles.projectIcon}>{project.icon}</span>
                                <div className={styles.cardNum}>0{idx + 1}</div>
                            </div>

                            {/* Card content */}
                            <div className={styles.cardBody}>
                                <div className={styles.tagRow}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag} style={{ borderColor: `${project.color}44`, color: project.color, background: `${project.color}11` }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectSubtitle} style={{ color: project.color }}>{project.subtitle}</p>
                                <p className={styles.projectDesc}>{project.description}</p>

                                {/* Features */}
                                <div className={styles.features}>
                                    {project.features.map((f) => (
                                        <div key={f} className={styles.feature}>
                                            <span style={{ color: project.color }}>✓</span>
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech stack */}
                                <div className={styles.techStack}>
                                    {project.tech.map((t) => (
                                        <span key={t} className={styles.techChip}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
