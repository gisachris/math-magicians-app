import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  <>
    <h1 className="NotfoundHeader">Page was not found!</h1>

    <span className="NotfoundText">
      return to homePage...
      {' '}
      <Link to="/">Homepage</Link>
    </span>
  </>;
};

export default NotFound;
