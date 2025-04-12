import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://local-democarcy-app.onrender.com/auth/login', { email, password });

      const { token } = response.data;

      if (token) {
        
        localStorage.setItem('token', token);

        toast('✔️ Login successfully');
        setEmail('');
        setPassword('');
        navigate('/'); 
      } else {
        toast('❌ No token received from the backend');
      }
    } catch (err) {
      console.error(err);
      toast(`❌ Failed to login: ${err.response?.data?.message || 'Unknown error'}`);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-overlay h-screen w-full flex flex-col justify-center"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-vector/indian-tricolor-theme-watercolor-texture-background-vector_1055-11999.jpg?ga=GA1.1.979019997.1742365171&semt=ais_hybrid&w=740)',
      }}
    >
      <div className="w-96 mx-auto p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg animate-fadeIn text-center">
        <h2 className="text-3xl mb-6 text-blue-800">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Login
          </button>
          <p className="mt-4 text-lg">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
