import BannerPicture from "../components/BannerPicture"
import Theme from '../components/ThemesAP'
import styles from '../style/APropos.module.scss'
import IMG1 from '../assets/paysage_montagne.jpg'
import React, {useEffect} from 'react';


function APropos({liens, setliens}) {
    useEffect(() => {setliens(liens=[false,true])},[])
    return (
        <div className={styles.contentAP}>
            <BannerPicture img={IMG1} opacity={0.75} text={""}/> 
            <Theme />
        </div>
    )
}

export default APropos