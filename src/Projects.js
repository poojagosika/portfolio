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
                    <p>
                        Weather App is used to predict the weather of any state and place at the current time.
                        This App is made up of HTML, CSS, JS, React JS and OpenWeather API. Also used React Hooks
                        in the building of this process.
                    </p>
                    <button><a href="https://poojagosika.github.io/calculator/" target="#">Live Demo</a></button>
                </div>
            </div>

            <div className="project-data">
                <img src={calulator} alt="calculator" />
                <div className="project-info">
                    <h3 className="project-heading">Calculator</h3>
                    <p>
                        The making of calculator resulted in the high use of Javascript for the operations to be
                        performed. This App is 100% responsive and gives instant results without causing
                        overloading of the web page.
                    </p>
                    <button><a href="https://poojagosika.github.io/react-weather-app/" target="#">Live Demo</a></button>
                </div>
            </div>

            <div className="project-data">
                <img src={ecommerce} alt="ecommerce" />
                <div className="project-info">
                    <h3 className="project-heading">E-Commerce</h3>
                    <p>
                        A website made of fully responsive page adding cards, services, and items to be bought.
                        Additional Features include login and Sign Up pages for users to feel safe and secures about their Privacy.
                    </p>
                    <button><a href="https://poojagosika.github.io/E-Commerce-Website/" target="#">Live Demo</a></button>
                </div>
            </div>

        </div>
        </>
    )
}

export default Projects;