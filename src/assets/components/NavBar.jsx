import { NavLink } from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    return ( 
        <nav>
            <NavLink to="/">Speisekarte</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
            <NavLink to="/öffnungszeiten">Öffnungszeiten</NavLink>
            <NavLink to="/galerie">Galerie</NavLink>
            
        </nav>
     );
}
 
export default NavBar;