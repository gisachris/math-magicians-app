import React from 'react';

const SideBar = (props) => (
  <section className="SideBar">
    <ul className="actionsList">
      <li className="actionTask divide">{props.divide}</li>
      <li className="actionTask multiply">{props.multiply}</li>
      <li className="actionTask subtract">{props.subtract}</li>
      <li className="actionTask add">{props.add}</li>
      <li className="actionTask equals">{props.equals}</li>
    </ul>
  </section>
);

SideBar.defaultProps = {
  divide: '\u00F7',
  multiply: '\u00D7',
  subtract: '\u2212',
  add: '\u002B',
  equals: '\u003D',
};

export default SideBar;
