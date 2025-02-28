//2nd file Navbar.js
import React from 'react'
import PropTypes from 'prop-types'
// import {

//   Link
// } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} 
      // style={{width:'200vh'}}
      >
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'} `} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
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

