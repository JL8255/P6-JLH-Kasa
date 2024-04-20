import styles from '../style/Slideshow.module.scss';
import locationsList from '../datas/back-end.json'
import Vector from '../assets/Vector.svg';
import React, { useState } from 'react';
import Card from '../components/Card';

let A = 0
let B = 6
let maxLength = locationsList.length

function Slideshow() {
    const [count, setCount] = useState(0);
	return (
        <div className={styles.contentLoc}>
            <button className={styles.buttonP} onClick={() => setCount(count - 6)}>
                <img src={Vector} alt="précédent" style={{transform: "rotate(270deg)"}} />
            </button>
            <div className={styles.contentCards}>
                {locationsList.slice(A+count, B+count).map((location, index) => (
                    <div key={location.id}>
                        <Card location={location} id={location.id} cover={location.cover} index={index} count={count} title={location.title}/>
                    </div>
                ))}
            </div>
            <button className={styles.buttonS} onClick={() => setCount(count + 6)}>
                <img src={Vector} alt="suivant" style={{transform: "rotate(90deg)"}}/>
            </button>
        </div>
	)
}

export default Slideshow