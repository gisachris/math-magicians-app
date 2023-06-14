import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/navigate.css';
import calculator from '../assets/images/calculator.png';

const Navigator = () => (
  <nav className="NavBar">
    <img src={calculator} className="CalcImage" alt="logo" />
    <span className="LogoText">Math Magicians</span>
    <ul className="Navigation">
      <li className="navInstance">
        <NavLink to="/" className="link">Home</NavLink>
      </li>
      <li className="navInstance">
        <NavLink to="/calculator" className="link">Calculator</NavLink>
      </li>
      <li className="navInstance">
        <NavLink to="/quotes" className="link">Quotes</NavLink>
      </li>
    </ul>
    <Outlet />
  </nav>
);

export default Navigator;
