'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setActive(href.replace('#', ''));
        setMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
                    <span className={styles.logoSymbol}>&lt;</span>
                    <span className="gradient-text">Sumit</span>
                    <span className={styles.logoSymbol}>/&gt;</span>
                </a>

                <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${active === link.href.replace('#', '') ? styles.activeLink : ''}`}
                                onClick={() => handleNavClick(link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                            Hire Me
                        </a>
                    </li>
                </ul>

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    id="hamburger-btn"
                >
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
                    <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
                </button>
            </div>
        </nav>
    );
}
