import './NavBar.scss'

const NavBar = ({openModal, color}) => {
    return (
        <header>
            <nav className="navi">
                <img src='/BetwayLogo.webp' alt="Betway" className="navi__logo" />
                <div>
                    <button style={{backgroundColor: color}} className='navi__button' onClick={() => openModal(true)}>Login</button>
                    <button style={{color: color, borderColor: color}} className='navi__signup'>Sign up</button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
