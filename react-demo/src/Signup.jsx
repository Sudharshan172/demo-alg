import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Redirect after signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null); // Reset errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://demo-backend-gn7p.onrender.com/auth/signup/", formData);
      alert("Sign Up Successful! Please Sign In.");
      navigate("/signin"); // Redirect to sign-in page after registration
    } catch (err) {
      setError(err.response?.data?.error || "Signup failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form className="mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-2"
            required
          />
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
            className="w-full mt-4 p-2 bg-green-500 hover:bg-green-700 text-white rounded"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Existing user?{" "}
          <Link to="/signin" className="text-green-500 font-bold">
            Sign In Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
