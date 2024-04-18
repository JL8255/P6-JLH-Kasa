import styles from '../style/BannerPicture.module.scss';
import IMG1 from '../assets/paysage_montagne.jpg';
import IMG2 from '../assets/paysage_bord_de_mer.jpg';


function BannerPictureAP() {
    return(
        <div className={styles.ContentBanner}>
            <img src={IMG1} alt="paysage montagne" />
        </div>
    )
}

export default BannerPictureAP