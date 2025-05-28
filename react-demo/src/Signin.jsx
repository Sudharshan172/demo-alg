import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://demo-backend-gn7p.onrender.com/api/auth/signin/", formData);
      
      console.log("Login Response:", response.data); // Debugging API response
      
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token); // Ensure correct token key
        alert("Sign In Successful!");
        window.location.href="/";
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.error || "Login failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          New user?{" "}
          <Link to="/signup" className="text-blue-500 font-bold">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
