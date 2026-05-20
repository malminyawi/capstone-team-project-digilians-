import { Link } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
  FaEye,
  FaGoogle,
  FaFacebookF
} from "react-icons/fa";

function Register() {
  return (
    <div className="register-page">

      <div className="register-container shadow-lg">

        {/* LEFT SIDE */}
        <div className="form-side">

          <h1>Create Account</h1>

          <p className="subtitle">
            Join us and start your Egyptian adventure
          </p>

          <form onSubmit={(e) => e.preventDefault()}>

            {/* FULL NAME */}
            <label>Full Name</label>

            <div className="custom-input">
              <FaUser className="icon" />

              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            {/* EMAIL */}
            <label>Email Address</label>

            <div className="custom-input">
              <FaEnvelope className="icon" />

              <input
                type="email"
                placeholder="your@email.com"
              />
            </div>

            {/* PHONE + COUNTRY */}
            <div className="row">

              <div className="col-md-6">
                <label>Phone Number</label>

                <div className="custom-input">
                  <FaPhone className="icon" />

                  <input
                    type="text"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label>Country</label>

                <div className="custom-input">
                  <FaMapMarkerAlt className="icon" />

                  <input
                    type="text"
                    placeholder="Your country"
                  />
                </div>
              </div>

            </div>

            {/* PASSWORD */}
            <label>Password</label>

            <div className="custom-input">
              <FaLock className="icon" />

              <input
                type="password"
                placeholder="Create a password (min 8 characters)"
              />

              <FaEye className="eye-icon" />
            </div>

            {/* CONFIRM PASSWORD */}
            <label>Confirm Password</label>

            <div className="custom-input">
              <FaLock className="icon" />

              <input
                type="password"
                placeholder="Confirm your password"
              />

              <FaEye className="eye-icon" />
            </div>

            {/* CHECKBOX */}
            <div className="terms-box">

              <input type="checkbox" />

              <span>
                I agree to the
                <a href="/"> Terms of Service </a>
                and
                <a href="/"> Privacy Policy</a>
              </span>

            </div>

            {/* BUTTON */}
            <button className="create-btn">
              Create Account
            </button>

          </form>

          {/* DIVIDER */}
          <div className="divider">
            <span>Or sign up with</span>
          </div>

          {/* SOCIAL */}
          <div className="social-buttons">

            <button>
              <FaGoogle />
              Google
            </button>

            <button>
              <FaFacebookF />
              Facebook
            </button>

          </div>

          {/* LOGIN */}
          <p className="bottom-text">
            Already have an account?
            <Link to="/"> Sign In</Link>
          </p>

        </div>

        {/* RIGHT SIDE */}
        <div className="image-side">

          <div className="overlay">

            <div className="logo-box">
              E
            </div>

            <h2>Start Your Journey</h2>

            <p>
              Create an account and unlock exclusive benefits
            </p>

            <ul>
              <li>Book your dream destinations</li>
              <li>Save your favorite places</li>
              <li>Get personalized recommendations</li>
              <li>Earn rewards on every trip</li>
            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;