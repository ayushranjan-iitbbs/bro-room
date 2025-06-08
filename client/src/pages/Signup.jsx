 // Signup.jsx
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <SignUp />
    </div>
  );
};

export default Signup;
