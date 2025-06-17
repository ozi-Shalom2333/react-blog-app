import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">React Dev Journal</h3>
          <p className="text-gray-300 mb-6">
            Your go-to resource for React development tutorials, tips, and the latest trends in frontend development.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tutorials" className="hover:text-white transition-colors">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                React Trends
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Tools & Libraries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Best Practices
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2025 React Developer's Journal. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;