import React from "react";

const SideBar = ({handleclick}) => {
  const divide = '\u00F7';
  const multiply = 'x';
  const subtract = '-';
  const add = '\u002B';
  const equals = '\u003D';
  return (
    <section className="SideBar">
      <ul className="actionsList">
        <li className="actionTask divide" onClick={handleclick}>{divide}</li>
        <li className="actionTask multiply" onClick={handleclick}>{multiply}</li>
        <li className="actionTask subtract" onClick={handleclick}>{subtract}</li>
        <li className="actionTask add" onClick={handleclick}>{add}</li>
        <li className="actionTask equals" onClick={handleclick}>{equals}</li>
      </ul>
    </section>
  )
}

export default SideBar;