import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      console.log("Registration Successful:", response.data);
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Registration Failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="p-2 border border-gray-300 rounded mb-2 w-72"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 border border-gray-300 rounded mb-2 w-72"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border border-gray-300 rounded mb-2 w-72"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="p-2 border border-gray-300 rounded mb-2 w-72"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {/* Display error message if passwords don't match */}
      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      <button
        onClick={handleRegister}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 mb-2 w-72"
      >
        Register
      </button>

      <p className="text-sm">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-blue-600 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default Register;
