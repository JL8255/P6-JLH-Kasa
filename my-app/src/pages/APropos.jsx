import BannerPicture from "../components/BannerPictureAP"
import Theme from '../components/ThemesAP'
import styles from '../style/APropos.module.scss'
import IMG1 from '../assets/paysage_montagne.jpg'


function APropos() {
    return (
        <div className={styles.contentAP}>
            <BannerPicture img={IMG1} opacity={0.1}/> 
            <Theme />
        </div>
    )
}

export default APropos