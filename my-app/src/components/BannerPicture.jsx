import styles from '../style/BannerPicture.module.scss';

function BannerPicture({img, opacity, text}) {
    return(
        <div className={styles.ContentBanner}>
            <img src={img} alt="bannière" style={{opacity: opacity}}/>
            <h2>{text}</h2>
        </div>
    )
}

export default BannerPicture