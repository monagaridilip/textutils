//shortcut -rfc(react function based)
import React from 'react'
//shortcut impt for(proptypes)
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.heading1}</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">{props.heading2}</a>
              </li> */}
              
            </ul>
            {/* <div className="d-flex mx-2 rounded-circle bg-primary " onClick={()=>{props.colorMode('primary')}} style={{height:"30px",width:"30px"}}></div>
            <div className="d-flex mx-2 rounded-circle bg-success " onClick={()=>{props.colorMode('success')}} style={{height:"30px",width:"30px"}}></div>
            <div className="d-flex mx-2 rounded-circle bg-danger " onClick={()=>{props.colorMode('danger')}} style={{height:"30px",width:"30px"}}></div>
            <div className="d-flex mx-2 rounded-circle bg-warning " onClick={()=>{props.colorMode('warning')}} style={{height:"30px",width:"30px"}}></div> */}
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  heading1: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Stranger',
  heading1: 'Home',
  heading2: 'Services'
};
