import { Link } from 'react-router-dom'
import LOGO_red from '../assets/LOGO_red.svg';
 
function Header() {
    return (
    <div>
        <img src={LOGO_red} alt="logo" height="40px" />
        <p></p>
        <nav>   
            <Link to="/">Accueil</Link>
            <Link to="/APropos">A Propos</Link>
        </nav>
    </div>
    )
}

export default Header