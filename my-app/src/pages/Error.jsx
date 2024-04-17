import { Link } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"

function Error() {
    return (
        <div>
            
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Accueil</Link>
            
        </div>
    )
}

export default Error