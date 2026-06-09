import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === "librarian" &&
      password === "admin123"
    ) {
      setIsAuthenticated(true);
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="page">
      <h2>Librarian Login</h2>

      <form onSubmit={handleLogin} className="form">
        <label>Username</label>

        <input
          type="text"
          placeholder="librarian"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="admin123"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;