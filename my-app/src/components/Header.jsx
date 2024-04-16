import { Link } from 'react-router-dom'
 
function Header() {
    return (
    <div>
        <nav>   
            <Link to="/">Accueil</Link>
            <Link to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header