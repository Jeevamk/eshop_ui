import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">Sign in</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 text-center">Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">SignUp</Link>.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
