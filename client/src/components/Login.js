import React, { useState, useEffect }  from 'react';
import "../style/style.css";
import logo from '../assets/tmLogo.PNG';
import background from  "../assets/undraw_remotely_2j6y.svg";
import { Link } from 'react-router-dom';

function Login() {

  const [token, setToken] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword]  = useState('')

  useEffect(() => {
    // Retrieve the JWT token from local storage 
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const userData = {
    username: username,
    password: password
  }
  

  function logIn(e) {
    e.preventDefault();
    
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData)
    })
    .then((resp) => resp.json())
    .then((data) => { console.log(data)
  })
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
                  <h3>Log In</h3>
                </div>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <button className="btn btn-block btn-primary" onClick={logIn}>
                    <Link to="/home">Log In </Link></button>

                  <div className="d-flex my-3 align-items-center">
                    <span className="ml-auto">
                      <a href="#" className="forgot-pass">
                        Forgot Password
                      </a>
                    </span>
                  </div>
                  <div className="d-flex mb-3 align-items-center">
                    <span className="ml-auto">
                        New to Task Manager? 
                        <Link to="/signup"> Create account</Link>
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

export default Login;
