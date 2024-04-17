import styles from '../style/BannerPicture.module.scss';
import IMG1 from '../assets/paysage_montagne.jpg';
import IMG2 from '../assets/paysage_bord_de_mer.jpg';


function BannerPicture() {
    return(
        <div className={styles.ContentBanner}>
            <img src={IMG2} alt="paysage montagne" />
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default BannerPicture