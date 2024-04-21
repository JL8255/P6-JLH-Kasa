import styles from '../style/Collapse.module.scss'
import Vector from '../assets/Vector.svg'

function Collapse() {
    return(
        <div className={styles.contentCollapse}>
            <p>Description</p>
            <img src={Vector} alt="développer" />
        </div>
    )
}

export default Collapse