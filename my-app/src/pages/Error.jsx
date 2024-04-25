import { Link } from 'react-router-dom'
import styles from "../style/Error.module.scss"
import Header from '../components/Header'

function Error() {
    return (
        <div className={styles.content}>
            <Header AActif={false} BActif={false}/>
            <p className={styles.num}>404</p>
            <p className={styles.message}>Oups! La page que vous demandez n'existe pas.</p>
            <Link className={styles.link} to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error