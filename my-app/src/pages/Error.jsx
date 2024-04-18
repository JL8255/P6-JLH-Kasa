import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../style/Error.module.scss"

function Error() {
    return (
        <div className={styles.content}>
            <p className={styles.num}>404</p>
            <p className={styles.message}>Oups! La page que vous demandez n'existe pas.</p>
            <Link className={styles.link} to="/">Retourner sur la page d'accueil</Link>
            
        </div>
    )
}

export default Error