import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const LandingContent = props => {
  return (
    <div>
    <link href="./assets/css/styles.css" rel="stylesheet" /> 
      <NavBar {...props} /> 
      <div className="main">
        {props.content}
      </div>
      <Footer />
    </div>
  );
};

export default LandingContent;