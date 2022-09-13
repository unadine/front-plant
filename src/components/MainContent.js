import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainContent = props => {
  return (
    <div>
      <Sidebar {...props} />
      <div className="main">
        {props.content}
      </div>
      <Footer />
    </div>
  );
};

export default MainContent;