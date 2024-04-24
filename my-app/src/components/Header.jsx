import { Link } from 'react-router-dom'
import LOGO_red from '../assets/LOGO_red.svg';
import styles from '../style/Header.module.scss';


function Header() {
    return (
    <div className={styles.header}>
        <img src={LOGO_red} alt="logo" />
        <nav>   
            <Link className={styles.linkB} to="/">Accueil</Link>
            <Link className={styles.linkB} to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header