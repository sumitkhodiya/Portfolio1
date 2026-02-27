import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.divider} />
                <div className={styles.inner}>
                    <div className={styles.brand}>
                        <span className={styles.logoSymbol}>&lt;</span>
                        <span className="gradient-text" style={{ fontFamily: 'Fira Code, monospace', fontWeight: 700 }}>Sumit</span>
                        <span className={styles.logoSymbol}>/&gt;</span>
                    </div>
                    <p className={styles.copy}>
                        &copy; {year} Sumit · B.Tech CSE Data Science · LPU
                    </p>
                    <p className={styles.built}>
                        Built with <span style={{ color: '#ef4444' }}>♥</span> using Next.js & React
                    </p>
                </div>
            </div>
        </footer>
    );
}
