import React from 'react';
import "../style/LoginStyle.css";
import background from  "../assets/undraw_remotely_2j6y.svg";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="content">
        
      <div className="container">
      <h2 className=''>Task Manager</h2>
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
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <input type="submit" value="Log In" className="btn btn-block btn-primary" />

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
                        {/* <a href="#">Create&nbsp;An&nbsp;Account</a> */}
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
