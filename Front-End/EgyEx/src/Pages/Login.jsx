import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";

function Login() {
  return (
    <div className="login-page">

      <div className="login-container container shadow">

        {/* Left Side */}
        <div className="left-side">
          <div className="overlay">
            <div className="logo-box">E</div>

            <h1>Welcome Back!</h1>

            <p>
              Continue your journey through the wonders of Egypt
            </p>

            <ul>
              <li>Access your bookings</li>
              <li>Manage your wishlist</li>
              <li>Get exclusive deals</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">

          <h2>Sign In</h2>

          <p className="text-muted">
            Welcome back! Please enter your details
          </p>

          <form>

            <label>Email Address</label>

            <div className="input-box">
              <FaEnvelope />
              <input
                type="email"
                placeholder="your@email.com"
              />
            </div>

            <label>Password</label>

            <div className="input-box">
              <FaLock />
              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="d-flex justify-content-between mt-3">

              <div>
                <input type="checkbox" />
                <span className="ms-2">Remember me</span>
              </div>

              <a href="/">Forgot password?</a>

            </div>

            <button className="main-btn">
              Sign In
            </button>

          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-buttons">

            <button>
              <FaGoogle />
              Google
            </button>

            <button>
              <FaFacebook />
              Facebook
            </button>

          </div>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Sign up</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;