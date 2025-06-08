import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';

const Home = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div> 
         
         <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 select-none">
        Welcome to <span className="text-purple-400">Bro Room</span>!
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 select-none">
        Meetings where <span className="text-purple-400 font-semibold">Aura meets Aura !!
        </span>
      </p>

      <div className="flex gap-6 justify-center">
       { isSignedIn ? (<Link to="/meetings">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Get Started
          </button>
        </Link>):(<Link to="/signup">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Get Started
          </button>
        </Link>)
}

       {  isSignedIn ? (<Link to="/new-meeting">
          <button className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
            Start a Meeting
          </button>
        </Link>):(<Link to="/login">
          <button className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition">
            Start a Meeting
          </button>
        </Link>)}  
      </div>
    </div>
  </div>
  )
}

export default Home