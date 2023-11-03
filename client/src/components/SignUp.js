import React from 'react';
import "../style/LoginStyle.css";
import background from  "../assets/undraw_reminder_re_fe15.svg";

function SignUp() {

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
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email" required />
                  </div>
                  <div className="form-group first mb-2">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" required/>
                  </div>
                  <div className="form-group last mb-4">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" required/>
                  </div>
                  <input type="submit" value="Sign Up" className="btn btn-block btn-primary" />
                 
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
