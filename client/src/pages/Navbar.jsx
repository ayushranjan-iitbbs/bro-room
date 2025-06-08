import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, Calendar } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand + Calendar */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-white text-xl font-mono font-semibold tracking-tight hover:text-purple-400 transition select-none"
            >
              &lt;<span className="text-purple-400">Bro-Room</span>/&gt;
            </Link>
            <Calendar className="text-purple-400" size={22} />
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            <SignedIn>
              <>
                <Link to="/new-meeting">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl font-medium transition">
                    + New Meeting
                  </button>
                </Link>
                <button className="text-gray-300 hover:text-white ml-4">
                  <Bell size={22} />
                </button>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-9 h-9 rounded-full',
                    },
                  }}
                />
              </>
            </SignedIn>

            <SignedOut>
              <>
                <Link to="/login">
                  <button className="border border-purple-500 text-purple-300 px-5 py-2 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="border border-purple-500 text-purple-300 px-5 py-2 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">
                    Sign In
                  </button>
                </Link>
              </>
            </SignedOut>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-purple-400 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-4">
          <SignedIn>
            <>
              <Link to="/new-meeting">
                <button className="w-full text-left px-3 py-1.5 text-sm rounded bg-purple-600 text-white hover:bg-purple-700">
                  + New Meeting
                </button>
              </Link>
              <div className="flex items-center gap-4 mt-3">
                <Bell size={20} className="text-gray-300" />
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-8 h-8 rounded-full',
                    },
                  }}
                />
              </div>
            </>
          </SignedIn>

          <SignedOut>
            <>
              <div className="space-y-2 mt-3">
                <Link to="/login">
                  <button className="w-full text-left px-3 py-1.5 text-sm rounded-md border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="w-full text-left px-3 py-1.5 text-sm rounded-md border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition">
                    Sign In
                  </button>
                </Link>
              </div>
            </>
          </SignedOut>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
