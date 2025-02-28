import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to DataEase</h1>
      <p className="text-lg text-gray-600 mb-6">A user-friendly tool for data manipulation</p>
      <Link to="/login">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
