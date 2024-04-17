import { Link } from 'react-router-dom'
import LOGO_red from '../assets/LOGO_red.svg';
import styles from '../style/Header.module.scss';
 
function Header() {
    return (
    <div className={styles.header}>
        <img src={LOGO_red} alt="logo" height="40px" />
        <p></p>
        <nav>   
            <Link className={styles.link} to="/">Accueil</Link>
            <Link className={styles.link} to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header