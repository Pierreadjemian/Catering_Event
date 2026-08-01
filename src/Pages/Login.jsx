import { useState } from "react";
import "../Styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:8080";

const Login = () => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isSignup = mode === "signup";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isSignup) {
        const res = await axios.post(`${API_URL}/signup`, {
          name: form.name,
          email: form.email,
          password: form.password,
        });
        console.log("Signup success:", res.data);
        setMode("login");
      } else {
        const res = await axios.get(`${API_URL}/login`, {
          params: {
            email: form.email,
            password: form.password,
          },
        });
        console.log("Login success:", res.data);

       
        const userName = res.data.email;

       
        localStorage.setItem("users", JSON.stringify(res.data));
      
        navigate("/Menus", { state: { email: userName } });
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError("User not found");
        } else if (err.response.status === 400) {
          setError(err.response.data.message || "Invalid request");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("Could not reach the server");
      }
      console.log("Auth error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-heading">{isSignup ? "Create account" : "Welcome back"}</h1>
        <p className="auth-sub">
          {isSignup
            ? "Sign up to start booking with us."
            : "Log in to manage your bookings."}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          {isSignup && (
            <label className="auth-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
          )}

          <label className="auth-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="auth-field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              minLength={8}
              required
            />
          </label>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? "Please wait..." : isSignup ? "Sign up" : "Log in"}
          </button>
        </form>

        <p className="auth-switch">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            className="auth-switch-btn"
            onClick={() => setMode(isSignup ? "login" : "signup")}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;