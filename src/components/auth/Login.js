import React, { useState } from "react";
import { Link } from "react-router-dom";
import Model from "../common/Model";

function Login() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Model
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        heading={"Forgot password"}
        disableRegister={true}
      >
        <form>
          <h4>Enter Your Registered Email</h4>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>

          <div class="form-group mt-4">
            <button type="submit" class="btn btn-primary btn-lg">
              forgot password
            </button>
          </div>
        </form>
      </Model>

      <div class="signup-form  wow fadeIn" data-wow-delay="0.1s">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Sign In</h2>
          <p>Please fill in this form to login an account!</p>
          <hr />
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <label class="form-check-label">
              <input type="checkbox" required="required" /> I accept the Terms
              of Use &amp;Privacy Policy
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">
              Sign In
            </button>
          </div>
          <div>
            <span
              variant="primary"
              onClick={handleShow}
              role="button"
              className="bi-cursor-fill fw-bold text-primary"
            >
              Forgot Password
            </span>
          </div>
        </form>
        <div class="hint-text">
          New user? <Link to="/register">Create Account</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
