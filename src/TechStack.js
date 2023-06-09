import './TechStack.css'
import {Link, Outlet} from "react-router-dom"

const TechStack = () => {
    return(
        <div className='tech-stack'>
            <h2 className='text-stack-heading'>Tech Stack</h2>
            <p className='text-stack-para'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ullam harum eaque ea accusamus mollitia ab quo corporis magni,
                cupiditate, quidem assumenda doloribus
                cum alias aliquam minima modi possimus? Deleniti, blanditiis.
            </p>
            <div className='tech-stack-buttons'>
                <Link to="/tech-stack"><button>FrontEnd</button></Link>
                <Link to="/tech-stack/back-end"><button>BackEnd</button></Link>
                <Link to="/tech-stack/other-tech"><button>OtherTech</button></Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default TechStack;