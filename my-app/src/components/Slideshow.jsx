import styles from '../style/Slideshow.module.scss';
import locationsList from '../datas/back-end.json'
import Card from '../components/Card';

function Slideshow() {
	return (
        <div className={styles.contentLoc}>
            <div className={styles.contentCards}>

                {locationsList.map((location, index) => (
                    <div key={location.id}>
                        <Card location={location} id={location.id} cover={location.cover} index={index} title={location.title}/>
                    </div>
                ))}

            </div>
        </div>
	)
}

export default Slideshow