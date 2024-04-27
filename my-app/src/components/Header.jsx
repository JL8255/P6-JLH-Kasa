import { Link } from 'react-router-dom'
import LOGO_red from '../assets/LOGO_red.svg';
import styles from '../style/Header.module.scss';
import React, { useState } from 'react';

function Header() {
    let [A, setA] = useState('passif');
    let [B, setB] = useState('passif');
    const clickA = e => {setA('actif'); setB('passif')};
    const clickB = e => {setB('actif'); setA('passif')};
    return (
    <div className={styles.header}>
        <img src={LOGO_red} alt="logo" />
        <nav>   
            <Link className={A=='actif' ? styles.linkActif : styles.linkInactif} onClick={clickA} to="/">Accueil</Link>
            <Link className={B=='actif' ? styles.linkActif : styles.linkInactif} onClick={clickB} to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header