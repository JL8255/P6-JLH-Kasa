import styles from '../style/Locations.module.scss';
import locationsList from '../datas/back-end.json'

function Locations() {
	return (
		<div className={styles.contentLoc}>
            {locationsList.slice(0, 6).map((location) => (
                <a key={location.id}>
                    <div></div>
                    <img src={location.cover}></img>
                    <p>{location.title}</p>
                    
                </a>
            ))}
		</div>
	)
}

export default Locations