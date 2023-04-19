import "./Footer.css"
import {Link} from "react-router-dom"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-socials">
                <a href="https://twitter.com/alyssa_healy77" target="blank"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://linkedin.com/in/poojagosika" target="blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://instagram.com/the_carpedium" target="blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/poojagosika" target="blank"><i class="fa-brands fa-github"></i></a>
            </div>

            <hr />
            <div className="footer-links">
                <Link to="/" style={{ textDecoration: 'none' }}/>
                <Link to="/home" style={{ textDecoration: 'none' }}>
                <li>Home</li>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <li>About Us</li>
                </Link>
                <Link to="/tech-stack" style={{ textDecoration: 'none' }}>
                    <li>Tech Stack</li>
                </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <li>Projects</li>
                </Link>
                <Link to="/experience" style={{ textDecoration: 'none' }}>
                    <li>Experience</li>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <li>Contact Us</li>
                </Link>
            </div>

            <p>Copyrights - Pooja Gosika @2023</p>
        </div>
    )
}

export default Footer;