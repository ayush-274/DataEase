import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("Login Successful:", response.data);
      localStorage.setItem("token", response.data.token); // Store JWT
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      console.error("Login Failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="p-2 border border-gray-300 rounded mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border border-gray-300 rounded mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mb-2"
      >
        Login
      </button>

      <p className="text-sm">
        New User?{" "}
        <button
          onClick={() => navigate("/Register")} // Navigate to Register page
          className="text-blue-600 hover:underline"
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
