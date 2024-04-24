import { Link } from 'react-router-dom'
import LOGO_red from '../assets/LOGO_red.svg';
import styles from '../style/Header.module.scss';


function Header({AActif, BActif}) {
    return (
    <div className={styles.header}>
        <img src={LOGO_red} alt="logo" />
        <nav>   
            <Link className={AActif ? styles.linkActif : styles.linkInactif} to="/">Accueil</Link>
            <Link className={BActif ? styles.linkActif : styles.linkInactif} to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header