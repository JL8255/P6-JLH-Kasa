import { Link } from 'react-router-dom'
import styles from '../style/Card.module.scss'
import LOGO from '../assets/LOGO_white.svg'

Card.defaultProps = {
    location:{id:0, title:"Acun Logement !", cover:null},
    index:0,
    count:0,
}

function Card({location, index}) {
    return (
        <Link to={"/FicheLogement/"+location.id} className={styles.link}>
            <div></div>
            {(location.cover===null) ? <img src={LOGO}/> : <img src={location.cover}/>}
            <p>{index+1+" - "+location.title}</p>
        </Link>
    )
}

export default Card