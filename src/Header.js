import {Link} from "react-router-dom"
import "./Header.css"


const Header = () => {
    return(
        <>
            <div className="navbar-menu">
                <div className="navbar-profile">
                <Link to="/" style={{ textDecoration: 'none' }}><img className="navbar-image" src="https://cdn.pixabay.com/photo/2020/09/27/22/40/student-5608074_960_720.png" alt="profile-pic" /></Link>
                    <Link to="/" style={{ textDecoration: 'none' }}><p className="navbar-name">Pooja Gosika</p></Link>
                </div>
                <div className="navbar-menu-contents">
                    <Link to="/" style={{ textDecoration: 'none' }}/>
                    <Link to="/portfolio" style={{ textDecoration: 'none' }}>
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
                </div>
            </div>
        </>
    )
}

export default Header