import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Tutorials = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const tutorialPosts = blogPosts.filter((post) => post.category === 'Tutorials');

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Tutorials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive into our comprehensive React tutorials to level up your development skills. From
            basics to advanced topics, we've got you covered!
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Start Learning
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-semibold rounded-lg transition-colors">
              Explore All Tutorials
            </button>
          </div>
        </div>
      </section>

      {/* Tutorials Content Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Available Tutorials
          </h2>
          {tutorialPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorialPosts.map((post, index) => (
                <div key={post.id} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" data-aos="fade-in">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No tutorials available at the moment. Check back later!
              </p>
            </div>
          )}
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay="300">
        <Footer />
      </div>
    </div>
  );
};

export default Tutorials;
