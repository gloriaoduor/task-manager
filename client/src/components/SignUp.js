import React, { useState } from 'react';
import "../style/style.css";
import logo from '../assets/tmLogo.PNG';
import background from  "../assets/undraw_reminder_re_fe15.svg";
import { Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const[password_digest, setPassword_digest] = useState('');
  const [user, setUser] = useState('');

  const newUser ={
    username : username,
    password_digest: password_digest
  }

  function signUpFxn(e){
    e.preventDefault()
    console.log(username)
    fetch("http://127.0.0.1:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then((resp) => resp.json())
    .then((data) => console.log(data))

    window.alert("Account Created, Proceed to Log in")
  
    
  }

  return (
    <div className="content">
      <div className="container">
      
        <div className="row">
          <div className="col-md-6">
            <img
              src={background}
              alt="Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Sign&nbsp;Up</h3>
                </div>
                <form action="#" method="post">
                  <div className="form-group first mb-2">
                    <label htmlFor='email'>Email</label>
                    <input type="text" className="form-control"  id="email" required />
                  </div>
                  <div className="form-group first mb-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="username" required/>
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={password_digest} onChange={(e) => setPassword_digest (e.target.value)} id="password" required/>
                  </div>
                  <button className="btn btn-block btn-primary" onClick={signUpFxn}>
                   <Link to="/login">Sign up</Link></button>

                  <div className="d-flex my-3 align-items-center">
                    <span className="ml-auto">
                        Have an account? 
                        <Link to="/login"> Sign In</Link>
                    </span>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
