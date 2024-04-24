import BannerPicture from "../components/BannerPicture"
import Theme from '../components/ThemesAP'
import styles from '../style/APropos.module.scss'
import IMG1 from '../assets/paysage_montagne.jpg'
import Header from "../components/Header"


function APropos() {
    return (
        <div className={styles.contentAP}>
            <Header AActif={false} BActif={true}/>
            <BannerPicture img={IMG1} opacity={0.75} text={""}/> 
            <Theme />
        </div>
    )
}

export default APropos