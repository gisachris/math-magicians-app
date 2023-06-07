import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({
  divide, multiply, subtract, add, equals,
}) => (
  <section className="SideBar">
    <ul className="actionsList">
      <li className="actionTask divide">{divide}</li>
      <li className="actionTask multiply">{multiply}</li>
      <li className="actionTask subtract">{subtract}</li>
      <li className="actionTask add">{add}</li>
      <li className="actionTask equals">{equals}</li>
    </ul>
  </section>
);

SideBar.propTypes = {
  divide: PropTypes.string,
  multiply: PropTypes.string,
  subtract: PropTypes.string,
  add: PropTypes.string,
  equals: PropTypes.string,
};

SideBar.defaultProps = {
  divide: '\u00F7',
  multiply: '\u00D7',
  subtract: '\u2212',
  add: '\u002B',
  equals: '\u003D',
};

export default SideBar;
