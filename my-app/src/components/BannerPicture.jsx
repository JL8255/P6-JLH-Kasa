import styles from '../style/BannerPicture.module.scss';

function BannerPicture({img, opacity}) {
    return(
        <div className={styles.ContentBanner}>
            <img src={img} alt="bannière" style={{opacity: opacity}}/>
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default BannerPicture