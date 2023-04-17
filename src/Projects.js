import weather from "./images/weather-app.png"
import calulator from "./images/calculator.png"
import ecommerce from "./images/ecommerce.png"
import "./Projects.css"

const Projects = () => {
    return(
        <>
        <div className="projects">
            <div className="project-data">
                <img src={weather} alt="weather-app" />
                <div className="project-info">
                    <h3 className="project-heading">Weather App</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dignissimos vel natus rem omnis ut repellendus illum,
                        voluptate qui voluptatem dolor, incidunt ducimus vero molestias esse fuga facilis nesciunt hic!
                    </p>
                    <button><a href="https://poojagosika.github.io/calculator/" target="#">Live Demo</a></button>
                </div>
            </div>

            <div className="project-data">
                <div className="project-info">
                    <h3 className="project-heading">Calculator</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dignissimos vel natus rem omnis ut repellendus illum,
                        voluptate qui voluptatem dolor, incidunt ducimus vero molestias esse fuga facilis nesciunt hic!
                    </p>
                    <button><a href="https://poojagosika.github.io/react-weather-app/" target="#">Live Demo</a></button>
                </div>
                <img src={calulator} alt="calculator" />
            </div>

            <div className="project-data">
                <img src={ecommerce} alt="ecommerce" />
                <div className="project-info">
                    <h3 className="project-heading">E-Commerce</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dignissimos vel natus rem omnis ut repellendus illum,
                        voluptate qui voluptatem dolor, incidunt ducimus vero molestias esse fuga facilis nesciunt hic!
                    </p>
                    <button><a href="https://poojagosika.github.io/E-Commerce-Website/" target="#">Live Demo</a></button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Projects;