import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center fw-bold mb-4 text-primary">
          Welcome Back
        </h2>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>

            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>

            <div className="input-group">
              <span className="input-group-text">
                <FaLock />
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="d-flex justify-content-between mb-3">
            <div>
              <input type="checkbox" /> Remember Me
            </div>

            <a href="#" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-100">
            Login
          </button>

          {/* Register */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <a href="#" className="text-decoration-none">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;