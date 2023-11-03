import React from 'react';
import logo from '../assets/tmLogo.PNG';
import '../style/style.css';


function Navbar() {

    function onSignOut(e){
        e.preventDefault();

    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <img src={logo} alt="Logo" className="navbar-logo mx-4 m" />
        <span className="navbar-brand">Dashboard</span>

      <div className="navbar-text ml-auto">
        <span className="">
        <a href="#" onClick={onSignOut}>
          Sign Out
        </a>
        </span>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
