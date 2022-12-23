import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.nav}>
                <li className={styles.item}><Link href="/about">A propos</Link></li>
                <li className={styles.item}><Link href="/tech">Technologie</Link></li>
                <Link href="/"><div className={styles.logo}></div></Link>
                <li className={styles.item}><Link href="/projects">Projets</Link></li>
                <li className={styles.item}><Link href="/contact">Contactez-nous</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;