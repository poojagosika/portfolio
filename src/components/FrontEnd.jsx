import React from 'react'
import "./FrontEnd.css"

export const FrontEnd = () => {
  return (
    <>
      <div className='tech-stack-images'>
        <div className='container'>
          <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular"/>
          <p className="title">Angular</p>
        </div>
        <div className='container'>

          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg" alt="angularjs"/>
        <p className="title">Angular JS</p>
        </div>
        <div className='container'>

        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap"/>
        <p className="title">Bootstrap</p>
        </div>
        <div className='container'>

        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3"/>
        <p className="title">CSS</p>
        </div>
        <div className='container'>

        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react"/>
        <p className="title">React JS</p>
        </div>
        <div className='container'>

        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5"/>
        <p className="title">HTML</p>
        </div>
        <div className='container'>
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript"/>
        <p className="title">JavaScript</p>
        </div>
      </div>

      
    </>
  )
}