import LOGO_white from '../assets/LOGO_white.svg';
import styles from '../style/Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <img src={LOGO_white} alt="logo" height="40px"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer