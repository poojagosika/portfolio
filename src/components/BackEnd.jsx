import React from 'react'
import "./FrontEnd.css"

export const BackEnd = () => {
  return (
    <div className='tech-stack-images'>
      <div className='container'>

      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
      <p className="title">Node JS</p>
      </div>
      <div className='container'>

      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
      <p className="title">Express JS</p>
      </div>
      <div className='container'>

      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
      <p className="title">Mongo DB</p>
      </div>
      <div className='container'>

      <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/>              
      <p className="title">NO SQL</p>
      </div>
      <div className='container'>

      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
      <p className="title">My SQL</p>
      </div>
    </div>
  )
}
