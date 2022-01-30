import './NavBar.scss'

const NavBar = ({openModal}) => {
    return (
        <header>
            <nav className="navi">
                <img src='/BetwayLogo.webp' alt="Betway" className="navi__logo" />
                <div>
                    <button className='navi__button' onClick={() => openModal(true)}>Login</button>
                    <button className='navi__signup'>Sign up</button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
