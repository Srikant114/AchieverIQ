import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">
          <Link to="/">AchieverIQ</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/courses" className="hover:text-primary transition">Courses</Link>
          <Link to="/results" className="hover:text-primary transition">Results</Link>
          <Link to="/login" className="bg-black text-white px-4 py-1 rounded hover:bg-primary hover:text-black transition">
            Login
          </Link>
          {/* <button onClick={toggleDarkMode}>
            {isDark ? '🌞' : '🌙'}
          </button> */}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* <button onClick={toggleDarkMode}>
            {isDark ? '🌞' : '🌙'}
          </button> */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/results" onClick={() => setMenuOpen(false)}>Results</Link>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-1 rounded hover:bg-primary hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
