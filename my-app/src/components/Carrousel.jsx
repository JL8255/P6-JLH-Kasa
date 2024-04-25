import styles from '../style/Carrousel.module.scss'
import Vector from '../assets/Vector.svg'
import React, { useState } from 'react';

function Carrousel({pictures}) {
    let length = new Number(pictures.length)
    let [i, seti] = useState(0);
    return (
        <div className={styles.contentImg}>
            <img className={length==1 ? styles.imgPnone : styles.imgP} src={Vector} alt="flèche précédente" onClick={() => seti(i==0 ? i=length-1 : i - 1)}/>
            <img className={styles.img} src={pictures[i]} alt="photos du logements" />
            <p className={length==1 ? styles.nbnone : styles.nb}>{(i+1)+"/"+length}</p>
            <img className={length==1 ? styles.imgSnone : styles.imgS} src={Vector} alt="flèche suivante" onClick={() => seti(i==length-1 ? i=0 : i + 1)}/>
        </div>
    )
}

export default Carrousel