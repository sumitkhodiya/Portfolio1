import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'Languages',
        icon: '💻',
        color: '#3b82f6',
        skills: [
            { name: 'Python', level: 90, icon: '🐍' },
            { name: 'C++', level: 75, icon: '⚡' },
            { name: 'C', level: 70, icon: '🔧' },
            { name: 'JavaScript', level: 80, icon: '🌐' },
            { name: 'HTML & CSS', level: 85, icon: '🎨' },
            { name: 'PL/SQL', level: 72, icon: '🗃️' },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        icon: '🚀',
        color: '#8b5cf6',
        skills: [
            { name: 'Django', level: 85, icon: '🦄' },
            { name: 'Next.js', level: 80, icon: '▲' },
            { name: 'React', level: 78, icon: '⚛️' },
            { name: 'Machine Learning', level: 75, icon: '🤖' },
        ],
    },
    {
        title: 'Tools & Databases',
        icon: '🛠️',
        color: '#06b6d4',
        skills: [
            { name: 'DBMS / SQL', level: 80, icon: '🗄️' },
            { name: 'Git & GitHub', level: 78, icon: '🐙' },
            { name: 'REST APIs', level: 82, icon: '🔗' },
            { name: 'Predictive Analytics', level: 72, icon: '📊' },
        ],
    },
];

const techBadges = [
    'Python', 'C++', 'C', 'JavaScript', 'HTML', 'CSS',
    'Django', 'Next.js', 'React', 'Machine Learning',
    'PL/SQL', 'DBMS', 'Git', 'REST APIs', 'Scikit-learn',
    'Pandas', 'NumPy', 'PostgreSQL', 'Predictive Analytics',
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={`glow-orb ${styles.orb1}`} />
            <div className={`glow-orb ${styles.orb2}`} />
            <div className={styles.container}>
                <p className="section-title">Skills & Technologies</p>
                <p className="section-subtitle">Technologies I work with</p>

                <div className={styles.categories}>
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className={`glass-card ${styles.catCard}`}>
                            <div className={styles.catHeader}>
                                <span className={styles.catIcon}>{cat.icon}</span>
                                <h3 className={styles.catTitle}>{cat.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skillItem}>
                                        <div className={styles.skillInfo}>
                                            <span className={styles.skillIcon}>{skill.icon}</span>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillPercent}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.skillBar}>
                                            <div
                                                className={styles.skillFill}
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech badges cloud */}
                <div className={styles.badgeSection}>
                    <h3 className={styles.badgeHeading}>All Technologies</h3>
                    <div className={styles.badges}>
                        {techBadges.map((tech, i) => (
                            <span key={tech} className={styles.techBadge} style={{ animationDelay: `${i * 0.05}s` }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
