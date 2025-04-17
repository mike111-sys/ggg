import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import AdminDashboard from './AdminDashboard';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const correctUsername = 'admin';
    const correctPassword = 'mypassword';

    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  if (isLoggedIn) {
    return (
      <AdminDashboard />
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <motion.form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <h2 className="text-2xl font-extrabold text-center text-blue-700">🔐 Login to Access</h2>

        <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50">
          <FaUserAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50">
          <FaLock className="text-gray-500 mr-2" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-transparent"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
          whileTap={{ scale: 0.95 }}
        >
          Log In
        </motion.button>

        <p className="text-sm text-gray-500 text-center">
          Only accessible by the admin. 🔒
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
