import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import achieverLogo from '../../assets/achieverIqLogo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const user = null

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Results', to: '/results' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-md backdrop-blur-md text-gray-900 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={achieverLogo}
            alt="AchieverIQ Logo"
            className="h-11 w-22"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 flex-1 justify-center text-sm font-medium">
          {navItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              className={`pb-1 border-b-2 ${
                currentPath === to
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:text-primary'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:block relative z-50">
          {!user ? (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-md transition"
            >
              Login
            </Link>
          ) : (
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-10 h-10 rounded-full bg-blue-600 text-white border-2 border-white font-bold flex items-center justify-center uppercase"
              >
                {user.name.charAt(0)}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-md p-4 text-sm text-gray-900">
                  <div className="font-semibold text-primary">{user.name}</div>
                  <div className="text-gray-600">{user.email}</div>
                  <div className="text-xs text-gray-400">{user.role}</div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-6 py-4 flex flex-col gap-3">
          {navItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`${
                currentPath === to
                  ? 'text-primary underline underline-offset-4'
                  : ''
              }`}
            >
              {name}
            </Link>
          ))}

          {!user ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
            >
              Login
            </Link>
          ) : (
            <div className="flex flex-col gap-1 border-t pt-4 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">{user.name}</span>
                <span className="text-gray-500">{user.email}</span>
              </div>
              <span className="text-xs text-gray-400">{user.role}</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
