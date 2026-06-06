import React from 'react'
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom';


export default function Navbar({ title, aboutText = 'About', mode, toggleMode }) {
  return (
<>
<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a> {/* ignore the warning */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>    {/*we use # because we don't want to reload the page when we click on home, it is just for demonstration purpose, in real application we will use react router to navigate between pages without reloading the page*/}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{aboutText}</a>
        </li>
      
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>   
      </form> */}
      <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  aboutText: 'About the title'
}