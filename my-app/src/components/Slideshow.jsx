import styles from '../style/Slideshow.module.scss';
import locationsList from '../datas/back-end.json'
import Vector from '../assets/Vector.svg';
import React, { useState } from 'react';

let A = 0
let B = 6
let maxLength = locationsList.length
console.log(locationsList)

function Slideshow() {
    const [count, setCount] = useState(0);
	return (
        <div className={styles.contentLoc}>
            <button className={styles.buttonP} onClick={() => setCount(count - 6)}>
                <img src={Vector} alt="précédent" style={{transform: "rotate(270deg)"}} />
            </button>
            <div className={styles.contentCards}>
                {locationsList.slice(A+count, B+count).map((location, index) => (
                    <a key={location.id} href="/FicheLogement">
                        <div></div>
                        <img src={location.cover}></img>
                        <p>{index+1+count+" - "+location.title}</p>
                    </a>
                ))}
            </div>
            <button className={styles.buttonS} onClick={() => setCount(count + 6)}>
                <img src={Vector} alt="suivant" style={{transform: "rotate(90deg)"}}/>
            </button>
        </div>
	)
}

export default Slideshow