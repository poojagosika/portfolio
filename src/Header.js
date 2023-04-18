import {Link} from "react-router-dom"
import "./Header.css"


const Header = () => {
    return(
        <>
            <ul className="navMenu">
                <Link to="/home" style={{ textDecoration: 'none' }}>
                <li><i class="fa-solid fa-house"></i>Home</li>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <li><i class="fa-solid fa-address-card"></i>About Us</li>
                </Link>
                <Link to="/tech-stack" style={{ textDecoration: 'none' }}>
                    <li><i class="fa-solid fa-globe"></i>Tech Stack</li>
                </Link>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <li><i class="fa-solid fa-diagram-project"></i>Projects</li>
                </Link>
                <Link to="/experience" style={{ textDecoration: 'none' }}>
                    <li><i class="fa-solid fa-star"></i>Experience</li>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                    <li><i class="fa-solid fa-envelope"></i>Contact Us</li>
                </Link>
                <div class="dot"></div>
            </ul>
        </>
    )
}

export default Header