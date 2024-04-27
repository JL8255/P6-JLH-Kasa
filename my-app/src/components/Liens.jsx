import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import styles from '../style/Liens.module.scss'


function Liens() {
    let [A, setA] = useState(true);
    let [B, setB] = useState(false);
    const clickA = e => {setA(true); setB(false)};
    const clickB = e => {setB(true); setA(false)};
    return (
        <nav>
            <Link className={A ? styles.linkActif : styles.linkInactif} onClick={clickA} to="/">Accueil</Link>
            <Link className={B ? styles.linkActif : styles.linkInactif} onClick={clickB} to="/APropos">A Propos</Link>
        </nav>
    )
}

export default Liens