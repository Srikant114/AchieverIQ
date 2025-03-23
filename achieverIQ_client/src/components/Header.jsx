import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // 👤 Mock user (replace with real auth later)
  const user = {
    name: 'Srikant Sahu',
    email: 'srikantsahu114@gmail.com',
    role: 'superAdmin',
  };
  // const user = null;

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/courses' },
    { name: 'Results', to: '/results' },
    { name: 'Contact', to: '/' },
  ];

  // 🧠 Effects
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeDropdown = () => setShowDropdown(false);
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md backdrop-blur-md' : 'py-4'
      } bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
          AchieverIQ
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 flex-1 justify-center text-sm font-medium text-gray-700 dark:text-gray-300">
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

        {/* Right Side - Avatar/Login */}
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
                className="w-10 h-10 rounded-full bg-blue-600 text-white border-2 border-white dark:border-gray-700 font-bold flex items-center justify-center uppercase"
              >
                {user.name.charAt(0)}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded shadow-md p-4 text-sm text-gray-900 dark:text-white">
                  <div className="font-semibold text-primary">{user.name}</div>
                  <div className="text-gray-600 dark:text-gray-300">{user.email}</div>
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
        <div className="md:hidden bg-white dark:bg-gray-900 text-sm px-6 py-4 flex flex-col gap-3">
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
            <div className="flex flex-col gap-1 border-t pt-4 text-sm text-gray-800 dark:text-gray-100">
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
