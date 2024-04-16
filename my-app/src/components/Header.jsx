import { Link } from 'react-router-dom'
 
function Header() {
    return (
    <div>
        <p>Header</p>    
        <Link to="/">Accueil</Link>
        <Link to="/APropos">A Propos</Link>
    </div>
    )
}

export default Header