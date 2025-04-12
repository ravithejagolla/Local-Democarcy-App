import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');  // Default role is 'user'

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://local-democarcy-app.onrender.com/auth/signup', {
        name,
        email,
        password,
        role,  // Sending the selected role to the backend
      });
      toast('✔️ Signup successfully');
      setName('');
      setEmail('');
      setPassword('');
      setRole('user'); // Reset role to 'user' after successful signup
      navigate('/login');
    } catch (err) {
      toast(`❌ Failed to register: ${err.response?.data?.message || 'Unknown error'}`);
    }
  };

  return (
    <div className="bg-cover bg-center bg-overlay h-screen w-full flex flex-col justify-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/indian-tricolor-theme-watercolor-texture-background-vector_1055-11999.jpg?ga=GA1.1.979019997.1742365171&semt=ais_hybrid&w=740)' }}>
      {/* Green overlay background */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-60"></div>
      
      <div className="w-96 mx-auto p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg animate-fadeIn text-center relative z-10">
        <h2 className="text-3xl mb-6 text-blue-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-11/12 p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 text-lg font-semibold"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-11/12 p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 text-lg font-semibold"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-11/12 p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 text-lg font-semibold"
            />
          </div>
          
          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="text-lg">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-11/12 p-3 border-2 border-gray-300 rounded-md focus:border-blue-500 text-lg font-semibold"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all">
            Sign Up
          </button>
          <p className="mt-4 text-lg">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
