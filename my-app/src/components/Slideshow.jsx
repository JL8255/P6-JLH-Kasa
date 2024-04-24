import styles from '../style/Slideshow.module.scss';
import locationsList from '../datas/back-end.json'
import Vector from '../assets/Vector.svg';
import React, { useState } from 'react';
import Card from '../components/Card';

let A = 0
let B = 6
let maxLength = locationsList.length

function Slideshow() {
    let [count, setCount] = useState(0);
	return (
        <div className={styles.contentLoc}>
            <div className={styles.contentCards}>
                <div className={styles.imgP} onClick={() => setCount(count > 0 ? count - 6 : count=maxLength-(maxLength % 6))}>
                    <img src={Vector} alt="précédent"/>
                </div>
                {locationsList.slice(A+count, B+count).map((location, index) => (
                    <div key={location.id}>
                        <Card location={location} id={location.id} cover={location.cover} index={index} count={count} title={location.title}/>
                    </div>
                ))}
                <div className={styles.imgS} onClick={() => setCount(count < (maxLength-6) ? count +6 : count=0)}>
                    <img src={Vector} alt="suivant"/>
                </div>
            </div>
        </div>
	)
}

export default Slideshow