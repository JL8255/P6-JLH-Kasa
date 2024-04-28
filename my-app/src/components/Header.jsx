import LOGO_red from '../assets/LOGO_red.svg';
import styles from '../style/Header.module.scss';
import { Link } from 'react-router-dom'

function Header({liens}) {
    return (
    <div className={styles.header}>
        <img src={LOGO_red} alt="logo" />
        <nav>
            <Link className={liens[0] ? styles.linkActif : styles.linkInactif} to="/">Accueil</Link>
            <Link className={liens[1] ? styles.linkActif : styles.linkInactif} to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header