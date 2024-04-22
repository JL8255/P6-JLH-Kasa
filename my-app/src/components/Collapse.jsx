import styles from '../style/Collapse.module.scss'
import Vector from '../assets/Vector.svg'
import React, { useState } from 'react';

function Collapse({name, content}) {
    const [active, setActive] = useState(false)
    const handleToggle = e => {setActive(!active)}
    return(
        <div className={styles.col}>
            <div className={styles.nameCollapse} onClick={handleToggle}>
                <p>{name}</p>
                <img className={active ? styles.active_img : styles.passive_img} src={Vector} alt="développer" />
            </div>
            <div className={active ? styles.active_contentCollapse : styles.passive_contentCollapse}>
                {content.map((C, index) => <p key={index}>{C}</p>)}
            </div>
        </div>
    )
}

export default Collapse