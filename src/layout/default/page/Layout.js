import React from 'react';
import { Link } from 'react-router-dom';

import { main, pullRight, h1 } from '../css/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className={main}>
      <Link to="/">
        <h1 className={h1}>
          React Project
        </h1>
      </Link>
      {children}
      <hr />
      <p className={pullRight}>
        Made with by Javad Shariati
      </p>
    </div>
  );
};

export default Layout;
