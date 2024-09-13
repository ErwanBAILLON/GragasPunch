import Link from 'next/link';
import styles from './Layout.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.footerText}>GRASAPUNCH - © 2024</p>
                <p className={styles.footerText}>THIS WEBSITE IS A STUDENT PROJECT, FOR EDUCATIONAL PURPOSES ONLY (NOTHING FOR SALE)</p>
                <nav className={styles.nav}>
                    <Link href="/about">
                        about
                    </Link>
                    <Link href="/contact">
                        contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
}