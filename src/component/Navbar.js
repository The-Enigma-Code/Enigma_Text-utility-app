//2nd file Navbar.js
import React from 'react'
import PropTypes from 'prop-types'
import {

  Link
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} 
      // style={{width:'200vh'}}
      >
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'} `} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
              <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/about">
  {props.aboutComp}</Link>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle text-${props.mode === 'light' ? 'dark' : 'light'} `} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className={`dropdown-item text-${props.mode === 'dark' ? 'dark' : 'light'}`} href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>621
                 </ul>
              </li>
              <li className="nav-item">
                <a className={`nav-link disabled text-${props.mode === 'dark' ? 'white-50' : 'dark-50'}`} href='/' aria-disabled="true">Disabled</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  firstPage: PropTypes.string,
};
// PropTypes.checkPropTypes(Navbar.propTypes, props, 'prop', 'Navbar');

Navbar.defaultProps = {
  title: "Set Title",
  firstPage: "Set Homepage",
};
//validation is not working  resolve this thing later

// const propTypesValidator = (componentName, props) => {
//   const propTypes = component.propTypes;

//   for (const propName in propTypes) {
//     if (propTypes[propName].isRequired && !props[propName]) {
//       throw new Error(`Required prop ${propName} is missing in ${componentName}`);
//     }

//     if (!propTypes[propName](props[propName], propName, componentName)) {
//       throw new Error(`Invalid prop ${propName} supplied to ${componentName}`);
//     }
//   }
// };


//   propTypesValidator('Navbar', props);

// component code

