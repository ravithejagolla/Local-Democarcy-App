import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">CivicConnect</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/neighborhood" className="hover:underline">Neighborhood</Link></li>
          <li><Link to="/legislation" className="hover:underline">Legislation</Link></li>
          <li><Link to="/feedback" className="hover:underline">Feedback</Link></li>
          <li><Link to="/vote" className="hover:underline">Vote</Link></li>
          <li><Link to="/organize" className="hover:underline">Initiatives</Link></li>
        </ul>

        {/* Auth Action Button */}
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:underline bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:underline bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
