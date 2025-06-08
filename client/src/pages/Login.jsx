// Login.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Login;
