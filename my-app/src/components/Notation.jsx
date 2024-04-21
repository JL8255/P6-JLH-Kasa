import RedStar from '../assets/Red_star.svg'
import GrayStar from '../assets/Gray_star.svg'
import styles from '../style/Notation.module.scss'

function Notation({rat}) {
    
    let ratingP = new Array()
    for(let i = 0; i < rat; i++) {ratingP.push(i)}
    let ratingN = new Array()
    for(let i = 5; i > rat; i--) {ratingN.push(i)}

    return (
        <div className={styles.stars}>
            {ratingP.map(index => <img key={index} src={RedStar}/>)}
            {ratingN.map(index => <img key={index} src={GrayStar}/>)}
        </div>
    )
}

export default Notation