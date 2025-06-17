import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = ({ darkMode, setDarkMode }) => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">404 - Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-4">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
    <Footer />
  </div>
);

export default NotFound;