import './NavLinks.scss'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return (
        <div className="navlinks">
            <NavLink to="/" exact={true} className="navlinks__link">sports</NavLink>
            <NavLink to="live" exact={true} className="navlinks__link">live & real</NavLink>
            <NavLink to="casino" exact={true} className="navlinks__link">casino</NavLink>
            <NavLink to="esports" exact={true} className="navlinks__link">esports</NavLink>
            <NavLink to="vegas" exact={true} className="navlinks__link">vegas</NavLink>
        </div>
    );
}

export default NavLinks;
