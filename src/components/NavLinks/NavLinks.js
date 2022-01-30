import './NavLinks.scss';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ setColor }) => {

    return (
        <navi className="navlinks">
            <NavLink to="/" exact={true} className="navlinks__link" onClick={() => setColor('rgb(0,168,38)')}>sports</NavLink>
            <NavLink to="live" exact={true} className={(navData) => navData.isActive ? "navlinks__link active1" : "navlinks__link" } onClick={() => setColor('rgb(4, 21, 98)')}>live & real</NavLink>
            <NavLink to="casino" exact={true} className={(navData) => navData.isActive ? "navlinks__link active2" : "navlinks__link" } onClick={() => setColor('rgb(218, 18, 18)')}>casino</NavLink>
            <NavLink to="esports" exact={true} className={(navData) => navData.isActive ? "navlinks__link active3" : "navlinks__link" } onClick={() => setColor('rgb(255, 161, 201)')}>esports</NavLink>
            <NavLink to="vegas" exact={true} className={(navData) => navData.isActive ? "navlinks__link active4" : "navlinks__link" } onClick={() => setColor('rgb(17, 70, 143)')}>vegas</NavLink>
        </navi>
    );
}

export default NavLinks;
