import './Footer.scss'

const Footer = ({ color }) => {
    return (
        <footer className="footer">
            <p className="footer__offer">sports new customer offer</p>
            <p className="footer__bets">Get up to 10 in Free Bets</p>
            <button style={{ backgroundColor: color }} className="footer__cta">Join Now</button>
        </footer>
    );
}

export default Footer;
