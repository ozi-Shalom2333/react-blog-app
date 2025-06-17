import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">React Dev Journal</h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Home
            </Link>
            <Link to="/tutorials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Tutorials
            </Link>
            <Link to="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Projects
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/tutorials"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tutorials
              </Link>
              <Link
                to="/projects"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;