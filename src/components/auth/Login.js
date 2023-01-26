import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div class="signup-form">
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
        </form>
        <div class="hint-text">
          New user? <Link to="/register">Create Account</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
