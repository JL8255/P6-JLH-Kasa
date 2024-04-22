import BannerPictureAP from "../components/BannerPictureAP"
import Theme from "../components/ThemesAP"
import styles from '../style/APropos.module.scss'


function APropos() {
    return (
        <div className={styles.contentAP}>
            <BannerPictureAP /> 
            <Theme />
        </div>
    )
}

export default APropos