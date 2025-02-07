import { useState, type FormEvent} from 'react';
import "../styling/Login.css"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    setError("");
    console.log("Logging in with:", { email, password });

  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome to LMS</h2>
        
        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
