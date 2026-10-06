function Login() {
  return `
    <div class="login-page">

      <div class="login-card">

        <h1>College Complaint Management System</h1>

        <p class="subtitle">
          BMS College of Engineering
        </p>

        <form>

          <div class="form-group">
            <label>College Email</label>

            <input
              type="email"
              placeholder="example@bmsce.ac.in"
              required
            />
          </div>

          <div class="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button class="primary-btn" type="submit">
            Login
          </button>

        </form>

        <p class="register-text">
          Don't have an account? Create Account
        </p>

      </div>

    </div>
  `;
}

export default Login;

