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
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span className="navbar-brand">Dashboard</span>                 
        </div>
        <div className="navbar-text ml-auto">
        <span className="">
        <button className='btn btn-info' onClick={onSignOut}>
          Sign Out
        </button>
        </span>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
